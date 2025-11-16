import { getWeddingDetails, getWeddingEvents, getStoryMoments } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import WeddingInfo from '@/components/WeddingInfo'
import StoryTimeline from '@/components/StoryTimeline'
import EventSchedule from '@/components/EventSchedule'
import Navigation from '@/components/Navigation'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  const [weddingDetails, events, stories] = await Promise.all([
    getWeddingDetails(),
    getWeddingEvents(),
    getStoryMoments(),
  ])

  if (!weddingDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Wedding details not found</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation weddingDetails={weddingDetails} />
      <HeroSection weddingDetails={weddingDetails} />
      <WeddingInfo weddingDetails={weddingDetails} />
      <StoryTimeline stories={stories} />
      <EventSchedule events={events} />
    </main>
  )
}