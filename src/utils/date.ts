export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const _options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  };

  return date.toLocaleDateString('en-GB', _options);
}
