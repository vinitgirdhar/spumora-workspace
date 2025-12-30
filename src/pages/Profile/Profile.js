import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../../components/Login/Login';
import './Profile.css';

const SHOPIFY_ENDPOINT = `https://${process.env.REACT_APP_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`;

const getStoredAuth = () => {
  const token = localStorage.getItem('customerToken');
  const expiresAt = localStorage.getItem('customerTokenExpiry');

  if (!token || !expiresAt) return null;
  const isExpired = new Date(expiresAt) <= new Date();
  if (isExpired) {
    localStorage.removeItem('customerToken');
    localStorage.removeItem('customerTokenExpiry');
    return null;
  }

  return { token, expiresAt };
};

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => getStoredAuth());
  const [customer, setCustomer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const redirectMessage = useMemo(() => {
    if (location.state?.from === 'checkout') {
      return location.state?.message || 'Please sign in to continue to checkout.';
    }
    return '';
  }, [location.state]);

  useEffect(() => {
    const fetchCustomer = async () => {
      if (!auth?.token) {
        setCustomer(null);
        return;
      }

      setIsLoading(true);
      setError('');

      const query = `
        query getCustomer($token: String!) {
          customer(customerAccessToken: $token) {
            firstName
            lastName
            email
            phone
            defaultAddress {
              address1
              city
              country
            }
            orders(first: 5, sortKey: PROCESSED_AT, reverse: true) {
              edges {
                node {
                  id
                  name
                  processedAt
                  financialStatus
                  fulfillmentStatus
                  totalPriceV2 {
                    amount
                    currencyCode
                  }
                  statusUrl
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch(SHOPIFY_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
          },
          body: JSON.stringify({
            query,
            variables: { token: auth.token }
          }),
        });

        const { data, errors } = await response.json();

        if (errors?.length) {
          throw new Error(errors[0].message || 'Unable to load profile');
        }

        if (!data?.customer) {
          throw new Error('Session expired. Please sign in again.');
        }

        setCustomer(data.customer);
      } catch (err) {
        console.error('Profile load failed:', err);
        setError(err.message || 'Unable to load profile');
        localStorage.removeItem('customerToken');
        localStorage.removeItem('customerTokenExpiry');
        setAuth(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomer();
  }, [auth]);

  const handleLoginSuccess = () => {
    const nextAuth = getStoredAuth();
    setAuth(nextAuth);
    if (location.state?.from === 'checkout') {
      navigate('/shop', { replace: true });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('customerToken');
    localStorage.removeItem('customerTokenExpiry');
    setCustomer(null);
    setAuth(null);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-card__header">
          <div>
            <p className="profile-card__eyebrow">Account</p>
            <h1 className="profile-card__title">Your profile</h1>
            {redirectMessage && (
              <p className="profile-card__note">{redirectMessage}</p>
            )}
          </div>
          {auth && (
            <button className="profile-card__logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

        {!auth && (
          <div className="profile-card__auth">
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>
        )}

        {auth && (
          <div className="profile-card__body">
            {isLoading && <p className="profile-card__muted">Loading your details…</p>}
            {error && <p className="profile-card__error">{error}</p>}

            {customer && !isLoading && !error && (
              <>
                <div className="profile-card__section">
                  <h3>Contact</h3>
                  <p className="profile-card__muted">{customer.email}</p>
                  {customer.phone && <p className="profile-card__muted">{customer.phone}</p>}
                </div>

                <div className="profile-card__section">
                  <h3>Shipping</h3>
                  {customer.defaultAddress ? (
                    <p className="profile-card__muted">
                      {customer.defaultAddress.address1}, {customer.defaultAddress.city}, {customer.defaultAddress.country}
                    </p>
                  ) : (
                    <p className="profile-card__muted">Add your address at checkout.</p>
                  )}
                </div>

                <div className="profile-card__section">
                  <div className="profile-card__section-header">
                    <h3>Recent orders</h3>
                    <button className="profile-card__link" onClick={() => navigate('/shop')}>
                      Continue shopping
                    </button>
                  </div>
                  {customer.orders?.edges?.length ? (
                    <ul className="profile-card__orders">
                      {customer.orders.edges.map(({ node }) => (
                        <li key={node.id} className="profile-card__order">
                          <div>
                            <p className="profile-card__order-name">{node.name}</p>
                            <p className="profile-card__muted">
                              {new Date(node.processedAt).toLocaleDateString()} · {node.financialStatus || 'Pending'}
                            </p>
                          </div>
                          <div className="profile-card__order-meta">
                            <span>
                              {node.totalPriceV2.amount} {node.totalPriceV2.currencyCode}
                            </span>
                            {node.statusUrl && (
                              <a href={node.statusUrl} target="_blank" rel="noreferrer" className="profile-card__link">
                                Track
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="profile-card__muted">No orders yet. Your first one will appear here.</p>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
