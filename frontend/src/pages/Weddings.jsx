import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

const spaces = [
  { title: 'Alcaria Garden', description: 'A beautiful outdoor setting ideal for ceremonies, cocktail hours and photography.' },
  { title: 'Reception Spaces', description: 'Indoor and outdoor options with flexible layouts for intimate gatherings or larger celebrations.' },
  { title: 'Overnight Guests', description: 'Accommodate your wedding party and out-of-town guests on-site.' },
  { title: 'Catering & Service', description: 'Work with our team on menus and service style that suit your vision.' },
]

export default function Weddings() {
  return (
    <>
      <Hero size="medium" title="Weddings & Events" subtitle="Celebrate your special day in serene gardens and flexible event spaces — perfect for ceremonies, receptions, parties and photo sessions." primaryCta={{ to: '/contact', label: 'Start Planning' }} secondaryCta={{ to: '/facilities', label: 'View Facilities' }} image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Celebrate With Us" title="A natural setting for unforgettable moments" subtitle="From intimate garden ceremonies to lively receptions and private parties." />
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {spaces.map((s) => (
              <div key={s.title} className="p-6 lg:p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-brand-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let’s talk about your wedding or event</h2>
          <p className="text-brand-100 mb-8">Share your preferred date, estimated guest count and the type of celebration you have in mind.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-accent-500 text-white font-medium hover:bg-accent-600 transition">Enquire about Weddings & Events</Link>
        </div>
      </section>
    </>
  )
}
