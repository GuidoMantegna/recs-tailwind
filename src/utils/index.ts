export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getFormattedDate(date: string): string {
  const newDate = new Date(date)

  return newDate.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  }).toLocaleUpperCase()
}