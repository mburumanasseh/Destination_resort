import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

const features = [
  { title: 'Flexible Meeting Rooms', text: 'Spaces suitable for small board meetings through to larger training sessions and conferences.' },
  { title: 'Reliable Connectivity', text: 'Free high-speed Wi-Fi and practical power setup so your event stays on track.' },
  { title: 'Catering Support', text: 'On-site restaurant and catering options for tea breaks, lunches and full-day packages.' },
  { title: 'Overnight Packages', text: 'Combine your meeting with accommodation for multi-day programmes.' },
  { title: 'Easy Access', text: 'Located on the main highway — straightforward for participants from Nairobi or further afield.' },
  { title: 'Parking & Logistics', text: 'Free on-site parking and practical spaces that make arrival and set-up simple.' },
]

export default function Conferences() {
  return (
    <>
      <Hero size="medium" title="Conferences & Meetings" subtitle="Professional spaces for corporate events, training, board meetings and team retreats — in a calm setting away from city distractions." primaryCta={{ to: '/contact', label: 'Request a Quote' }} secondaryCta={{ to: '/accommodation', label: 'View Rooms' }} image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Corporate & Private Functions" title="A practical venue for productive meetings" subtitle="Flexible conference facilities designed for both large corporate functions and smaller private meetings." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Tell us about your event</h2>
          <p className="text-gray-600 mb-8">Share preferred dates, expected participants and any special requirements.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-brand-700 text-white font-medium hover:bg-brand-800 transition">Enquire about Conferences</Link>
        </div>
      </section>
    </>
  )
}
