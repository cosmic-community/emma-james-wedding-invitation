import { WeddingDetails } from '@/types'
import { formatDate, getDaysUntilWedding, getCountdownText, optimizeImage } from '@/lib/utils'

interface HeroSectionProps {
  weddingDetails: WeddingDetails;
}

export default function HeroSection({ weddingDetails }: HeroSectionProps) {
  const { metadata } = weddingDetails
  const daysUntil = getDaysUntilWedding(metadata.wedding_date)
  const countdownText = getCountdownText(daysUntil)

  const heroImageUrl = metadata.hero_image
    ? optimizeImage(metadata.hero_image.imgix_url, {
        width: 1920,
        height: 1080,
        fit: 'crop',
        auto: 'format,compress',
      })
    : ''

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: heroImageUrl ? `url(${heroImageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: heroImageUrl ? 'transparent' : '#c9a989',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
          {metadata.bride_name} & {metadata.groom_name}
        </h1>
        <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-2xl md:text-3xl mb-4">{formatDate(metadata.wedding_date)}</p>
        <p className="text-xl md:text-2xl mb-8">{metadata.venue_name}</p>
        <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-8 py-4">
          <p className="text-lg md:text-xl font-medium">{countdownText}</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}