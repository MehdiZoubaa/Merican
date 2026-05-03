import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-ocean to-primary-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-4 text-seafoam">Merican</h3>
            <p className="text-gray-200 leading-relaxed">
              Experience fine dining excellence with the freshest seafood and impeccable service in an atmosphere of timeless elegance.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-6 text-coral text-lg">Navigation</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-200 hover:text-seafoam transition">
                Home
              </Link>
              <Link href="/menu" className="block text-gray-200 hover:text-seafoam transition">
                Menu
              </Link>
              <Link href="/about" className="block text-gray-200 hover:text-seafoam transition">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-200 hover:text-seafoam transition">
                Contact
              </Link>
              <Link href="/reserve" className="block text-gray-200 hover:text-seafoam transition">
                Reserve Table
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-6 text-coral text-lg">Hours</h4>
            <div className="space-y-3 text-gray-200">
              <p><span className="font-semibold">Monday - Thursday</span><br/>11:00 AM - 10:00 PM</p>
              <p><span className="font-semibold">Friday - Saturday</span><br/>11:00 AM - 11:30 PM</p>
              <p><span className="font-semibold">Sunday</span><br/>12:00 PM - 9:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-6 text-coral text-lg">Contact</h4>
            <div className="space-y-3 text-gray-200">
              <p className="flex items-start gap-2">
                <span className="text-seafoam mt-1">📍</span>
                <span>123 Ocean Street<br/>Coastal City, CC 12345</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-seafoam">📞</span>
                <span>(555) 123-4567</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-seafoam">✉</span>
                <span>info@merican.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300">
          <p>&copy; 2024 Merican. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-seafoam transition">Facebook</a>
            <a href="#" className="hover:text-seafoam transition">Instagram</a>
            <a href="#" className="hover:text-seafoam transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
