// Product Images from assets
import cafeScrub1 from '../assets/cafe-scrub/image-1764351545016.png';
import cafeScrub2 from '../assets/cafe-scrub/image-1764351554621.png';
import cafeScrub3 from '../assets/cafe-scrub/image-1764351559333.png';
import cafeScrub4 from '../assets/cafe-scrub/image-1764351564876.png';
import cafeScrub5 from '../assets/cafe-scrub/image-1764351569267.png';

import neemNourish1 from '../assets/neem-nourish/image-1764351609629.png';
import neemNourish2 from '../assets/neem-nourish/image-1764351617307.png';
import neemNourish3 from '../assets/neem-nourish/image-1764351623577.png';
import neemNourish4 from '../assets/neem-nourish/image-1764351629015.png';
import neemNourish5 from '../assets/neem-nourish/image-1764351633444.png';

import saffronMilk1 from '../assets/saffron-milk/image-1764351411220.png';
import saffronMilk2 from '../assets/saffron-milk/image-1764351415687.png';
import saffronMilk3 from '../assets/saffron-milk/image-1764351426885.png';
import saffronMilk4 from '../assets/saffron-milk/image-1764351441603.png';
import saffronMilk5 from '../assets/saffron-milk/image-1764351445931.png';

import sunriseCitrus1 from '../assets/sunrise-citrus/image-1764351824830.png';
import sunriseCitrus2 from '../assets/sunrise-citrus/image-1764351830943.png';
import sunriseCitrus3 from '../assets/sunrise-citrus/image-1764351835597.png';
import sunriseCitrus4 from '../assets/sunrise-citrus/image-1764351842566.png';
import sunriseCitrus5 from '../assets/sunrise-citrus/image-1764351848215.png';

export const products = [
  {
    id: 1,
    name: 'Café Scrub',
    slug: 'cafe-scrub',
    shortDescription: 'Energizing coffee exfoliation',
    description: 'Awaken your senses with our invigorating Café Scrub soap. Infused with freshly ground coffee beans and rich cocoa butter, this luxurious bar gently exfoliates while deeply moisturizing your skin. The natural caffeine helps boost circulation, leaving your skin feeling refreshed, smooth, and radiant.',
    price: 18.99,
    originalPrice: 24.99,
    category: 'exfoliating',
    collection: 'botanical',
    scent: 'earthy',
    skinType: ['all', 'oily', 'combination'],
    features: ['exfoliating', 'energizing', 'moisturizing'],
    rating: 4.8,
    reviews: 127,
    inStock: true,
    isNew: false,
    isBestSeller: true,
    images: [cafeScrub1, cafeScrub2, cafeScrub3, cafeScrub4, cafeScrub5],
    ingredients: [
      { name: 'Arabica Coffee Grounds', benefit: 'Natural exfoliation and circulation boost' },
      { name: 'Cocoa Butter', benefit: 'Deep moisturization and skin softening' },
      { name: 'Coconut Oil', benefit: 'Nourishing and antimicrobial properties' },
      { name: 'Shea Butter', benefit: 'Rich hydration and skin protection' },
      { name: 'Vitamin E', benefit: 'Antioxidant protection' }
    ],
    benefits: [
      'Gently removes dead skin cells',
      'Boosts blood circulation',
      'Reduces appearance of cellulite',
      'Leaves skin silky smooth',
      'Energizing aromatherapy'
    ],
    howToUse: 'Wet skin thoroughly. Lather the soap between your hands or with a loofah. Massage gently onto skin in circular motions, focusing on rough areas. Rinse well with warm water. Use 2-3 times per week for best results.',
    size: '120g / 4.2oz',
    weight: '120g'
  },
  {
    id: 2,
    name: 'Neem Nourish',
    slug: 'neem-nourish',
    shortDescription: 'Purifying herbal therapy',
    description: 'Experience the ancient healing power of neem with our Neem Nourish soap. This therapeutic bar combines the purifying properties of neem leaf extract with soothing aloe vera and nourishing oils. Perfect for problem skin, it helps clear blemishes while maintaining your skin\'s natural moisture balance.',
    price: 16.99,
    originalPrice: null,
    category: 'therapeutic',
    collection: 'botanical',
    scent: 'herbal',
    skinType: ['oily', 'combination', 'sensitive'],
    features: ['purifying', 'antibacterial', 'soothing'],
    rating: 4.7,
    reviews: 89,
    inStock: true,
    isNew: true,
    isBestSeller: false,
    images: [neemNourish1, neemNourish2, neemNourish3, neemNourish4, neemNourish5],
    ingredients: [
      { name: 'Neem Leaf Extract', benefit: 'Natural antibacterial and antifungal' },
      { name: 'Aloe Vera', benefit: 'Soothing and healing properties' },
      { name: 'Tea Tree Oil', benefit: 'Antiseptic and acne-fighting' },
      { name: 'Turmeric', benefit: 'Anti-inflammatory and brightening' },
      { name: 'Olive Oil', benefit: 'Gentle cleansing and moisturizing' }
    ],
    benefits: [
      'Helps clear acne and blemishes',
      'Soothes irritated skin',
      'Controls excess oil production',
      'Natural antibacterial protection',
      'Promotes clear, healthy skin'
    ],
    howToUse: 'Create a rich lather with warm water. Apply to face and body, gently massaging for 30-60 seconds. Allow the neem-infused lather to work for a minute before rinsing. Use daily for best results.',
    size: '110g / 3.9oz',
    weight: '110g'
  },
  {
    id: 3,
    name: 'Saffron Milk',
    slug: 'saffron-milk',
    shortDescription: 'Luxurious radiance elixir',
    description: 'Indulge in the royal luxury of our Saffron Milk soap. Crafted with precious saffron strands, creamy goat milk, and pure honey, this opulent bar is your secret to glowing, luminous skin. The ancient beauty ritual of saffron meets modern skincare science for truly radiant results.',
    price: 24.99,
    originalPrice: 29.99,
    category: 'luxury',
    collection: 'premium',
    scent: 'floral',
    skinType: ['all', 'dry', 'sensitive'],
    features: ['brightening', 'moisturizing', 'anti-aging'],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    isNew: false,
    isBestSeller: true,
    images: [saffronMilk1, saffronMilk2, saffronMilk3, saffronMilk4, saffronMilk5],
    ingredients: [
      { name: 'Pure Saffron Strands', benefit: 'Skin brightening and anti-aging' },
      { name: 'Fresh Goat Milk', benefit: 'Deep nourishment and gentle exfoliation' },
      { name: 'Raw Honey', benefit: 'Natural humectant and antibacterial' },
      { name: 'Almond Oil', benefit: 'Vitamin E rich moisturization' },
      { name: 'Rose Water', benefit: 'Toning and aromatherapy' }
    ],
    benefits: [
      'Brightens and evens skin tone',
      'Reduces dark spots and pigmentation',
      'Deeply nourishes and hydrates',
      'Anti-aging properties',
      'Leaves skin glowing and radiant'
    ],
    howToUse: 'For best results, use as part of your evening skincare routine. Lather generously and massage onto damp skin for 1-2 minutes to allow the saffron and milk to penetrate. Rinse with lukewarm water and pat dry.',
    size: '115g / 4.0oz',
    weight: '115g'
  },
  {
    id: 4,
    name: 'Sunrise Citrus',
    slug: 'sunrise-citrus',
    shortDescription: 'Refreshing morning burst',
    description: 'Start your day with the vibrant energy of our Sunrise Citrus soap. A harmonious blend of orange, lemon, and grapefruit essential oils creates an uplifting shower experience that awakens your senses. Enriched with vitamin C and citrus extracts, this bar leaves your skin bright, fresh, and ready to face the day.',
    price: 15.99,
    originalPrice: null,
    category: 'refreshing',
    collection: 'essential',
    scent: 'citrus',
    skinType: ['all', 'oily', 'combination'],
    features: ['energizing', 'brightening', 'refreshing'],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    isNew: false,
    isBestSeller: false,
    images: [sunriseCitrus1, sunriseCitrus2, sunriseCitrus3, sunriseCitrus4, sunriseCitrus5],
    ingredients: [
      { name: 'Sweet Orange Oil', benefit: 'Mood-lifting and antiseptic' },
      { name: 'Lemon Peel Extract', benefit: 'Brightening and astringent' },
      { name: 'Grapefruit Essential Oil', benefit: 'Energizing and skin-toning' },
      { name: 'Vitamin C', benefit: 'Antioxidant and collagen support' },
      { name: 'Jojoba Oil', benefit: 'Balancing and moisturizing' }
    ],
    benefits: [
      'Invigorates and energizes',
      'Brightens dull skin',
      'Natural astringent properties',
      'Rich in antioxidants',
      'Uplifting aromatherapy'
    ],
    howToUse: 'Perfect for morning showers. Lather between hands and apply to wet skin. Breathe deeply to enjoy the aromatherapy benefits. Rinse thoroughly. Follow with your favorite moisturizer.',
    size: '125g / 4.4oz',
    weight: '125g'
  }
];

export const collections = [
  {
    id: 1,
    name: 'Botanical Collection',
    slug: 'botanical',
    tagline: "Nature's Finest Essences",
    description: 'Discover the healing power of plants with our Botanical Collection. Each bar is infused with carefully selected herbs, flowers, and botanical extracts that have been used for centuries in traditional skincare.',
    image: neemNourish1,
    products: products.filter(p => p.collection === 'botanical')
  },
  {
    id: 2,
    name: 'Essential Collection',
    slug: 'essential',
    tagline: 'Pure & Simple Luxury',
    description: 'Our Essential Collection features everyday luxury basics that cleanse, nourish, and protect. These versatile soaps are perfect for daily use, combining classic scents with effective formulations.',
    image: sunriseCitrus1,
    products: products.filter(p => p.collection === 'essential')
  },
  {
    id: 3,
    name: 'Premium Collection',
    slug: 'premium',
    tagline: 'Our Most Luxurious Creations',
    description: 'Experience the pinnacle of soap artistry with our Premium Collection. Featuring rare ingredients, precious oils, and exotic botanicals, these are our most luxurious creations for those who demand the very best.',
    image: saffronMilk1,
    products: products.filter(p => p.collection === 'premium')
  }
];

export const ingredients = [
  {
    id: 1,
    name: 'Shea Butter',
    origin: 'West Africa',
    description: 'Rich in vitamins A and E, shea butter deeply moisturizes and protects skin while promoting cell regeneration.',
    benefits: ['Deep moisturization', 'Anti-inflammatory', 'Skin protection', 'Cell regeneration'],
    image: '🧈'
  },
  {
    id: 2,
    name: 'Coconut Oil',
    origin: 'Southeast Asia',
    description: 'A versatile oil that cleanses, moisturizes, and provides natural antimicrobial protection.',
    benefits: ['Gentle cleansing', 'Antimicrobial', 'Moisturizing', 'Skin softening'],
    image: '🥥'
  },
  {
    id: 3,
    name: 'Olive Oil',
    origin: 'Mediterranean',
    description: 'Ancient beauty secret rich in antioxidants, providing gentle cleansing without stripping natural oils.',
    benefits: ['Antioxidant-rich', 'Gentle cleansing', 'Anti-aging', 'Nourishing'],
    image: '🫒'
  },
  {
    id: 4,
    name: 'Essential Oils',
    origin: 'Worldwide',
    description: 'Pure plant essences that provide aromatherapy benefits and natural skincare properties.',
    benefits: ['Aromatherapy', 'Natural fragrance', 'Therapeutic', 'Mood-enhancing'],
    image: '🌿'
  },
  {
    id: 5,
    name: 'Goat Milk',
    origin: 'Local Farms',
    description: 'Gentle and nourishing, goat milk contains lactic acid for natural exfoliation and vitamins for skin health.',
    benefits: ['Natural exfoliation', 'Rich in vitamins', 'pH balanced', 'Gentle'],
    image: '🥛'
  },
  {
    id: 6,
    name: 'Raw Honey',
    origin: 'Local Apiaries',
    description: 'A natural humectant with antibacterial properties that locks in moisture and promotes healing.',
    benefits: ['Natural humectant', 'Antibacterial', 'Healing', 'Moisturizing'],
    image: '🍯'
  },
  {
    id: 7,
    name: 'Activated Charcoal',
    origin: 'Bamboo',
    description: 'Powerful detoxifier that draws out impurities, toxins, and excess oil from deep within pores.',
    benefits: ['Deep cleansing', 'Pore minimizing', 'Detoxifying', 'Oil control'],
    image: '⬛'
  },
  {
    id: 8,
    name: 'Botanical Extracts',
    origin: 'Organic Gardens',
    description: 'Carefully selected plant extracts that provide targeted skincare benefits and natural beauty.',
    benefits: ['Targeted treatment', 'Natural healing', 'Skin-specific', 'Plant-powered'],
    image: '🌸'
  },
  {
    id: 9,
    name: 'Sea Salt',
    origin: 'Ocean Waters',
    description: 'Mineral-rich sea salt exfoliates, detoxifies, and replenishes skin with essential minerals.',
    benefits: ['Exfoliation', 'Mineral-rich', 'Detoxifying', 'Skin texture'],
    image: '🧂'
  },
  {
    id: 10,
    name: 'Natural Clays',
    origin: 'Earth',
    description: 'Pure clays that absorb excess oil, remove impurities, and leave skin refreshed and balanced.',
    benefits: ['Oil absorption', 'Purifying', 'Skin balancing', 'Pore cleansing'],
    image: '🏺'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Art of Cold Process Soap Making',
    slug: 'art-of-cold-process-soap-making',
    excerpt: 'Discover the traditional technique that makes our soaps so luxurious and skin-friendly.',
    content: 'Full article content here...',
    category: 'Behind the Scenes',
    author: 'Emma Spumora',
    date: '2024-01-15',
    image: cafeScrub1,
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Why Natural Ingredients Matter',
    slug: 'why-natural-ingredients-matter',
    excerpt: 'Learn about the benefits of using pure, natural ingredients in your daily skincare routine.',
    content: 'Full article content here...',
    category: 'Ingredient Spotlights',
    author: 'Dr. Sarah Chen',
    date: '2024-01-10',
    image: neemNourish1,
    readTime: '7 min read'
  },
  {
    id: 3,
    title: '5 Morning Skincare Rituals for Glowing Skin',
    slug: 'morning-skincare-rituals',
    excerpt: 'Transform your morning routine with these simple yet effective skincare practices.',
    content: 'Full article content here...',
    category: 'Skincare Tips',
    author: 'Emma Spumora',
    date: '2024-01-05',
    image: sunriseCitrus1,
    readTime: '4 min read'
  },
  {
    id: 4,
    title: 'Our Sustainability Journey',
    slug: 'sustainability-journey',
    excerpt: 'How we\'re working to minimize our environmental impact while maximizing quality.',
    content: 'Full article content here...',
    category: 'Sustainability',
    author: 'James Green',
    date: '2023-12-28',
    image: saffronMilk1,
    readTime: '6 min read'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'New York, NY',
    rating: 5,
    text: 'The Saffron Milk soap has completely transformed my skin! It\'s so soft and glowing now. I\'ve tried countless luxury brands, but nothing compares to Spumora.',
    product: 'Saffron Milk',
    image: null
  },
  {
    id: 2,
    name: 'Michael R.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'As someone with sensitive skin, finding the right soap was always a challenge. The Honey & Oat bar is gentle yet effective. Finally, no more irritation!',
    product: 'Honey & Oat',
    image: null
  },
  {
    id: 3,
    name: 'Emily T.',
    location: 'Chicago, IL',
    rating: 5,
    text: 'The Café Scrub is my morning essential! It wakes me up better than my coffee and leaves my skin incredibly smooth. The scent is divine.',
    product: 'Café Scrub',
    image: null
  },
  {
    id: 4,
    name: 'David K.',
    location: 'Seattle, WA',
    rating: 5,
    text: 'I bought the entire Botanical Collection as a gift for my wife, and now we both use them daily. The quality is unmatched, and the packaging is beautiful.',
    product: 'Botanical Collection',
    image: null
  }
];
