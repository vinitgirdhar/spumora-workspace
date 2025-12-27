# Shopify Integration Setup Guide

## ✅ Completed Integrations

### 1. **Buy Now Button** (ProductCard.js)
- Direct checkout from product cards
- Creates Shopify checkout session
- Redirects to secure Shopify payment page

### 2. **Backend Webhook Handler** (app.py)
Endpoints created:
- `/api/webhooks/order-paid` - Receives Shopify order notifications
- `/api/check-stock` - Check product availability
- `/api/submit-order` - Process orders
- `/api/sync-products` - Sync Shopify products to backend

### 3. **Customer Authentication** (Login.js)
- Login with Shopify customer accounts
- Create new customer accounts
- Token-based authentication
- Automatic login after signup

## 🔧 Shopify Admin Configuration Required

### Step 1: Set Up Webhook in Shopify

1. Go to your Shopify Admin: `https://spumora-2.myshopify.com/admin`
2. Navigate to **Settings → Notifications → Webhooks**
3. Click **Create webhook**
4. Configure:
   - **Event:** `Order payment`
   - **Format:** `JSON`
   - **URL:** `http://your-backend-url.com/api/webhooks/order-paid`
   - For local testing: Use ngrok to expose localhost:5000

### Step 2: Get Webhook Secret (Optional but Recommended)

1. In Shopify webhook settings, copy the webhook secret
2. Add to your backend `.env` file:
   ```
   SHOPIFY_WEBHOOK_SECRET=your_webhook_secret_here
   ```

### Step 3: Enable Customer Accounts

1. Go to **Settings → Checkout → Customer accounts**
2. Select **Accounts are optional** or **Accounts are required**
3. Save

## 🚀 Testing the Integration

### Test Buy Now Button:
1. Navigate to `/shop`
2. Click **Buy Now** on any product
3. You should be redirected to Shopify checkout

### Test Customer Login:
1. Navigate to `/login`
2. Create an account or login
3. Token is stored in localStorage

### Test Webhook (Local):
1. Install ngrok: `npm install -g ngrok`
2. Run backend: `python backend/app.py`
3. Expose: `ngrok http 5000`
4. Copy the ngrok URL and add it to Shopify webhook settings
5. Make a test purchase
6. Check backend console for webhook logs

## 📝 Environment Variables Needed

**.env** (React):
```
REACT_APP_SHOPIFY_STORE_DOMAIN=spumora-2.myshopify.com
REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN=35f67f2840e29ef2c7f6dbbf82a43965
REACT_APP_BACKEND_URL=http://localhost:5000
```

**backend/.env** (Python):
```
SHOPIFY_WEBHOOK_SECRET=your_webhook_secret
FLASK_ENV=development
```

## 🎯 Next Steps

1. **Production Deployment:**
   - Deploy backend to cloud (Heroku, AWS, etc.)
   - Update webhook URL in Shopify to production URL
   - Enable HTTPS for webhook security

2. **Database Integration:**
   - Replace in-memory storage with PostgreSQL/MongoDB
   - Store customer orders, inventory, etc.

3. **Email Notifications:**
   - Add Flask-Mail for order confirmations
   - Send receipts to customers

4. **Inventory Management:**
   - Sync real-time stock levels
   - Update product availability

## 🔒 Security Notes

- Never commit `.env` files
- Use webhook signature verification in production
- Implement rate limiting on webhook endpoints
- Use HTTPS in production
- Validate all webhook payloads
