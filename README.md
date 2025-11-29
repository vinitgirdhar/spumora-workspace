# Spumora - Luxury Artisan Soap E-Commerce

A beautiful, responsive e-commerce website for Spumora luxury artisan soaps, built with React and Flask.

## 🌿 Project Structure

```
spumora/
├── public/                 # Static files
│   └── index.html          # HTML template
├── src/                    # React frontend source
│   ├── components/         # Reusable components
│   │   ├── Header/         # Navigation header
│   │   ├── Footer/         # Site footer
│   │   ├── Cart/           # Shopping cart sidebar
│   │   └── ProductCard/    # Product card component
│   ├── pages/              # Page components
│   │   ├── Home/           # Home page
│   │   ├── Shop/           # Shop page with filtering
│   │   ├── Product/        # Product detail page
│   │   ├── Collections/    # Collections pages
│   │   ├── OurStory/       # About page
│   │   ├── Ingredients/    # Ingredients page
│   │   ├── Journal/        # Blog/journal page
│   │   └── Contact/        # Contact page
│   ├── context/            # React context providers
│   │   └── CartContext.js  # Shopping cart state
│   ├── data/               # Static data
│   │   └── products.js     # Products, collections, etc.
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles & design system
│   ├── App.js              # Main app component
│   └── App.css             # App-level styles
├── backend/                # Flask API
│   ├── app.py              # Flask application
│   └── requirements.txt    # Python dependencies
└── assets/                 # Product images
    └── products/           # Product photography
```

## 🎨 Design System

### Colors
- **Primary Sage:** #8B9D83
- **Dark Green:** #4A5D45
- **Cream/Ivory:** #F5F3EE
- **Warm Gold:** #C9A86A
- **Pure White:** #FFFFFF
- **Charcoal:** #2C2C2C

### Typography
- **Headings:** Cormorant Garamond (elegant serif)
- **Body:** Lato (clean sans-serif)

## 🚀 Getting Started

### Frontend (React)

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Backend (Flask)

1. Navigate to backend folder:
```bash
cd backend
```

2. Create virtual environment (optional but recommended):
```bash
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Run the Flask server:
```bash
python app.py
```

The API will be available at [http://localhost:5000](http://localhost:5000)

## 📱 Features

- **Responsive Design:** Mobile-first, works on all devices
- **Shopping Cart:** Persistent cart with add/remove/update functionality
- **Product Filtering:** Filter by collection, scent, and skin type
- **Product Sorting:** Sort by price, name, or newest
- **Beautiful Animations:** Smooth transitions and hover effects
- **Newsletter Signup:** Email subscription form
- **Contact Form:** Customer inquiry submission
- **Breadcrumb Navigation:** Easy navigation back to parent pages

## 🛍️ Pages

1. **Home** - Hero section, featured products, collections, testimonials
2. **Shop** - All products with filtering and sorting
3. **Product Detail** - Full product info with image gallery
4. **Collections** - Browse by collection category
5. **Our Story** - Brand story and values
6. **Ingredients** - Information about natural ingredients
7. **Journal** - Blog/articles about skincare and wellness
8. **Contact** - Contact form and company information

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/products` | Get all products (with optional filters) |
| GET | `/api/products/<id>` | Get product by ID |
| GET | `/api/products/slug/<slug>` | Get product by slug |
| GET | `/api/collections` | Get all collections |
| GET | `/api/collections/<slug>` | Get collection with products |
| POST | `/api/orders` | Create new order |
| GET | `/api/orders/<order_number>` | Get order by number |
| POST | `/api/newsletter/subscribe` | Subscribe to newsletter |
| POST | `/api/contact` | Submit contact form |

## 📦 Dependencies

### Frontend
- React 18
- React Router DOM 6
- CSS (no additional CSS framework)

### Backend
- Flask 3.0
- Flask-CORS
- python-dotenv
- gunicorn (production)

## 🌟 Product Lines

1. **Café Scrub** - Invigorating coffee scrub
2. **Neem Nourish** - Traditional neem healing
3. **Saffron Milk** - Luxurious saffron & milk
4. **Sunrise Citrus** - Refreshing citrus blend
5. **Lavender Dreams** - Calming French lavender
6. **Ocean Breeze** - Sea mineral freshness
7. **Honey & Oat** - Gentle nourishment
8. **Charcoal Detox** - Deep cleansing charcoal

## 📄 License

© 2024 Spumora. All rights reserved.
