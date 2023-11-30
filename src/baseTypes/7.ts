/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  mon = "Monday",
  tues = "Tuesday",
  weds = "Wednesday",
  thu = "Thursday",
  fri = "Friday",
  sat = "Saturday",
  sun = "Sunday",
}

function isWeekend(weekDay: WeekDays): boolean {
  switch (weekDay) {
    case WeekDays.mon:
    case WeekDays.tues:
    case WeekDays.weds:
    case WeekDays.thu:
    case WeekDays.fri:
      return false;
    case WeekDays.sat:
    case WeekDays.sun:
      return true;
  }
}
