import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      let newItems;
      
      if (existingIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }
      
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    
    case 'CLEAR_CART':
      return { ...initialState };
    
    case 'LOAD_CART':
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('spumora_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('spumora_cart', JSON.stringify({
      items: state.items,
      totalItems: state.totalItems,
      totalPrice: state.totalPrice
    }));
  }, [state.items, state.totalItems, state.totalPrice]);

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    dispatch({ type: 'OPEN_CART' });
  };

  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const createCheckout = async (items = state.items) => {
    try {
      // Build line items array from cart items
      const lineItems = items.map(item => ({
        // Prefer variantId; fall back to product-level IDs only if needed
        variantId: item.variantId || item.shopifyId || item.id,
        quantity: item.quantity || 1
      }));

      // Create checkout mutation
      const response = await fetch(
        `https://${process.env.REACT_APP_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
          },
          body: JSON.stringify({
            query: `mutation checkoutCreate($input: CheckoutCreateInput!) {
              checkoutCreate(input: $input) {
                checkout {
                  id
                  webUrl
                }
                checkoutUserErrors {
                  message
                  field
                }
              }
            }`,
            variables: {
              input: {
                lineItems: lineItems
              }
            }
          }),
        }
      );

      const { data } = await response.json();

      // Check for errors
      if (data.checkoutCreate.checkoutUserErrors.length > 0) {
        console.error('Checkout errors:', data.checkoutCreate.checkoutUserErrors);
        throw new Error(data.checkoutCreate.checkoutUserErrors[0].message);
      }

      // Redirect to Shopify secure checkout
      window.location.href = data.checkoutCreate.checkout.webUrl;
    } catch (error) {
      console.error('Failed to create checkout:', error);
      alert('Failed to proceed to checkout. Please try again.');
    }
  };

  return (
    <CartContext.Provider value={{
      ...state,
      addItem,
      removeItem,
      updateQuantity,
      toggleCart,
      closeCart,
      clearCart,
      createCheckout
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
