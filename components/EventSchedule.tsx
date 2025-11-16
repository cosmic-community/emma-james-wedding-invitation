import { WeddingEvent } from '@/types'
import { formatDate, optimizeImage } from '@/lib/utils'

interface EventScheduleProps {
  events: WeddingEvent[];
}

export default function EventSchedule({ events }: EventScheduleProps) {
  if (!events || events.length === 0) {
    return null
  }

  return (
    <section id="events" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600">Join us for these special moments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => {
            const imageUrl = event.metadata.event_image
              ? optimizeImage(event.metadata.event_image.imgix_url, {
                  width: 800,
                  height: 600,
                  fit: 'crop',
                  auto: 'format,compress',
                })
              : ''

            return (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-up hover:shadow-xl transition-shadow"
              >
                {imageUrl && (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={event.metadata.event_name}
                      width="400"
                      height="256"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                    {event.metadata.event_name}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">
                          {formatDate(event.metadata.event_date)}
                        </p>
                        <p className="text-gray-600">{event.metadata.event_time}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-gray-700">{event.metadata.location}</p>
                    </div>

                    {event.metadata.dress_code && (
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                        <div>
                          <p className="text-gray-600 text-sm">Dress Code</p>
                          <p className="text-gray-900 font-medium">{event.metadata.dress_code}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {event.metadata.description && (
                    <p className="text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                      {event.metadata.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}