# Spumora Backend - Flask API
# Requirements: Flask, Flask-CORS, Flask-Mail

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json
import os

app = Flask(__name__)
CORS(app)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-change-in-production'

# In-memory storage (replace with database in production)
orders = []
newsletter_subscribers = []
contact_messages = []

# Product data (mirroring frontend data)
products = [
    {
        "id": 1,
        "name": "Café Scrub",
        "slug": "cafe-scrub",
        "price": 14.99,
        "description": "Awaken your senses with our invigorating coffee scrub soap.",
        "collection": "energizing",
        "scent": "coffee",
        "skinType": ["all", "oily"],
        "badge": "Best Seller",
        "inStock": True
    },
    {
        "id": 2,
        "name": "Neem Nourish",
        "slug": "neem-nourish",
        "price": 12.99,
        "description": "Traditional healing meets modern luxury with purifying neem.",
        "collection": "purifying",
        "scent": "herbal",
        "skinType": ["oily", "combination"],
        "badge": None,
        "inStock": True
    },
    {
        "id": 3,
        "name": "Saffron Milk",
        "slug": "saffron-milk",
        "price": 18.99,
        "description": "Indulge in the golden luxury of saffron and milk.",
        "collection": "luxurious",
        "scent": "floral",
        "skinType": ["dry", "sensitive"],
        "badge": "New",
        "inStock": True
    },
    {
        "id": 4,
        "name": "Sunrise Citrus",
        "slug": "sunrise-citrus",
        "price": 13.99,
        "description": "Start your day with a burst of citrus freshness.",
        "collection": "energizing",
        "scent": "citrus",
        "skinType": ["all", "normal"],
        "badge": None,
        "inStock": True
    },
    {
        "id": 5,
        "name": "Lavender Dreams",
        "slug": "lavender-dreams",
        "price": 15.99,
        "description": "Drift away with calming French lavender.",
        "collection": "calming",
        "scent": "lavender",
        "skinType": ["all", "sensitive"],
        "badge": "Best Seller",
        "inStock": True
    },
    {
        "id": 6,
        "name": "Ocean Breeze",
        "slug": "ocean-breeze",
        "price": 14.99,
        "description": "Feel the refreshing touch of sea minerals.",
        "collection": "refreshing",
        "scent": "fresh",
        "skinType": ["all", "oily"],
        "badge": None,
        "inStock": True
    },
    {
        "id": 7,
        "name": "Honey & Oat",
        "slug": "honey-oat",
        "price": 13.99,
        "description": "Gentle nourishment with honey and oatmeal.",
        "collection": "nourishing",
        "scent": "sweet",
        "skinType": ["dry", "sensitive"],
        "badge": "New",
        "inStock": True
    },
    {
        "id": 8,
        "name": "Charcoal Detox",
        "slug": "charcoal-detox",
        "price": 15.99,
        "description": "Deep cleansing with activated charcoal.",
        "collection": "purifying",
        "scent": "neutral",
        "skinType": ["oily", "combination"],
        "badge": None,
        "inStock": True
    }
]

# ============================================
# API Routes
# ============================================

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "service": "Spumora API"
    })

# ============================================
# Products API
# ============================================

@app.route('/api/products', methods=['GET'])
def get_products():
    """Get all products with optional filtering"""
    collection = request.args.get('collection')
    scent = request.args.get('scent')
    skin_type = request.args.get('skinType')
    
    filtered_products = products
    
    if collection:
        filtered_products = [p for p in filtered_products if p['collection'] == collection]
    
    if scent:
        filtered_products = [p for p in filtered_products if p['scent'] == scent]
    
    if skin_type:
        filtered_products = [p for p in filtered_products if skin_type in p['skinType']]
    
    return jsonify({
        "success": True,
        "data": filtered_products,
        "count": len(filtered_products)
    })

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Get a single product by ID"""
    product = next((p for p in products if p['id'] == product_id), None)
    
    if not product:
        return jsonify({
            "success": False,
            "error": "Product not found"
        }), 404
    
    return jsonify({
        "success": True,
        "data": product
    })

@app.route('/api/products/slug/<slug>', methods=['GET'])
def get_product_by_slug(slug):
    """Get a single product by slug"""
    product = next((p for p in products if p['slug'] == slug), None)
    
    if not product:
        return jsonify({
            "success": False,
            "error": "Product not found"
        }), 404
    
    return jsonify({
        "success": True,
        "data": product
    })

# ============================================
# Orders API
# ============================================

@app.route('/api/orders', methods=['POST'])
def create_order():
    """Create a new order"""
    data = request.get_json()
    
    # Validate required fields
    required_fields = ['items', 'customer', 'shipping']
    for field in required_fields:
        if field not in data:
            return jsonify({
                "success": False,
                "error": f"Missing required field: {field}"
            }), 400
    
    # Create order
    order = {
        "id": len(orders) + 1,
        "orderNumber": f"SPU-{datetime.now().strftime('%Y%m%d')}-{len(orders) + 1:04d}",
        "items": data['items'],
        "customer": data['customer'],
        "shipping": data['shipping'],
        "subtotal": sum(item['price'] * item['quantity'] for item in data['items']),
        "shippingCost": 5.00 if sum(item['price'] * item['quantity'] for item in data['items']) < 50 else 0,
        "status": "pending",
        "createdAt": datetime.now().isoformat()
    }
    
    order['total'] = order['subtotal'] + order['shippingCost']
    orders.append(order)
    
    return jsonify({
        "success": True,
        "data": order,
        "message": "Order created successfully"
    }), 201

@app.route('/api/orders/<order_number>', methods=['GET'])
def get_order(order_number):
    """Get order by order number"""
    order = next((o for o in orders if o['orderNumber'] == order_number), None)
    
    if not order:
        return jsonify({
            "success": False,
            "error": "Order not found"
        }), 404
    
    return jsonify({
        "success": True,
        "data": order
    })

# ============================================
# Newsletter API
# ============================================

@app.route('/api/newsletter/subscribe', methods=['POST'])
def subscribe_newsletter():
    """Subscribe to newsletter"""
    data = request.get_json()
    
    if 'email' not in data:
        return jsonify({
            "success": False,
            "error": "Email is required"
        }), 400
    
    email = data['email'].lower().strip()
    
    # Check if already subscribed
    if any(sub['email'] == email for sub in newsletter_subscribers):
        return jsonify({
            "success": False,
            "error": "Email already subscribed"
        }), 400
    
    subscriber = {
        "id": len(newsletter_subscribers) + 1,
        "email": email,
        "subscribedAt": datetime.now().isoformat()
    }
    
    newsletter_subscribers.append(subscriber)
    
    return jsonify({
        "success": True,
        "message": "Successfully subscribed to newsletter"
    }), 201

# ============================================
# Contact API
# ============================================

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    """Submit contact form"""
    data = request.get_json()
    
    # Validate required fields
    required_fields = ['name', 'email', 'subject', 'message']
    for field in required_fields:
        if field not in data or not data[field].strip():
            return jsonify({
                "success": False,
                "error": f"Missing required field: {field}"
            }), 400
    
    contact = {
        "id": len(contact_messages) + 1,
        "name": data['name'].strip(),
        "email": data['email'].strip().lower(),
        "subject": data['subject'].strip(),
        "message": data['message'].strip(),
        "status": "unread",
        "createdAt": datetime.now().isoformat()
    }
    
    contact_messages.append(contact)
    
    # In production, you would send an email notification here
    
    return jsonify({
        "success": True,
        "message": "Message received. We'll get back to you within 24-48 hours."
    }), 201

# ============================================
# Collections API
# ============================================

collections = [
    {
        "id": 1,
        "name": "The Energizing Collection",
        "slug": "energizing",
        "description": "Start your day with an invigorating burst of energy.",
        "productCount": 2
    },
    {
        "id": 2,
        "name": "The Purifying Collection",
        "slug": "purifying",
        "description": "Deep cleansing for a fresh, clear complexion.",
        "productCount": 2
    },
    {
        "id": 3,
        "name": "The Luxurious Collection",
        "slug": "luxurious",
        "description": "Indulge in premium ingredients and golden luxury.",
        "productCount": 1
    }
]

@app.route('/api/collections', methods=['GET'])
def get_collections():
    """Get all collections"""
    return jsonify({
        "success": True,
        "data": collections,
        "count": len(collections)
    })

@app.route('/api/collections/<slug>', methods=['GET'])
def get_collection(slug):
    """Get collection by slug with its products"""
    collection = next((c for c in collections if c['slug'] == slug), None)
    
    if not collection:
        return jsonify({
            "success": False,
            "error": "Collection not found"
        }), 404
    
    collection_products = [p for p in products if p['collection'] == slug]
    
    return jsonify({
        "success": True,
        "data": {
            **collection,
            "products": collection_products
        }
    })

# ============================================
# Error Handlers
# ============================================

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": "Resource not found"
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "success": False,
        "error": "Internal server error"
    }), 500

# ============================================
# Run Server
# ============================================

if __name__ == '__main__':
    print("=" * 50)
    print("  SPUMORA API Server")
    print("=" * 50)
    print(f"  Running on: http://localhost:5000")
    print(f"  API Health: http://localhost:5000/api/health")
    print("=" * 50)
    app.run(debug=True, port=5000)
