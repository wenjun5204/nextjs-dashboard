import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateDiff(dateTimeStamp: number) {
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime();
  var diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  let result = '';
  if (monthC >= 1) {
    result = `${Math.floor(monthC)}个月前`;
  } else if (weekC >= 1) {
    result = `${Math.floor(weekC)}周前`;
  } else if (dayC >= 1) {
    result = `${Math.floor(dayC)}天前`;
  } else if (hourC >= 1) {
    result = `${Math.floor(hourC)}小时前`;
  } else if (minC >= 1) {
    result = `${Math.floor(minC)}分钟前`;
  } else {
    result = '刚刚';
  }
  return result;
}


export function isoStringToTimestamp(isoDateString: string): number {
  const date = new Date(isoDateString);
  return date.getTime();
}