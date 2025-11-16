import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch wedding details (singleton)
export async function getWeddingDetails() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'wedding-details',
        slug: 'emma-james-wedding'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch wedding details');
  }
}

// Fetch wedding events
export async function getWeddingEvents() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'wedding-events'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Sort by event date
    const events = response.objects.sort((a, b) => {
      const dateA = new Date(a.metadata?.event_date || '').getTime();
      const dateB = new Date(b.metadata?.event_date || '').getTime();
      return dateA - dateB;
    });
    
    return events;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch wedding events');
  }
}

// Fetch story moments
export async function getStoryMoments() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'our-story'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Sort by story date
    const stories = response.objects.sort((a, b) => {
      const dateA = new Date(a.metadata?.story_date || '').getTime();
      const dateB = new Date(b.metadata?.story_date || '').getTime();
      return dateA - dateB;
    });
    
    return stories;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch story moments');
  }
}