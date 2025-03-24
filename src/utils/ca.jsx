import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const ca = (...inputs) => {
  return twMerge(clsx(inputs));
};
