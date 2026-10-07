import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

const facilities = [
  { title: 'Swimming Pool', description: 'Cool off and relax by the pool. Popular with residential guests and family visits.', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80' },
  { title: 'Alcaria Garden', description: 'Lush outdoor gardens perfect for weddings, parties, photo sessions and quiet walks.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80' },
  { title: 'Restaurant', description: 'On-site restaurant ideal for in-house guests, conference catering and casual dining.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' },
  { title: 'Kichakani Park', description: 'Ideal picnic and camping site for families, groups and nature-loving visitors.', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80' },
  { title: 'Conference Rooms', description: 'Multiple meeting spaces for corporate functions, training and boardroom meetings.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
  { title: 'Free Parking & Wi-Fi', description: 'Complimentary high-speed Wi-Fi and free on-site parking for every visit.', image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80' },
]

export default function Facilities() {
  return (
    <>
      <Hero size="medium" title="Facilities" subtitle="From conference rooms and guest accommodation to gardens, pool and picnic grounds — everything you need." primaryCta={{ to: '/contact', label: 'Book a Visit' }} image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="On Site" title="Spaces designed for many occasions" subtitle="Explore the range of facilities that make Destination Resort Centre a versatile choice." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {facilities.map((f) => (
              <article key={f.title} className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-full bg-brand-700 text-white font-medium hover:bg-brand-800 transition">Enquire About Our Facilities</Link>
          </div>
        </div>
      </section>
    </>
  )
}
