import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const loginCustomer = async (email, password) => {
    const query = `
      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken { 
            accessToken 
            expiresAt 
          }
          customerUserErrors { 
            message 
            field 
          }
        }
      }
    `;

    const variables = {
      input: { email, password }
    };

    try {
      const response = await fetch(
        `https://${process.env.REACT_APP_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
          },
          body: JSON.stringify({ query, variables }),
        }
      );

      const { data } = await response.json();

      if (data.customerAccessTokenCreate.customerUserErrors?.length > 0) {
        throw new Error(data.customerAccessTokenCreate.customerUserErrors[0].message);
      }

      if (data.customerAccessTokenCreate.customerAccessToken) {
        const token = data.customerAccessTokenCreate.customerAccessToken.accessToken;
        const expiresAt = data.customerAccessTokenCreate.customerAccessToken.expiresAt;
        
        localStorage.setItem('customerToken', token);
        localStorage.setItem('customerTokenExpiry', expiresAt);
        
        return { success: true, token };
      }
    } catch (err) {
      throw err;
    }
  };

  const signupCustomer = async (email, password) => {
    const query = `
      mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            id
            email
          }
          customerUserErrors {
            message
            field
          }
        }
      }
    `;

    const variables = {
      input: {
        email,
        password,
        acceptsMarketing: false
      }
    };

    try {
      const response = await fetch(
        `https://${process.env.REACT_APP_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
          },
          body: JSON.stringify({ query, variables }),
        }
      );

      const { data } = await response.json();

      if (data.customerCreate.customerUserErrors?.length > 0) {
        throw new Error(data.customerCreate.customerUserErrors[0].message);
      }

      if (data.customerCreate.customer) {
        // After signup, automatically login
        return await loginCustomer(email, password);
      }
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isSignup) {
        await signupCustomer(email, password);
        alert('Account created and logged in successfully!');
      } else {
        await loginCustomer(email, password);
        alert('Logged in successfully!');
      }
      
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      
      // Clear form
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignup ? 'Create Account' : 'Login'}</h2>
        
        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              minLength="5"
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : (isSignup ? 'Sign Up' : 'Login')}
          </button>
        </form>

        <div className="login-toggle">
          <button 
            onClick={() => setIsSignup(!isSignup)}
            disabled={isLoading}
          >
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
