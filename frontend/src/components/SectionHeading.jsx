export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-10 lg:mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && <p className="text-sm font-semibold tracking-wider uppercase text-brand-600 mb-2">{eyebrow}</p>}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && <p className={`mt-3 text-base sm:text-lg text-gray-600 leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>{subtitle}</p>}
    </div>
  )
}
