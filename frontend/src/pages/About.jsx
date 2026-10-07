import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <>
      <Hero size="medium" title="About Destination Resort Centre" subtitle="A multi-purpose hospitality venue in Makutano — built for conferences, celebrations, comfortable stays and travellers heading toward Mt Kenya." primaryCta={{ to: '/contact', label: 'Get in Touch' }} image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading center={false} eyebrow="Our Story" title="Practical hospitality in the right place" subtitle="Destination Resort Centre sits on the Nyeri / Sagana Highway in Makutano, Kirinyaga County — a strategic location for both Nairobi-based clients and guests travelling further north." />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We are a multi-purpose venue offering conference facilities, guest accommodation, a restaurant, beautiful gardens for weddings and events, a swimming pool, and Kichakani Park for picnics and outdoor gatherings.</p>
                <p>Our focus is clear: provide reliable, welcoming spaces that work for real needs — corporate meetings, weddings, overnight stays and day visits that are easy to organise.</p>
                <p>We deliver practical professionalism, flexible facilities and a location that makes logistical sense.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
                <h3 className="font-semibold text-gray-900 mb-3">At a Glance</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between"><span>Location</span><span className="font-medium">Makutano, Kirinyaga</span></li>
                  <li className="flex justify-between"><span>Guest Rooms</span><span className="font-medium">~30 rooms</span></li>
                  <li className="flex justify-between"><span>Meeting Rooms</span><span className="font-medium">Multiple spaces</span></li>
                  <li className="flex justify-between"><span>Outdoor Areas</span><span className="font-medium">Gardens + Park</span></li>
                  <li className="flex justify-between"><span>Parking</span><span className="font-medium">Free on-site</span></li>
                  <li className="flex justify-between"><span>Wi-Fi</span><span className="font-medium">Free high-speed</span></li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Ideal For</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Corporate conferences & training · Board meetings · Weddings & private parties · Overnight stays · Weekend getaways · Stopovers en route to Mt Kenya · Family picnics & day visits</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-brand-700 text-white font-medium hover:bg-brand-800 transition">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
