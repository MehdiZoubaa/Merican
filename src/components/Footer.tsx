import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ocean text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Merican</h3>
            <p className="text-gray-300">
              Premium seafood dining experience in the heart of the city.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/menu" className="block text-gray-300 hover:text-seafoam">
                Menu
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-seafoam">
                About Us
              </Link>
              <Link href="/reserve" className="block text-gray-300 hover:text-seafoam">
                Reserve
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <p>Mon - Thu: 11am - 10pm</p>
              <p>Fri - Sat: 11am - 11pm</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Ocean St, Coastal City</p>
              <p>📞 (555) 123-4567</p>
              <p>📧 info@merican.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Merican. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
