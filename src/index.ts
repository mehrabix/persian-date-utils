/**
 * Convert Persian digits to Latin digits
 *
 * This function replaces Persian digits (۰-۹) in a given string with their corresponding Latin digits (0-9).
 *
 * @param str - The string containing Persian digits (۰-۹) to be converted.
 * @returns A string with all Persian digits replaced by Latin digits.
 */
export function convertToLatinDigits(str: string): string {
  return str.replace(/[۰-۹]/g, (match: string) =>
    String.fromCharCode(match.charCodeAt(0) - 1728),
  );
}

/**
 * Get a Shamsi (Persian) date in "YYYY/MM/DD" format.
 *
 * This function returns the current date in the Persian calendar, formatted as "YYYY/MM/DD".
 * The date is returned with Latin digits (e.g., "1400/01/01").
 *
 * @returns A string representing the current Shamsi date in "YYYY/MM/DD" format.
 */
export function getShamsiDateYMD(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const date = formatter.format(now);
  return convertToLatinDigits(date);
}

/**
 * Get a Shamsi (Persian) date in "YYYY-MM-DD" format.
 *
 * This function returns the current date in the Persian calendar, formatted as "YYYY-MM-DD"
 * with hyphens separating the year, month, and day. The date is returned with Latin digits (e.g., "1400-01-01").
 *
 * @returns A string representing the current Shamsi date in "YYYY-MM-DD" format.
 */
export function getShamsiDateYMDHyphen(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const date = formatter.format(now);
  return convertToLatinDigits(date.replace(/\//g, '-'));
}

/**
 * Get a Shamsi (Persian) date in "DD/MM/YYYY" format.
 *
 * This function returns the current date in the Persian calendar, formatted as "DD/MM/YYYY".
 * The date is returned with Latin digits (e.g., "01/01/1400").
 *
 * @returns A string representing the current Shamsi date in "DD/MM/YYYY" format.
 */
export function getShamsiDateDMY(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const date = formatter.format(now);
  return convertToLatinDigits(date);
}

/**
 * Get a Shamsi (Persian) date in "DD-MM-YYYY" format.
 *
 * This function returns the current date in the Persian calendar, formatted as "DD-MM-YYYY".
 * The date is returned with Latin digits (e.g., "01-01-1400").
 *
 * @returns A string representing the current Shamsi date in "DD-MM-YYYY" format.
 */
export function getShamsiDateDMYHyphen(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const date = formatter.format(now);
  return convertToLatinDigits(date.replace(/\//g, '-'));
}

/**
 * Get a short Shamsi (Persian) date in "DD Month YYYY" format.
 *
 * This function returns the current date in the Persian calendar, formatted as
 * "DD Month YYYY", where the date and month are in Persian and the digits are in Latin.
 * Example: "01 فروردین 1400".
 *
 * @returns A string representing the short Shamsi date in "DD Month YYYY" format.
 */
export function getShamsiDateShort(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  const date = formatter.format(now);
  return convertToLatinDigits(date);
}

/**
 * Get a short Shamsi (Persian) date in "Month YYYY" format.
 *
 * This function returns the current month and year in the Persian calendar, formatted as
 * "Month YYYY", where the month is in Persian and the digits are in Latin.
 * Example: "فروردین 1400".
 *
 * @returns A string representing the Shamsi date in "Month YYYY" format.
 */
export function getShamsiDateMonthYear(): string {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: 'long',
  });
  const date = formatter.format(now);
  return convertToLatinDigits(date);
}

/**
 * Get the current Persian year.
 *
 * @returns The current Persian year.
 */
export function getShamsiYear(): number {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
  });
  return Number.parseInt(convertToLatinDigits(formatter.format(now)), 10);
}

/**
 * Get the current Persian week number (1-52).
 *
 * This function calculates the current week number in the Persian calendar.
 * It assumes the Persian New Year starts on the exact astronomical Nowruz,
 * and divides the days since then by 7 to calculate the week number.
 * If the current date is before the Persian New Year, it uses the previous year's Persian New Year.
 *
 * @returns A string representing the current week number in the Persian calendar (1-52),
 *          with the digits converted to Latin.
 */
export function getShamsiWeek(): string {
  const now = new Date();

  // You would need a library to calculate the exact Persian New Year date for the current year.
  // Here we assume you have a function getPersianNewYearDate() that returns the exact date.
  const persianNewYear = getPersianNewYearDate(now.getFullYear());

  // Adjust the Persian New Year if the current date is before the Persian New Year
  if (now < persianNewYear) {
    // If the current date is before the Persian New Year, use last year's Persian New Year
    persianNewYear.setFullYear(now.getFullYear() - 1);
  }

  // Calculate the number of days since the Persian New Year
  const daysSinceStartOfYear = Math.floor(
    (now.getTime() - persianNewYear.getTime()) / (1000 * 60 * 60 * 24),
  );

  // Persian calendar weeks are 7 days long
  const weekNumber = Math.ceil(daysSinceStartOfYear / 7);

  return convertToLatinDigits(weekNumber.toString());
}

/**
 * A helper function to calculate the exact date of Persian New Year.
 * This function should use a library or more accurate algorithm to determine the exact date.
 *
 * @param year The year to calculate the Persian New Year for.
 * @returns The exact date of the Persian New Year (Nowruz) for the given year.
 */
function getPersianNewYearDate(year: number): Date {
  // Implement or use a library for exact Nowruz calculation.
  // For the sake of the example, we return March 21st.
  return new Date(year, 2, 21); // Default to March 21st
}

/**
 * Convert a Persian date in "YYYY/MM/DD" format to a Gregorian date.
 *
 * @param persianDate - The Persian date object in "YYYY/MM/DD" format.
 * @returns The Gregorian date as a string in "MM/DD/YYYY" format.
 */
export function convertToGregorianDate(persianDate: string): string {
  const [year, month, day] = persianDate.split('/').map(Number);

  // Persian calendar's new year starts on the 21st of March in the Gregorian calendar
  const persianNewYear = new Date(year, 2, 21); // March 21st (start of Persian year)

  // Days in months for regular and leap Persian years
  const persianMonthDays = [
    [31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30], // Regular year
    [31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 29], // Leap year
  ];

  // Check if the Persian year is a leap year (Persian calendar rule)
  const isLeapYear = year % 4 === 3; // Persian leap year rule (approximately)

  const daysInPersianMonth = isLeapYear
    ? persianMonthDays[1]
    : persianMonthDays[0];

  // Calculate the number of days passed since the Persian New Year
  let totalDays = 0;
  for (let i = 0; i < month - 1; i++) {
    totalDays += daysInPersianMonth[i];
  }
  totalDays += day;

  // Convert the total number of days into a Gregorian date
  const gregorianStart = new Date(persianNewYear.getFullYear(), 2, 21); // Start of Persian year (March 21st)
  const gregorianDate = new Date(
    gregorianStart.getTime() + totalDays * 24 * 60 * 60 * 1000,
  );

  // Format the Gregorian date to "MM/DD/YYYY" using template literals
  const gYear = gregorianDate.getFullYear();
  const gMonth = String(gregorianDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const gDay = String(gregorianDate.getDate()).padStart(2, '0');

  return `${gMonth}/${gDay}/${gYear}`;
}

/**
 * Get the Persian week number based on the current date or a custom date.
 *
 * @param date - The date for which to calculate the week number (default is the current date).
 * @param startDate - The starting date of the Persian year (default is March 21st of the current year).
 * @returns The Persian week number as a string with Latin digits.
 */
export function getShamsiWeekNumber(
  date = new Date(),
  startDate = new Date(date.getFullYear(), 2, 21),
): string {
  // Ensure the subtraction works by converting the dates to timestamps (milliseconds)
  const daysSinceStartOfYear = Math.floor(
    (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  // Persian calendar weeks are 7 days long, calculate the week number
  const weekNumber = Math.ceil(daysSinceStartOfYear / 7);

  // Convert the week number to Latin digits and return
  return convertToLatinDigits(weekNumber.toString());
}

/**
 * Check if the Persian year is a leap year.
 *
 * @param year - The Persian year.
 * @returns A boolean indicating whether the year is a leap year.
 */
export function isShamsiLeapYear(year: number): boolean {
  // Persian leap year occurs every 4 years, with exceptions based on a 33-year cycle.
  return (
    year % 33 === 0 || // Every 33rd year is a leap year
    [4, 8, 12, 16, 20, 24, 28].includes(year % 33) // Years 4, 8, 12, 16, 20, 24, 28 after a multiple of 33 are leap years
  );
}

/**
 * Get the number of days in the given month of a Persian year.
 *
 * @param month - The Persian month (1 to 12).
 * @param year - The Persian year.
 * @returns The number of days in the given Persian month.
 */
export function getShamsiDaysInMonth(month: number, year: number): number {
  // Days in months for leap years (Esfand has 29 days in a leap year)
  const leapYearMonths = [31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 29];

  // Days in months for regular years (Esfand has 30 days in a regular year)
  const regularYearMonths = [31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30];

  // Use the correct array based on whether the year is a leap year
  const months = isShamsiLeapYear(year) ? leapYearMonths : regularYearMonths;

  // Return the number of days in the given month (adjusted for 1-indexing)
  return months[month - 1];
}

/**
 * Get the current Persian month name in full (e.g., "Farvardin", "Ordibehesht").
 *
 * @returns The Persian month name with Latin digits (if needed).
 */
export function getShamsiMonthName(): string {
  const now = new Date();

  // Format the current date to get the Persian month name
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    month: 'long',
  });

  const month = formatter.format(now);

  // Convert Persian digits to Latin digits if necessary
  return convertToLatinDigits(month);
}

/**
 * Get the current Persian weekday (e.g., "شنبه", "یکشنبه").
 *
 * @returns The Persian weekday with Latin digits (if needed).
 */
export function getShamsiWeekday(): string {
  const now = new Date();

  // Format the current date to get the Persian weekday
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    weekday: 'long',
  });

  const weekday = formatter.format(now);

  // Convert Persian digits to Latin digits if necessary
  return convertToLatinDigits(weekday);
}

/**
 * Get the current Persian date in "Weekday, DD Month YYYY" format (e.g., "یکشنبه, 01 فروردین 1400").
 *
 * @returns The Persian date formatted in "Weekday, DD Month YYYY" with Latin digits.
 */
export function getShamsiFullDate(): string {
  const now = new Date();

  // Format the date in Persian calendar
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  const date = formatter.format(now);

  // Convert Persian digits to Latin digits
  return convertToLatinDigits(date);
}

/**
 * Get the current Persian date and time in "YYYY/MM/DD HH:mm:ss" format.
 *
 * @returns The Persian date and time formatted with Latin digits (if necessary).
 */
export function getShamsiDateTime(): string {
  const now = new Date();

  // Format the current date and time in Persian calendar
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const date = formatter.format(now);

  // Manually split the formatted string into components and format it to "YYYY/MM/DD HH:mm:ss"
  const [persianDate, persianTime] = date.split(' '); // Split date and time
  const [year, month, day] = persianDate.split('/');
  const [hour, minute, second] = persianTime.split(':');

  // Construct the formatted string
  const formattedDateTime = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

  // Convert Persian digits to Latin digits if necessary
  return convertToLatinDigits(formattedDateTime);
}

/**
 * Get the current Persian date in "Month YYYY" format (e.g., "فروردین 1400").
 *
 * @returns The Persian date formatted in "Month YYYY" with Latin digits.
 */
export function getShamsiMonthYear(): string {
  const now = new Date();

  // Format the date in Persian calendar
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: 'long',
  });

  const date = formatter.format(now);

  // Convert Persian digits to Latin digits
  return convertToLatinDigits(date);
}

/**
 * Get the current Persian date in "YYYY/MM/DD" format with Latin numbers (e.g., "1400/01/01").
 *
 * @returns The Persian date formatted in "YYYY/MM/DD" with Latin digits.
 */
export function getShamsiDateYMDLatin(): string {
  const now = new Date();

  // Format the date in Persian calendar
  const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const date = formatter.format(now);

  // Convert Persian digits to Latin digits
  return convertToLatinDigits(date);
}

/**
 * Get the number of days in the given Persian month of a Persian year.
 *
 * @param month - The month of the Persian calendar (1 to 12).
 * @param year - The Persian year (e.g., 1403).
 * @returns The number of days in the specified month, or null if the input is invalid.
 */
export function getShamsiMonthDays(month: number, year: number): number | null {
  if (month < 1 || month > 12) {
    return null; // Invalid month
  }

  const regularYearDaysInMonths = [
    31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30,
  ];
  const leapYearDaysInMonths = [31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 29];

  const isLeapYear = isShamsiLeapYear(year);
  return isLeapYear
    ? leapYearDaysInMonths[month - 1]
    : regularYearDaysInMonths[month - 1];
}

/**
 * Convert a Gregorian date to a Persian (Shamsi) date.
 *
 * @param year - The Gregorian year.
 * @param month - The Gregorian month (1 to 12).
 * @param day - The Gregorian day (1 to 31).
 * @returns The corresponding Persian date in "YYYY/MM/DD" format.
 */
export function convertGregorianToShamsi(
  year: number,
  month: number,
  day: number,
): string {
  const gregorianDate = new Date(year, month - 1, day); // Month is 0-based in JavaScript Date.
  const startDate = new Date(621, 2, 21); // This is March 21st, 621 CE (start of the Persian calendar).
  const daysDifference = Math.floor(
    (gregorianDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const persianYear = 621 + Math.floor(daysDifference / 365.2422); // Approximation based on leap years

  // Calculate the exact day of the Persian year
  let daysInPersianYear = daysDifference % 365;
  let persianMonth = 1;
  let persianDay = 0;

  // Define the number of days in each Persian month (consider leap years)
  const regularYearDaysInMonths = [
    31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30,
  ];
  const leapYearDaysInMonths = [31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 29];

  const isLeapYear = isShamsiLeapYear(persianYear);
  const monthsInYear = isLeapYear
    ? leapYearDaysInMonths
    : regularYearDaysInMonths;

  for (let i = 0; i < 12; i++) {
    if (daysInPersianYear < monthsInYear[i]) {
      persianMonth = i + 1;
      persianDay = daysInPersianYear + 1;
      break;
    }
    daysInPersianYear -= monthsInYear[i];
  }

  return `${persianYear}/${padZero(persianMonth)}/${padZero(persianDay)}`;
}

// Helper function to add a leading zero if the number is less than 10
function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

/**
 * Convert a Persian (Shamsi) date to a Gregorian date.
 *
 * @param year - The Persian year.
 * @param month - The Persian month (1 to 12).
 * @param day - The Persian day (1 to 31).
 * @returns The corresponding Gregorian date in "YYYY-MM-DD" format.
 */
export function convertShamsiToGregorian(
  year: number,
  month: number,
  day: number,
): string {
  const startDate = new Date(621, 2, 21); // March 21st, 621 CE
  let daysInPersianYear = 0;

  // Define the number of days in each Persian month
  const regularYearDaysInMonths = [
    31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30,
  ];
  const leapYearDaysInMonths = [31, 31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 29];

  const isLeapYear = isShamsiLeapYear(year);
  const monthsInYear = isLeapYear
    ? leapYearDaysInMonths
    : regularYearDaysInMonths;

  // Calculate the total number of days passed in the Persian year
  for (let i = 0; i < month - 1; i++) {
    daysInPersianYear += monthsInYear[i];
  }
  daysInPersianYear += day - 1;

  // Calculate the total number of days from the start of the Persian calendar
  const totalDays =
    (year - 1) * 365 + Math.floor((year - 1) / 33) + daysInPersianYear;

  // Calculate the Gregorian date
  const gregorianDate = new Date(
    startDate.getTime() + totalDays * 24 * 60 * 60 * 1000,
  );
  const gregorianYear = gregorianDate.getFullYear();
  const gregorianMonth = gregorianDate.getMonth() + 1; // Month is 0-based in JavaScript Date.
  const gregorianDay = gregorianDate.getDate();

  return `${gregorianYear}-${padZero(gregorianMonth)}-${padZero(gregorianDay)}`;
}

/**
 * Get the current Persian date in "YYYY/MM/DD" format.
 *
 * @returns The current Persian date in "YYYY/MM/DD" format.
 */
export function getCurrentShamsiDate(): string {
  const now = new Date();
  return convertGregorianToShamsi(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
  );
}

/**
 * Get the total number of days in a given Persian year.
 *
 * @param year - The Persian year (e.g., 1403).
 * @returns The number of days in the Persian year.
 */
export function getShamsiYearDays(year: number): number {
  return isShamsiLeapYear(year) ? 366 : 365;
}

/**
 * Add a specified number of days to a Persian date.
 *
 * @param year - The Persian year (e.g., 1403).
 * @param month - The Persian month (1 to 12).
 * @param day - The Persian day (1 to 31).
 * @param daysToAdd - The number of days to add.
 * @returns The new Persian date after adding the specified number of days.
 */
export function addShamsiDays(
  year: number,
  month: number,
  day: number,
  daysToAdd: number,
): string {
  const gregorianDate = convertShamsiToGregorian(year, month, day);
  const date = new Date(gregorianDate);
  date.setDate(date.getDate() + daysToAdd);
  return convertGregorianToShamsi(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );
}

/**
 * Subtract a specified number of days from a Persian date.
 *
 * @param year - The Persian year (e.g., 1403).
 * @param month - The Persian month (1 to 12).
 * @param day - The Persian day (1 to 31).
 * @param daysToSubtract - The number of days to subtract.
 * @returns The new Persian date after subtracting the specified number of days.
 */
export function subtractShamsiDays(
  year: number,
  month: number,
  day: number,
  daysToSubtract: number,
): string {
  return addShamsiDays(year, month, day, -daysToSubtract);
}

/**
 * Get the Persian weekday name for a given date.
 *
 * @param year - The Persian year (e.g., 1403).
 * @param month - The Persian month (1 to 12).
 * @param day - The Persian day (1 to 31).
 * @returns The Persian weekday name (e.g., "شنبه").
 */
export function getShamsiWeekdayName(
  year: number,
  month: number,
  day: number,
): string {
  const gregorianDate = convertShamsiToGregorian(year, month, day);
  const date = new Date(gregorianDate);
  const weekdays = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
  ];
  return weekdays[date.getDay()];
}

/**
 * Format a Persian date based on a provided pattern.
 *
 * @param pattern - The pattern to format the Persian date (e.g., "YYYY/MM/DD", "Weekday, DD Month YYYY").
 * @param year - The Persian year.
 * @param month - The Persian month (1 to 12).
 * @param day - The Persian day of the month (1 to 31).
 * @param hour - Optional, hour for the time (0-23).
 * @param minute - Optional, minute for the time (0-59).
 * @param second - Optional, second for the time (0-59).
 * @returns The formatted Persian date string.
 */
export function formatShamsiDate(
  pattern: string,
  year: number,
  month: number,
  day: number,
  hour = 0,
  minute = 0,
  second = 0,
): string {
  // Define Persian month names
  const monthNames = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  // Helper function for formatting with leading zeros
  const pad = (value: number): string =>
    value < 10 ? `0${value}` : `${value}`;

  // Get the Persian date components
  const persianYear = year.toString();
  const persianMonth = pad(month);
  const persianDay = pad(day);
  const persianMonthName = monthNames[month - 1];
  const persianWeekday = getShamsiWeekdayName(year, month, day); // Assuming this function correctly returns Persian weekday name

  // Get the time components
  const persianHour = pad(hour);
  const persianMinute = pad(minute);
  const persianSecond = pad(second);

  // Replace placeholders with corresponding values
  const formattedDate = pattern
    .replace('YYYY', persianYear)
    .replace('MM', persianMonth)
    .replace('DD', persianDay)
    .replace('Month', persianMonthName)
    .replace('Weekday', persianWeekday)
    .replace('HH', persianHour)
    .replace('mm', persianMinute)
    .replace('ss', persianSecond);

  // Convert Persian digits to Latin digits if necessary
  return convertToLatinDigits(formattedDate);
}

/**
 * Example of using the formatShamsiDate function to get formatted Persian date.
 *
 * @param pattern - The pattern to format the Persian date (e.g., "YYYY/MM/DD", "Weekday, DD Month YYYY").
 * @param date - Optional, a specific JavaScript Date object to format. Defaults to the current date if not provided.
 * @returns The formatted Persian date string.
 */
export function getShamsiFormattedDate(
  pattern: string,
  date: Date = new Date(),
): string {
  // Convert the Gregorian date to Shamsi
  const persianDate = convertGregorianToShamsi(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );
  const [year, month, day] = persianDate.split('/').map(Number);

  // Optional time parameters, using the provided date or current time
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // Format the Persian date based on the pattern and return the result
  return formatShamsiDate(pattern, year, month, day, hour, minute, second);
}
