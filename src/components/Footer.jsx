import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  width={120}
                  height={35}
                  src="/images/global/svg/Clovity-logo.svg"
                  alt="Clovity"
                  className="rounded-md"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Atlassian Platinum Solution Partner delivering enterprise AI,
              Atlassian, and workforce solutions globally.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                Atlassian Platinum Partner
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Help Center Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://clovity.com"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Main Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://clovity.com/contact"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://marketplace.atlassian.com/vendors/398573336/clovity"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Atlassian Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="mailto:developers@clovity.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  developers@clovity.com
                </a>
              </li>
              <li>(925) 264-6360</li>
              <li className="leading-relaxed">
                11501 Dublin Blvd, Suite 200
                <br />
                Dublin, CA 94568, USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Clovity Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built for Atlassian Marketplace apps</p>
        </div>
      </div>
    </footer>
  );
}
