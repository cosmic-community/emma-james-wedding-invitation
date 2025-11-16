// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Format date as short format
export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Calculate days until wedding
export function getDaysUntilWedding(weddingDate: string): number {
  const today = new Date();
  const wedding = new Date(weddingDate);
  const diffTime = wedding.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Get formatted countdown text
export function getCountdownText(days: number): string {
  if (days < 0) {
    return 'We Got Married!';
  } else if (days === 0) {
    return 'Today is the Day!';
  } else if (days === 1) {
    return '1 Day to Go!';
  } else {
    return `${days} Days to Go!`;
  }
}

// Optimize image URL with imgix parameters
export function optimizeImage(
  imgixUrl: string,
  options: {
    width?: number;
    height?: number;
    fit?: 'crop' | 'scale' | 'max';
    auto?: string;
  } = {}
): string {
  const params = new URLSearchParams();
  
  if (options.width) params.set('w', options.width.toString());
  if (options.height) params.set('h', options.height.toString());
  if (options.fit) params.set('fit', options.fit);
  if (options.auto) params.set('auto', options.auto);
  
  const queryString = params.toString();
  return queryString ? `${imgixUrl}?${queryString}` : imgixUrl;
}