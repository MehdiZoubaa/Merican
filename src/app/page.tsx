export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-ocean to-cyan-800 text-white flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2720%27 height=%2720%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.1%27%3E%3Cpath d=%27M0 0h20v20H0z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif">
              Merican
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-seafoam font-light">
              Premium Seafood Dining Experience
            </p>
            <p className="text-lg mb-12 text-gray-200 max-w-md">
              Indulge in the finest selection of fresh seafood, crafted by our award-winning chefs in an elegant oceanside ambiance.
            </p>
            <div className="flex gap-4">
              <a
                href="/menu"
                className="px-8 py-4 bg-coral text-white rounded-lg hover:bg-opacity-90 transition font-semibold"
              >
                Explore Menu
              </a>
              <a
                href="/reserve"
                className="px-8 py-4 bg-white text-ocean rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Reserve Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">Why Choose Merican?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-ocean rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                🐟
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Fresh Seafood</h3>
              <p className="text-gray-600">
                Daily fresh catch from local suppliers, ensuring the highest quality ingredients.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                👨‍🍳
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Expert Chefs</h3>
              <p className="text-gray-600">
                Award-winning culinary team with decades of experience in seafood cuisine.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-seafoam rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✨
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Elegant Ambiance</h3>
              <p className="text-gray-600">
                Sophisticated dining environment perfect for special occasions and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-ocean text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-2">15+</h3>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">500+</h3>
              <p className="text-lg">Dishes Perfected</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">50k+</h3>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">🌟 4.9</h3>
              <p className="text-lg">Rating Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sand">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8 font-serif text-ocean">Ready to Experience Excellence?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Book your table today and join thousands of satisfied guests who have experienced Merican's exceptional seafood cuisine.
          </p>
          <a
            href="/reserve"
            className="inline-block px-10 py-4 bg-ocean text-white rounded-lg hover:bg-opacity-90 transition font-semibold text-lg"
          >
            Reserve Your Table Now
          </a>
        </div>
      </section>
    </div>
  )
}
