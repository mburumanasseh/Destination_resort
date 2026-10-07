import { Link } from 'react-router-dom'
export default function Hero({ title, subtitle, primaryCta, secondaryCta, image, overlay = true, size = 'large' }) {
  const heightClass = size === 'large' ? 'min-h-[70vh] lg:min-h-[80vh]' : 'min-h-[40vh] lg:min-h-[50vh]'
  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: image ? `url(${image})` : 'linear-gradient(135deg, #1a3d31 0%, #2b7356 50%, #3a8f6c 100%)' }} />
      {overlay && <div className="absolute inset-0 bg-black/45" />}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6">{title}</h1>
        {subtitle && <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {primaryCta && <Link to={primaryCta.to} className="inline-flex items-center px-6 py-3 rounded-full bg-accent-500 text-white font-medium hover:bg-accent-600 transition shadow-lg">{primaryCta.label}</Link>}
          {secondaryCta && <Link to={secondaryCta.to} className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white font-medium hover:bg-white/25 transition">{secondaryCta.label}</Link>}
        </div>
      </div>
    </section>
  )
}
