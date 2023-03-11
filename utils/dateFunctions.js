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
 * console.log(formattedDate); // Output: [{dayString: 'Fri', dayNumber: '10th'},
{dayString: 'Sat', dayNumber: '11th'},
{dayString: 'Sun', dayNumber: '12th'},
{dayString: 'Mon', dayNumber: '13th'},
{dayString: 'Tue', dayNumber: '14th'},
{dayString: 'Wed', dayNumber: '15th'},
{dayString: 'Thu', dayNumber: '16th'}]
 */
export const formatDayOfWeekDate = (startDate) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const formattedDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    const dayString = daysOfWeek[date.getDay()];
    const dayNumber = date.getDate() + getNumberSuffix(date.getDate());
    formattedDates.push({ dayString, dayNumber });
  }
  console.log("formatDayOfWeekDate", formattedDates)
  return formattedDates;
}

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
 * Returns an array of seven dates that come before or after the input `weekArray`,
 * depending on the value of `direction`.
 * @param {Date[]} weekArray - An array of 7 Date objects representing a week
 * @returns {Object[]} - An array of 7 objects representing a week
 */
export const getWeekOfDateObjects = (startDate) => {
  // Initialize an empty array to hold the date objects
  const weekOfDates = [];

  // Loop through 7 days (one week) and add a new date object to the array for each day
  for (let i = 0; i < 7; i++) {
    // Calculate the time value of the current day by adding the number of milliseconds in one day multiplied by the loop index to the start date's time value
    const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);

    // Add the new date object to the weekOfDates array
    const { dayString, dayNumber } = formatDayOfWeekDate(date);
    weekOfDates.push({ dayString, dayNumber });
  }
  console.log("getWeekOfDateObjects" + weekOfDates[0].dayString)

  // Return the array of date objects
  return weekOfDates;
}


/**
 * Returns an array of seven dates that come before or after the input `weekArray`,
 * depending on the value of `direction`.
 * @param {Date[]} weekArray - An array of 7 Date objects representing a week
 * @param {string} direction - Either "prev" or "next"
 * @returns {Date[]} - An array of 7 Date objects representing the adjacent week
 * @throws {Error} - If `direction` is not "prev" or "next"
 */
export const getAdjacentWeek = (weekArray, direction) => {
  const dayInMs = 86400000; // Number of milliseconds in a day

  // Calculate the start and end of the previous and next weeks based on the input `weekArray`
  const weekStart = new Date(weekArray[0].getTime() - dayInMs * 7);
  const weekEnd = new Date(weekArray[6].getTime() + dayInMs * 7);

  if (direction === "prev") {
    // Return an array of the seven dates preceding `weekArray`
    const prevWeek = [];
    for (let i = 0; i < 7; i++) {
      prevWeek.push(new Date(weekStart.getTime() + dayInMs * i));
    }
    return prevWeek;
  } else if (direction === "next") {
    // Return an array of the seven dates that come after `weekArray`
    const nextWeek = [];
    for (let i = 0; i < 7; i++) {
      nextWeek.push(new Date(weekEnd.getTime() + dayInMs * i));
    }
    return nextWeek;
  } else {
    // Invalid `direction` value
    throw new Error("Invalid direction value");
  }
}

/**
 * Formats an array of objects with `dayString` and `dayNumber` keys into an array of objects with `dayString` and `dayNumber` keys.
 *
 * @param {Object[]} dateArray - An array of objects with `dayString` and `dayNumber` keys to format.
 * @returns {Object[]} An array of objects with `dayString` and `dayNumber` keys.
 *
 * @example
 * const dateArray = [{ dayString: 'Mon', dayNumber: '14th' }, { dayString: 'Tue', dayNumber: '15th' }];
 * const formattedDateArray = formattedDateArray(dateArray);
 * console.log(formattedDateArray); // Output: [{ dayString: 'Mon', dayNumber: '14th' }, { dayString: 'Tue', dayNumber: '15th' }]
 */
export const formattedDateArray = (dateArray) => {
  return dateArray.map(({ dayString, dayNumber }) => {
    return { dayString, dayNumber };
  });
}

