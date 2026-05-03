'use client'

const menuItems = [
  {
    id: 1,
    category: 'Appetizers',
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
    items: [
      { name: 'House Wine Selection', price: 8, description: 'By the glass' },
      { name: 'Craft Cocktails', price: 14, description: 'Signature creations' },
      { name: 'Fresh Juices', price: 6, description: 'Freshly squeezed daily' },
      { name: 'Espresso', price: 4, description: 'Italian roast coffee' },
    ],
  },
]

export default function MenuPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-ocean text-white">
        <div className="container">
          <h1 className="text-5xl font-bold font-serif mb-4">Our Menu</h1>
          <p className="text-lg text-seafoam">
            Carefully curated selection of premium seafood and seasonal specialties
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="container">
          {menuItems.map((category) => (
            <div key={category.id} className="mb-16">
              <h2 className="text-4xl font-bold font-serif mb-12 pb-4 border-b-2 border-ocean text-ocean">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, idx) => (
                  <div key={idx} className="border-b pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-coral font-bold text-xl">${item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sand">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">Ready to taste our creations?</h2>
          <a
            href="/reserve"
            className="inline-block px-8 py-3 bg-ocean text-white rounded-lg hover:bg-opacity-90 transition font-semibold"
          >
            Reserve Your Table
          </a>
        </div>
      </section>
    </div>
  )
}
