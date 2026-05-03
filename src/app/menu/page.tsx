'use client'

const menuItems = [
  {
    id: 1,
    category: 'Appetizers',
    icon: '🦑',
    items: [
      { name: 'Calamari Fritti', price: 12, description: 'Golden fried squid with lemon aioli' },
      { name: 'Shrimp Saganaki', price: 14, description: 'Crispy cheese with pan-seared shrimp' },
      { name: 'Oysters Rockefeller', price: 16, description: 'Half dozen fresh oysters with spinach' },
      { name: 'Seafood Platter', price: 28, description: 'Mixed selection for two' },
    ],
  },
  {
    id: 2,
    category: 'Main Courses',
    icon: '🐟',
    items: [
      { name: 'Grilled Atlantic Salmon', price: 32, description: 'Herb-crusted with seasonal vegetables' },
      { name: 'Lobster Thermidor', price: 42, description: 'Classic preparation with cognac sauce' },
      { name: 'Whole Mediterranean Branzino', price: 38, description: 'Baked in salt crust with herbs' },
      { name: 'Seafood Risotto', price: 28, description: 'Saffron risotto with mixed seafood' },
      { name: 'Cioppino Stew', price: 30, description: 'Italian-American seafood soup' },
      { name: 'Pan-Seared Sea Bass', price: 35, description: 'With champagne butter sauce' },
    ],
  },
  {
    id: 3,
    category: 'Sides',
    icon: '🥗',
    items: [
      { name: 'Truffle Fries', price: 8, description: 'Hand-cut with truffle oil and parmesan' },
      { name: 'Garlic Bread', price: 6, description: 'Toasted ciabatta with roasted garlic' },
      { name: 'Mixed Green Salad', price: 10, description: 'Fresh greens with house vinaigrette' },
      { name: 'Asparagus Hollandaise', price: 12, description: 'Seasonal asparagus with classic sauce' },
    ],
  },
  {
    id: 4,
    category: 'Desserts',
    icon: '🍰',
    items: [
      { name: 'Tiramisu', price: 10, description: 'Classic Italian mascarpone dessert' },
      { name: 'Panna Cotta', price: 9, description: 'Vanilla bean with berry compote' },
      { name: 'Chocolate Lava Cake', price: 11, description: 'With vanilla ice cream' },
      { name: 'Crème Brûlée', price: 10, description: 'Caramelized sugar custard' },
    ],
  },
  {
    id: 5,
    category: 'Beverages',
    icon: '🍷',
    items: [
      { name: 'House Wine Selection', price: 8, description: 'Premium selections by the glass' },
      { name: 'Craft Cocktails', price: 14, description: 'Signature creations' },
      { name: 'Fresh Juices', price: 6, description: 'Freshly squeezed daily' },
      { name: 'Espresso', price: 4, description: 'Italian roast coffee' },
    ],
  },
]

export default function MenuPage() {
  return (
    <div>
      {/* Premium Header */}
      <section className="py-24 bg-gradient-to-br from-ocean via-blue-900 to-primary-dark text-white">
        <div className="container text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-seafoam mb-8 max-w-2xl mx-auto">
            Discover our exquisite selection of premium seafood and seasonal specialties, 
            each dish prepared with meticulous attention to detail
          </p>
          <div className="w-20 h-1 bg-coral mx-auto"></div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          {menuItems.map((category, categoryIdx) => (
            <div key={category.id} className="mb-24">
              {/* Category Header */}
              <div className="flex items-center gap-6 mb-16">
                <span className="text-5xl">{category.icon}</span>
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean mb-2">
                    {category.category}
                  </h2>
                  <div className="w-16 h-1 bg-coral rounded-full"></div>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, idx) => (
                  <div key={idx} className="card group hover:shadow-2xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 group-hover:text-ocean transition">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-serif font-bold text-coral whitespace-nowrap ml-4">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Divider between categories */}
              {categoryIdx < menuItems.length - 1 && (
                <div className="mt-20 pt-20 border-t-2 border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Premium CTA */}
      <section className="section section-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-seafoam rounded-full blur-3xl"></div>
        </div>

        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Experience Culinary Excellence
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Each dish is a masterpiece, carefully crafted by our award-winning culinary team using only the finest ingredients
          </p>
          <a href="/reserve" className="btn btn-accent inline-block">
            Reserve Your Table Now
          </a>
        </div>
      </section>
    </div>
  )
}
