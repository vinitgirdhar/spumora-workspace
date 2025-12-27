/**
 * Utility functions for syncing Shopify data with backend
 */

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

/**
 * Sync product stock with backend
 * @param {string} shopifyId - Shopify product ID
 * @returns {Promise<object>} - Stock information
 */
export const checkStock = async (shopifyId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/check-stock`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shopifyId }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to check stock');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Stock check failed:', error);
    return { inStock: true, quantity: 0 }; // Fallback
  }
};

/**
 * Submit order to backend
 * @param {object} orderData - Order information including Shopify product IDs
 * @returns {Promise<object>} - Order confirmation
 */
export const submitOrder = async (orderData) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/submit-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit order');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Order submission failed:', error);
    throw error;
  }
};

/**
 * Sync all products with backend
 * @param {Array} products - Array of Shopify products
 * @returns {Promise<void>}
 */
export const syncProducts = async (products) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/sync-products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to sync products');
    }
    
    console.log('Products synced successfully');
  } catch (error) {
    console.error('Product sync failed:', error);
  }
};

export default {
  checkStock,
  submitOrder,
  syncProducts,
};
