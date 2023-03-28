import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="w-1/4">
            <Link href="/" className="text-xl font-bold text-white">
              School Veil
            </Link>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
          </div>
          <div className="w-1/4">
            <h3 className="text-xl font-bold text-white">Useful Links</h3>
            <ul className="mt-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/schools"
                  className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                >
                  Schools
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <ul className="mt-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                >
                  Email
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                >
                  Phone
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                >
                  Address
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="text-xl font-bold text-white">Subscribe</h3>
            <p className="text-gray-400 mt-4">
              Sign up to receive our newsletter:
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  className="appearance-none bg-gray-800 border-gray-700 rounded-l w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:border-gray-400"
                  type="email"
                  placeholder="Your email address"
                />
                <button className="bg-gray-700 hover:bg-gray-600 rounded-r px-4 py-2 text-white">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </nav>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400">
            &copy; 2023 School Veil. All rights reserved. Designed and developed
            by{' '}
            <span className="font-alkatra text-white">
              Vapor SoftTech. CEO - Mr. Gilles Ashley
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
