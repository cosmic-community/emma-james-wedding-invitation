// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Wedding Details (Singleton)
export interface WeddingDetails extends CosmicObject {
  type: 'wedding-details';
  metadata: {
    bride_name: string;
    groom_name: string;
    wedding_date: string;
    venue_name: string;
    venue_address: string;
    maps_link?: string;
    rsvp_deadline?: string;
    welcome_message?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    primary_color?: string;
  };
}

// Wedding Event
export interface WeddingEvent extends CosmicObject {
  type: 'wedding-events';
  metadata: {
    event_name: string;
    event_date: string;
    event_time: string;
    location: string;
    description?: string;
    dress_code?: string;
    event_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Our Story
export interface StoryMoment extends CosmicObject {
  type: 'our-story';
  metadata: {
    story_title: string;
    story_date?: string;
    description: string;
    story_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

export interface CosmicSingleResponse<T> {
  object: T;
}

// Type guards
export function isWeddingDetails(obj: CosmicObject): obj is WeddingDetails {
  return obj.type === 'wedding-details';
}

export function isWeddingEvent(obj: CosmicObject): obj is WeddingEvent {
  return obj.type === 'wedding-events';
}

export function isStoryMoment(obj: CosmicObject): obj is StoryMoment {
  return obj.type === 'our-story';
}