import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm">DR</div>
              <div>
                <span className="block font-semibold text-white">Destination Resort Centre</span>
                <span className="text-xs text-brand-300">Makutano · Kirinyaga</span>
              </div>
            </div>
            <p className="text-sm text-brand-200 leading-relaxed">Your practical, well-located venue for conferences, weddings, getaways and stopovers on the way to Mt Kenya.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/conferences" className="hover:text-white transition">Conferences & Meetings</Link></li>
              <li><Link to="/weddings" className="hover:text-white transition">Weddings & Events</Link></li>
              <li><Link to="/accommodation" className="hover:text-white transition">Accommodation</Link></li>
              <li><Link to="/facilities" className="hover:text-white transition">Facilities</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Nyeri Highway, Makutano<br />Kirinyaga County, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+254707828785" className="hover:text-white transition">0707 82 87 85</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@destinationresortcentre.com" className="hover:text-white transition">info@destinationresortcentre.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Plan Your Visit</h3>
            <p className="text-sm text-brand-200 mb-4">Ready to book a conference, wedding or weekend getaway?</p>
            <Link to="/contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent-500 text-white text-sm font-medium hover:bg-accent-600 transition">Send Enquiry</Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-400">
          <p>© {new Date().getFullYear()} Destination Resort Centre. All rights reserved.</p>
          <p>Prototype website — prepared for management review</p>
        </div>
      </div>
    </footer>
  )
}
