import { StoryMoment } from '@/types'
import { formatShortDate, optimizeImage } from '@/lib/utils'

interface StoryTimelineProps {
  stories: StoryMoment[];
}

export default function StoryTimeline({ stories }: StoryTimelineProps) {
  if (!stories || stories.length === 0) {
    return null
  }

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600">A journey of love and laughter</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>

          <div className="space-y-12">
            {stories.map((story, index) => {
              const isEven = index % 2 === 0
              const imageUrl = story.metadata.story_image
                ? optimizeImage(story.metadata.story_image.imgix_url, {
                    width: 800,
                    height: 600,
                    fit: 'crop',
                    auto: 'format,compress',
                  })
                : ''

              return (
                <div
                  key={story.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-secondary rounded-lg p-6 shadow-md animate-slide-up">
                      {story.metadata.story_date && (
                        <p className="text-primary font-medium mb-2">
                          {formatShortDate(story.metadata.story_date)}
                        </p>
                      )}
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                        {story.metadata.story_title}
                      </h3>
                      <div
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: story.metadata.description }}
                      />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2">
                    {imageUrl && (
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={imageUrl}
                          alt={story.metadata.story_title}
                          width="400"
                          height="300"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}