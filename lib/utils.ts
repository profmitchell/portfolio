import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  try {
    // Ensure the date string is in a valid format
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    // Format the date using Intl.DateTimeFormat
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('Date formatting error:', error);
    return 'Invalid date';
  }
}