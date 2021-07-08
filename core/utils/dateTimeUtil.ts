export function toShortDateFormat(date: Date): string {
  let monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let day = date.getDate();

  let monthIndex = date.getMonth();
  let monthName = monthNames[monthIndex];

  let year = date.getFullYear();

  return `${day}-${monthName}-${year}`;
}

export function unixTimeToDate(unixTimestamp: number): Date {
  return new Date(unixTimestamp);
}

export function isEarlierThan(date: Date, compare: Date): boolean {
  return date.getTime() < compare.getTime();
}

export function isLaterThan(date: Date, compare: Date): boolean {
  return date.getTime() > compare.getTime();
}

export function now(): Date {
  return new Date();
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.setDate(date.getDate() + days));
}