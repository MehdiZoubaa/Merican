export default function Home() {
  return (
    <div>
      {/* Hero Section - Premium */}
      <section className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean via-blue-900 to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-seafoam rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="animate-slideUp">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">
              Merican
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-seafoam font-light tracking-wide">
              Premium Seafood Dining
            </p>
            <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Embark on an exquisite culinary journey where the finest fresh seafood meets award-winning craftsmanship in an atmosphere of timeless elegance.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/menu" className="btn btn-accent">
                Explore Our Menu
              </a>
              <a href="/reserve" className="btn btn-white">
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Premium Cards */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Merican?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what sets our restaurant apart from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌊',
                title: 'Pristine Seafood',
                desc: 'Daily-sourced from sustainable fisheries, guaranteeing the freshest catch on your plate.',
              },
              {
                icon: '👨‍🍳',
                title: 'Culinary Masters',
                desc: 'Award-winning chefs with 100+ years combined experience in fine seafood cuisine.',
              },
              {
                icon: '✨',
                title: 'Luxe Experience',
                desc: 'An ambiance of refined elegance designed for unforgettable dining moments.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="card text-center hover:shadow-xl">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-dark text-white">
        <div className="container">
          <h2 className="text-center text-4xl md:text-5xl font-serif mb-16">What Our Guests Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                text: 'An absolutely sublime dining experience. Every course was perfection.',
                rating: '5/5 ★',
              },
              {
                name: 'James Anderson',
                text: 'The seafood is incomparable. The chefs truly understand their craft.',
                rating: '5/5 ★',
              },
              {
                name: 'Elena Rodriguez',
                text: 'Elegant, sophisticated, and the service was impeccable throughout.',
                rating: '5/5 ★',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition">
                <p className="text-gray-100 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-seafoam mb-2">{testimonial.name}</p>
                <p className="text-coral">{testimonial.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Elegant */}
      <section className="section section-accent">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '18+', label: 'Years of Excellence' },
              { number: '500+', label: 'Culinary Creations' },
              { number: '50K+', label: 'Delighted Guests' },
              { number: '4.9★', label: 'Average Rating' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-serif text-ocean font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="section section-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Join us for an evening of exquisite flavors, impeccable service, and timeless elegance.
          </p>
          <a href="/reserve" className="btn btn-primary inline-block">
            Reserve Your Table
          </a>
        </div>
      </section>
    </div>
  )
}
