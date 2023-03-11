/**
 * Formats a Date object into a string in the format "YYYY-MM-DD".
 *
 * @param {Date} date - The Date object to format.
 * @returns {string} The formatted date string in the format "YYYY-MM-DD".
 *
 * @example
 * const date = new Date('2022-03-14T00:00:00.000Z');
 * const formattedDate = formatDateToString(date);
 * console.log(formattedDate); // Output: "3/14/2022"
 */
export const formatDateToString = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

/**
 * Updates the startDate state variable with a new start date.
 *
 * @param {Date} newStartDate - The new start date to set.
 *
 * @example
 * const newStartDate = new Date('2022-03-14T00:00:00.000Z');
 * handleStartDateChange(newStartDate);
 */
export const handleStartDateChange = (newStartDate) => {
  setStartDate(newStartDate);
};


/**
 * Formats a date object into the format "day-of-week day-of-month-suffix"
 * @param {Date} date The date object to format
 * @returns {Object} An object with the formatted day string and day number
 *
 * @example
 * const date = new Date('2022-03-14T00:00:00.000Z');
 * const formattedDate = formatDayOfWeekDate(date);
 * console.log(formattedDate); // Output: { dayString: 'Mon', dayNumber: '14th' }
 */
export const formatDayOfWeekDate = (date) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get the day of the month from the date object
  const day = date.getDate();

  // Get the abbreviated day of the week from the daysOfWeek array
  let dayString = daysOfWeek[date.getDay()];

  // Determine the correct suffix for the day of the month
  let dayNumber = day;
  if (day > 10 && day < 20) {
    // For numbers between 11 and 19, the suffix is always "th"
    dayString += 'th';
  } else {
    switch (day % 10) {
      case 1: dayString += 'st'; break;
      case 2: dayString += 'nd'; break;
      case 3: dayString += 'rd'; break;
      default: dayString += 'th'; break;
    }
  }

  // Return an object with the formatted day string and day number
  return { dayString, dayNumber };
}


/**
 * Creates an array of ISO date strings for 7 days starting from the given start date.
 *
 * @param {Date} startDate - The start date for the range of dates to create.
 * @returns {Array} An array of ISO date strings for 7 days starting from the given start date whose format matches dateAssigned format from the database .
 *
 * @example
 * const startDate = new Date('2022-03-14T00:00:00.000Z');
 * const dateStringArray = createDateStringArrayForSevenDays(startDate);
 * console.log(dateStringArray); // Output: [ '2022-03-14', '2022-03-15', '2022-03-16', '2022-03-17', '2022-03-18', '2022-03-19', '2022-03-20' ]
 */
export const createDateStringArrayForSevenDays = (startDate) => {
  const dateStringArray = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000));
    const dateString = currentDate.toISOString().substring(0, 10);
    dateStringArray.push(dateString);
  }

  return dateStringArray;
}


/**
 * Returns an array of 7 date objects starting from the specified start date
 * @param {Date} startDate The start date for the week
 * @returns {Array} An array of 7 date objects starting from the specified start date
 *
 * @example
 * const startDate = new Date('2023-03-13T00:00:00.000Z');
 * const weekOfDates = getWeekOfDateObjects(startDate);
 * console.log(weekOfDates); // Output: [Mon Mar 13 2023 01:00:00 GMT+0100 (Central European Standard Time), Tue Mar 14 2023 01:00:00 GMT+0100 (Central European Standard Time), Wed Mar 15 2023 01:00:00 GMT+0100 (Central European Standard Time), Thu Mar 16 2023 01:00:00 GMT+0100 (Central European Standard Time), Fri Mar 17 2023 01:00:00 GMT+0100 (Central European Standard Time), Sat Mar 18 2023 01:00:00 GMT+0100 (Central European Standard Time), Sun Mar 19 2023 01:00:00 GMT+0100 (Central European Standard Time)]
 */
export const getWeekOfDateObjects = (startDate) => {
  // Initialize an empty array to hold the date objects
  const weekOfDates = [];

  // Loop through 7 days (one week) and add a new date object to the array for each day
  for (let i = 0; i < 7; i++) {
    // Calculate the time value of the current day by adding the number of milliseconds in one day multiplied by the loop index to the start date's time value
    const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);

    // Add the new date object to the weekOfDates array
    weekOfDates.push(date);
  }

  // Return the array of date objects
  return weekOfDates;
}
