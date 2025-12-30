// Local product fixtures were removed; the app now relies solely on live Shopify data.
export const products = [];

export const collections = [];

export const ingredients = [
  { id: 1, name: 'Shea Butter', origin: 'West Africa', description: 'Rich in vitamins A and E, deeply moisturizes and protects skin.', benefits: ['Deep moisturization', 'Anti-inflammatory', 'Skin protection'], image: '🧈' },
  { id: 2, name: 'Coconut Oil', origin: 'Southeast Asia', description: 'Cleanses, moisturizes, and provides natural antimicrobial protection.', benefits: ['Gentle cleansing', 'Antimicrobial', 'Moisturizing'], image: '🥥' },
  { id: 3, name: 'Olive Oil', origin: 'Mediterranean', description: 'Antioxidant-rich, provides gentle cleansing without stripping natural oils.', benefits: ['Antioxidant-rich', 'Gentle cleansing', 'Nourishing'], image: '🫒' },
  { id: 4, name: 'Essential Oils', origin: 'Worldwide', description: 'Pure plant essences that provide aromatherapy benefits and natural skincare properties.', benefits: ['Aromatherapy', 'Natural fragrance', 'Therapeutic'], image: '🌿' },
  { id: 5, name: 'Goat Milk', origin: 'Local Farms', description: 'Gentle and nourishing, contains lactic acid for natural exfoliation.', benefits: ['Natural exfoliation', 'Rich in vitamins', 'pH balanced'], image: '🥛' },
  { id: 6, name: 'Raw Honey', origin: 'Local Apiaries', description: 'Natural humectant with antibacterial properties that locks in moisture.', benefits: ['Humectant', 'Antibacterial', 'Healing'], image: '🍯' }
];

export const blogPosts = [
  { id: 1, title: 'The Art of Cold Process Soap', slug: 'cold-process-soap', excerpt: 'Why cold process creates a better, richer bar.', content: 'Full article content here...', category: 'Skincare Tips', author: 'Team Spumora', date: '2024-01-10', image: '', readTime: '5 min read' },
  { id: 2, title: 'Sourcing Ethical Ingredients', slug: 'ethical-ingredients', excerpt: 'How we choose sustainable, skin-loving inputs.', content: 'Full article content here...', category: 'Sustainability', author: 'Team Spumora', date: '2024-01-04', image: '', readTime: '4 min read' }
];

export const testimonials = [
  { id: 1, name: 'Sarah M.', location: 'New York, NY', rating: 5, text: 'The soaps leave my skin soft and glowing. Nothing compares.', product: 'Saffron Milk', image: null },
  { id: 2, name: 'Michael R.', location: 'Los Angeles, CA', rating: 5, text: 'The Honey & Oat bar is gentle yet effective—no more irritation.', product: 'Honey & Oat', image: null },
  { id: 3, name: 'Emily T.', location: 'Chicago, IL', rating: 5, text: 'Café Scrub wakes me up and leaves my skin incredibly smooth.', product: 'Café Scrub', image: null }
];
