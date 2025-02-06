function today() {
  return new Date();
}

function monthOrWeekdayName(
  date: Date,
  display: "weekday" | "month",
  format: "short" | "long" | "narrow"
): string {
  if (!isDate(date)) {
    return "Invalid Date";
  }
  return date.toLocaleString("pt-BR", { [display]: format }).replace(".", "");
}

function day(date: Date): number {
  if (!isDate(date)) {
    return -1;
  }
  return date.getDate();
}

function plusDay(date: Date, day: number): Date {
  date.setDate(date.getDate() + day);
  return date;
}

function month(date: Date): number {
  if (!isDate(date)) {
    return -1;
  }
  return date.getMonth();
}

function year(date: Date): number {
  if (!isDate(date)) {
    return -1;
  }
  return date.getFullYear();
}

function weekday(date: Date): number {
  if (!isDate(date)) {
    return -1;
  }
  return date.getDay();
}

function formatDate(date: Date, format: string) {
  if (!isDate(date)) {
    return -1;
  }
  return date.toLocaleDateString(format);
}

function compareDates(date1: Date, date2: Date): boolean {
  let answer = false;

  if (date1.getDate() === date2.getDate()) {
    if (date1.getMonth() === date2.getMonth()) {
      if (date1.getFullYear() === date2.getFullYear()) {
        answer = true;
      }
    }
  }
  return answer;
}

/**
 * Not implemented
 */
function differenceBetweenDates(date1: Date, date2: Date): number {
  return -1;
}

function isDate(date: Object): boolean {
  return Object.prototype.toString.call(date) === "[object Date]";
}

export {
  today,
  monthOrWeekdayName,
  day,
  plusDay,
  month,
  year,
  weekday,
  formatDate,
  compareDates,
  differenceBetweenDates,
  isDate,
};
