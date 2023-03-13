/**
 * Converts a JavaScript Date object to a string in the format "MM/DD/YYYY".
 *
 * @param {Date} date - The Date object to be formatted.
 * @returns {string} A string representation of the date in the format "MM/DD/YYYY".
 *
 * @example
 * import { formatDateToString } from './utils';
 *
 * const today = new Date();
 * const formattedDate = formatDateToString(today);
 * console.log(formattedDate); // Output: "03/12/2023" (assuming today is March 12, 2023)
 */
export const formatDateToString = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
};


/**
 * Returns an array of formatted date objects representing the seven days of the week starting from the given start date.
 * @param {Date} startDate - The start date for the week.
 * @returns {Array} An array of formatted date objects, each containing the following properties:
 *   - dayString: The abbreviated day of the week string (e.g., "Mon", "Tue", etc.).
 *   - dayNumberString: The day of the month with an appropriate suffix (e.g., "1st", "2nd", etc.).
 *   - dateString: The date string formatted as "month/day/year" (e.g., "3/12/2023").
 *   - dateObj: The date object representing the day.
 * @example
 * const startDate = new Date('2023-03-12');
 * const weekDates = weekOfDateObjectsArray(startDate);
 * // weekDates will contain an array of 7 date objects representing the week starting from March 12, 2023.
 */
export const weekOfDateObjectsArray = (startDate) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const formattedDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    const dayString = daysOfWeek[date.getDay()];
    const dayNumber = date.getDate();
    const dayNumberString = dayNumber + getNumberSuffix(dayNumber);
    const monthString = date.getMonth() + 1; // add 1 since getMonth returns zero-based month
    const yearString = date.getFullYear();
    const dateString = `${monthString}/${dayNumberString.slice(0, -2)}/${yearString}`;
    formattedDates.push({ dayString, dayNumberString, dateString, dateObj: date });
  }
  console.log("formatDayOfWeekDate", formattedDates);
  return formattedDates;
};


/**
 * Returns the appropriate suffix for the given day number.
 * @param {number} day - The day number to get the suffix for.
 * @returns {string} The suffix for the given day number (e.g., "st", "nd", "rd", or "th").
 */
function getNumberSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

/**
 * Returns a new Date object representing the first or last day of the week
 * based on the direction ('prev' or 'next') and a current start date.
 *
 * @param {string} direction - The direction to go in. Either 'prev' or 'next'.
 * @param {Date} currentStartDate - The current start date of the week.
 * @returns {Date} A new Date object representing the first or last day of the week.
 *
 * @example
 * import { weekFromStartDate } from './utils';
 *
 * const currentStartDate = new Date('2023-03-06T00:00:00Z'); // Monday, March 6, 2023
 *
 * // Get the last day of the week (Sunday) based on the current start date
 * const lastDayOfWeek = weekFromStartDate('next', currentStartDate);
 * console.log(lastDayOfWeek.toDateString()); // Output: "Sun Mar 12 2023"
 *
 * // Get the first day of the week (Monday) based on the current start date
 * const firstDayOfWeek = weekFromStartDate('prev', currentStartDate);
 * console.log(firstDayOfWeek.toDateString()); // Output: "Mon Feb 27 2023"
 */
export const weekFromStartDate = (direction, currentStartDate) => {
  // Create a new Date object based on the currentStartDate
  const newDate = new Date(currentStartDate.getTime());
  
  // Determine whether to add or subtract 6 days based on the direction
  const daysToAdd = (direction === 'next') ? 6 : -6;
  
  // Add or subtract the days from the new Date object
  newDate.setDate(newDate.getDate() + daysToAdd);
  
  // Return the new Date object
  return newDate;
};
