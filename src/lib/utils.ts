import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateFallback = (name: string) => {
  return name
    .split(' ')
    .map((letter) => letter[0])
    .join('');
};

export const getTypes = (pathname: string) => {
  switch (pathname) {
    case '/contacts':
      return 'Contacts';
    case '/contacts/favorites':
      return 'Favorites';
    case '/contacts/family':
      return 'Families';
    case '/contacts/friends':
      return 'Friends';
    case '/contacts/co-workers':
      return 'Co-Workers';
    default:
      return 'Invalid pathname';
  }
};
