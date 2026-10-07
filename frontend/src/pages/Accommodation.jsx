import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

const amenities = ['Tastefully furnished rooms', 'Free high-speed Wi-Fi', 'Free on-site parking', 'Daily housekeeping', 'On-site restaurant', 'Swimming pool access (residential guests)', 'Quiet environment for rest', 'Convenient highway location']

export default function Accommodation() {
  return (
    <>
      <Hero size="medium" title="Accommodation" subtitle="Comfortable, well-kept rooms for overnight stays, multi-day conferences, weekend getaways or a peaceful stopover on your journey." primaryCta={{ to: '/contact', label: 'Check Availability' }} secondaryCta={{ to: '/facilities', label: 'See Facilities' }} image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1920&q=80" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading center={false} eyebrow="Stay With Us" title="Rest well, wake ready" subtitle="Our guest rooms are designed for practical comfort — ideal whether you’re attending a conference, celebrating a wedding, or simply breaking your journey to Mt Kenya." />
              <ul className="grid sm:grid-cols-2 gap-3">
                {amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-brand-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-brand-700 text-white font-medium hover:bg-brand-800 transition">Enquire about Rooms</Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80" alt="Guest room" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
