import { useState } from 'react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

const enquiryTypes = ['Conference / Meeting', 'Wedding / Event', 'Accommodation', 'Day Visit / Picnic', 'General Enquiry']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', dates: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }

  return (
    <>
      <Hero size="medium" title="Contact & Enquiries" subtitle="Tell us what you need — conferences, weddings, rooms or a day visit. We’ll respond with availability and clear next steps." image="https://images.unsplash.com/photo-1423666639041-cf48540d60b3?auto=format&fit=crop&w=1920&q=80" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <SectionHeading center={false} eyebrow="Get in Touch" title="We’re ready to help" subtitle="Reach us by phone, email or the enquiry form. For urgent bookings, a call is often fastest." />
              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+254707828785" className="text-brand-700 hover:underline">0707 82 87 85</a>
                  <span className="text-gray-400 mx-1">·</span>
                  <a href="tel:+254794045120" className="text-brand-700 hover:underline">0794 04 51 20</a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:info@destinationresortcentre.com" className="text-brand-700 hover:underline">info@destinationresortcentre.com</a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Nyeri Highway, Makutano<br />Kirinyaga County, Kenya</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you</h3>
                    <p className="text-gray-600 max-w-sm mx-auto">Your enquiry has been received (prototype mode). In the live version this would notify the resort team immediately.</p>
                    <button type="button" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', type: '', dates: '', guests: '', message: '' }) }} className="mt-6 text-sm text-brand-700 font-medium hover:underline">Send another enquiry</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input id="name" name="name" required value={form.name} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="07XX XXX XXX" />
                      </div>
                      <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Enquiry Type *</label>
                        <select id="type" name="type" required value={form.type} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white">
                          <option value="">Select type</option>
                          {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-1">Preferred Dates</label>
                        <input id="dates" name="dates" value={form.dates} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="e.g. 15–17 Nov 2026" />
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Approx. Guests</label>
                        <input id="guests" name="guests" value={form.guests} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="e.g. 40" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y" placeholder="Tell us more about your requirements..." />
                    </div>
                    <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-700 text-white font-medium hover:bg-brand-800 transition">Send Enquiry</button>
                    <p className="text-xs text-gray-400">This is a prototype form. Submissions are not yet sent to the resort.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
