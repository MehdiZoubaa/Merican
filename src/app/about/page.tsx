export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-ocean text-white">
        <div className="container">
          <h1 className="text-5xl font-bold font-serif">About Merican</h1>
          <p className="text-lg text-seafoam mt-4">
            Discover our story, passion, and commitment to excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-6 text-ocean">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2009, Merican has been a beacon of culinary excellence in the seafood dining world. Our journey began with a simple vision: to bring the freshest, most delicious seafood to our community.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Starting from a small family-owned establishment, we've grown into one of the most respected seafood restaurants in the region, earning numerous awards and accolades for our commitment to quality and innovation.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to honor our founding principles while embracing modern culinary techniques and sustainable seafood practices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-ocean to-cyan-800 rounded-lg h-96"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sand">
        <div className="container">
          <h2 className="text-4xl font-bold font-serif mb-12 text-center text-ocean">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold font-serif mb-4 text-ocean">Quality</h3>
              <p className="text-gray-700">
                We source only the finest, freshest seafood from trusted suppliers, ensuring every dish exceeds expectations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold font-serif mb-4 text-ocean">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to sustainable fishing practices and environmental responsibility in everything we do.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold font-serif mb-4 text-ocean">Excellence</h3>
              <p className="text-gray-700">
                Our award-winning chefs bring passion and expertise to every plate, creating unforgettable dining experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold font-serif mb-12 text-center text-ocean">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Chef Marco',
                title: 'Head Chef & Owner',
                desc: '25 years of culinary experience',
              },
              {
                name: 'Chef Isabella',
                title: 'Executive Pastry Chef',
                desc: 'Award-winning dessert creator',
              },
              {
                name: 'Chef Antonio',
                title: 'Sous Chef',
                desc: 'Expert in traditional seafood techniques',
              },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-ocean to-cyan-800 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-ocean mb-2">{member.name}</h3>
                <p className="text-gray-700 font-semibold mb-1">{member.title}</p>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
