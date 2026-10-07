import { useState, useMemo } from 'react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

const bookingTypes = [
  { id: 'room', label: 'Guest Room', description: 'Overnight stay or multi-night accommodation', icon: '🛏️' },
  { id: 'conference', label: 'Conference / Meeting', description: 'Meeting rooms for corporate or private events', icon: '🏢' },
  { id: 'wedding', label: 'Wedding / Event', description: 'Gardens and spaces for celebrations', icon: '💍' },
  { id: 'day', label: 'Day Visit / Picnic', description: 'Pool, gardens or Kichakani Park day use', icon: '🌳' },
]

const roomOptions = [
  { id: 'standard', name: 'Standard Room', capacity: '2 guests', note: 'Comfortable, well-kept room' },
  { id: 'twin', name: 'Twin Room', capacity: '2 guests', note: 'Two single beds' },
  { id: 'family', name: 'Family Room', capacity: 'Up to 4', note: 'Extra space for families' },
]

export default function Booking() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    type: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
    roomType: 'standard',
    eventName: '',
    attendees: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [refCode, setRefCode] = useState('')

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 0
    const a = new Date(form.checkIn)
    const b = new Date(form.checkOut)
    const diff = Math.round((b - a) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }, [form.checkIn, form.checkOut])

  const canProceedStep1 = form.type !== ''
  const canProceedStep2 =
    form.checkIn &&
    (form.type === 'day' || form.checkOut) &&
    (form.type !== 'room' || (form.guests && form.rooms)) &&
    (form.type === 'room' || form.type === 'day' || form.attendees)

  const canSubmit =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.trim()

  function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return
    // Frontend-only: generate a mock reference
    const code = 'DRC-' + Date.now().toString(36).toUpperCase().slice(-6)
    setRefCode(code)
    setSubmitted(true)
    // Persist to localStorage so it feels real
    const bookings = JSON.parse(localStorage.getItem('drc_bookings') || '[]')
    bookings.push({ ...form, ref: code, createdAt: new Date().toISOString() })
    localStorage.setItem('drc_bookings', JSON.stringify(bookings))
  }

  function reset() {
    setSubmitted(false)
    setStep(1)
    setForm({
      type: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      rooms: '1',
      roomType: 'standard',
      eventName: '',
      attendees: '',
      name: '',
      email: '',
      phone: '',
      notes: '',
    })
    setRefCode('')
  }

  if (submitted) {
    return (
      <>
        <Hero
          size="medium"
          title="Booking Request Received"
          subtitle="Your request has been recorded. Our team will confirm availability shortly."
          image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
        />
        <section className="py-16 lg:py-24">
          <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you, {form.name.split(' ')[0]}!</h2>
            <p className="text-gray-600 mb-6">
              Your booking request has been saved. Reference number:
            </p>
            <p className="text-2xl font-mono font-bold text-brand-700 tracking-wider mb-8">{refCode}</p>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-left text-sm space-y-2 mb-8">
              <p><span className="text-gray-500">Type:</span> <strong>{bookingTypes.find(t => t.id === form.type)?.label}</strong></p>
              <p><span className="text-gray-500">Date:</span> <strong>{form.checkIn}{form.checkOut ? ` → ${form.checkOut}` : ''}</strong></p>
              {form.type === 'room' && <p><span className="text-gray-500">Rooms / Guests:</span> <strong>{form.rooms} room(s), {form.guests} guest(s)</strong></p>}
              {(form.type === 'conference' || form.type === 'wedding') && <p><span className="text-gray-500">Attendees:</span> <strong>{form.attendees}</strong></p>}
              <p><span className="text-gray-500">Contact:</span> <strong>{form.email} · {form.phone}</strong></p>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              This is a frontend prototype. In the live system this would notify the resort team and create a real reservation record.
            </p>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center px-6 py-3 rounded-full bg-brand-700 text-white font-medium hover:bg-brand-800 transition"
            >
              Make another booking
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Hero
        size="medium"
        title="Book Your Stay or Event"
        subtitle="Select what you need, choose dates, and send a request. We’ll confirm availability and next steps."
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= s ? 'bg-brand-700 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && <div className={`w-10 h-0.5 ${step > s ? 'bg-brand-700' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            {/* Step 1: Type */}
            {step === 1 && (
              <div>
                <SectionHeading
                  center={false}
                  eyebrow="Step 1"
                  title="What would you like to book?"
                  subtitle="Choose the type of booking so we can show the right options."
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  {bookingTypes.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => update('type', t.id)}
                      className={`text-left p-5 rounded-xl border-2 transition ${
                        form.type === t.id
                          ? 'border-brand-600 bg-brand-50'
                          : 'border-gray-100 hover:border-brand-200 bg-gray-50/50'
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{t.icon}</span>
                      <span className="font-semibold text-gray-900 block">{t.label}</span>
                      <span className="text-sm text-gray-600">{t.description}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    disabled={!canProceedStep1}
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-full bg-brand-700 text-white font-medium hover:bg-brand-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Dates & details */}
            {step === 2 && (
              <div>
                <SectionHeading
                  center={false}
                  eyebrow="Step 2"
                  title="Dates & details"
                  subtitle="Tell us when and how many people."
                />
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {form.type === 'day' ? 'Visit date' : 'Check-in / Start date'} *
                      </label>
                      <input
                        type="date"
                        required
                        value={form.checkIn}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => update('checkIn', e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    {form.type !== 'day' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-out / End date *</label>
                        <input
                          type="date"
                          required
                          value={form.checkOut}
                          min={form.checkIn || new Date().toISOString().split('T')[0]}
                          onChange={(e) => update('checkOut', e.target.value)}
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>
                    )}
                  </div>

                  {form.type === 'room' && nights > 0 && (
                    <p className="text-sm text-brand-700 font-medium">{nights} night{nights !== 1 ? 's' : ''}</p>
                  )}

                  {form.type === 'room' && (
                    <>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Number of rooms</label>
                          <select
                            value={form.rooms}
                            onChange={(e) => update('rooms', e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                          >
                            {[1, 2, 3, 4, 5].map((n) => (
                              <option key={n} value={n}>{n}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                          <select
                            value={form.guests}
                            onChange={(e) => update('guests', e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                              <option key={n} value={n}>{n}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Room preference</label>
                        <div className="space-y-2">
                          {roomOptions.map((r) => (
                            <label
                              key={r.id}
                              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer ${
                                form.roomType === r.id ? 'border-brand-600 bg-brand-50' : 'border-gray-200'
                              }`}
                            >
                              <input
                                type="radio"
                                name="roomType"
                                value={r.id}
                                checked={form.roomType === r.id}
                                onChange={() => update('roomType', r.id)}
                                className="text-brand-700"
                              />
                              <div>
                                <span className="font-medium text-gray-900">{r.name}</span>
                                <span className="text-sm text-gray-500 ml-2">({r.capacity})</span>
                                <p className="text-xs text-gray-500">{r.note}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {(form.type === 'conference' || form.type === 'wedding') && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event / Meeting name</label>
                        <input
                          type="text"
                          value={form.eventName}
                          onChange={(e) => update('eventName', e.target.value)}
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                          placeholder="e.g. Q4 Sales Workshop"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expected attendees *</label>
                        <input
                          type="number"
                          min="1"
                          required
                          value={form.attendees}
                          onChange={(e) => update('attendees', e.target.value)}
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                          placeholder="e.g. 40"
                        />
                      </div>
                    </>
                  )}

                  {form.type === 'day' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of visitors</label>
                      <input
                        type="number"
                        min="1"
                        value={form.attendees}
                        onChange={(e) => update('attendees', e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="e.g. 8"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!canProceedStep2}
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-full bg-brand-700 text-white font-medium hover:bg-brand-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <SectionHeading
                  center={false}
                  eyebrow="Step 3"
                  title="Your contact details"
                  subtitle="We’ll use these to confirm availability and send next steps."
                />
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="07XX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional notes</label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y"
                      placeholder="Special requests, dietary needs, setup requirements..."
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="px-6 py-2.5 rounded-full bg-accent-500 text-white font-medium hover:bg-accent-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Submit Booking Request
                  </button>
                </div>
                <p className="mt-4 text-xs text-gray-400 text-center">
                  Frontend prototype only. No payment is taken. A real backend can be connected later.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
