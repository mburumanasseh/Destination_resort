import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

const highlights = [
  { title: 'Conferences & Meetings', description: 'Flexible conference spaces for corporate events, board meetings and training — with reliable power, Wi-Fi and catering support.', to: '/conferences' },
  { title: 'Weddings & Events', description: 'Beautiful gardens and open spaces perfect for weddings, parties and photo sessions. Create lasting memories in a serene setting.', to: '/weddings' },
  { title: 'Comfortable Rooms', description: 'Tastefully furnished guest rooms for overnight stays, weekend getaways or multi-day conferences. Free Wi-Fi and parking included.', to: '/accommodation' },
  { title: 'Pool, Gardens & Park', description: 'Swim, relax in the gardens or enjoy a picnic at Kichakani Park. Ideal for families, day visits and group outings.', to: '/facilities' },
]

const reasons = [
  { title: 'Strategic Location', text: 'Conveniently positioned on the Nyeri/Sagana Highway — perfect stopover on the way to Mt Kenya.' },
  { title: 'Multi-Purpose Venue', text: 'One property that handles conferences, weddings, accommodation, dining and outdoor events.' },
  { title: 'Practical & Welcoming', text: 'Reliable facilities, free parking, free Wi-Fi and attentive service without the ultra-luxury price tag.' },
  { title: 'Flexible Spaces', text: 'From intimate boardroom meetings to larger gatherings and garden celebrations.' },
]

export default function Home() {
  return (
    <>
      <Hero
        title="Your Destination for Conferences, Weddings & Getaways"
        subtitle="A practical, well-located resort on the way to Mt Kenya — ideal for corporate events, celebrations, overnight stays and family days out."
        primaryCta={{ to: '/contact', label: 'Enquire Now' }}
        secondaryCta={{ to: '/facilities', label: 'Explore Facilities' }}
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Offer" title="Everything you need in one place" subtitle="Whether you're planning a corporate conference, a wedding, a weekend escape or a simple stopover — we have the space and facilities to make it work." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {highlights.map((item) => (
              <Link key={item.title} to={item.to} className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg hover:border-brand-100 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-700 transition">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading center={false} eyebrow="Why Destination Resort" title="Practical hospitality in the right location" subtitle="We focus on reliable facilities, flexible spaces, good service and a convenient location for both Nairobi-based clients and travellers heading to Mt Kenya." />
              <div className="space-y-5">
                {reasons.map((r) => (
                  <div key={r.title} className="flex gap-4">
                    <div className="w-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{r.title}</h4>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center text-brand-700 font-medium hover:text-brand-800 transition">Learn more about us →</Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80" alt="Resort outdoor space" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to plan your next event or stay?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">Tell us about your conference, wedding, accommodation needs or day visit. Our team will respond promptly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-accent-500 text-white font-medium hover:bg-accent-600 transition">Send an Enquiry</Link>
            <a href="tel:+254707828785" className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">Call 0707 82 87 85</a>
          </div>
        </div>
      </section>
    </>
  )
}
