/**
 * Returns an array of 7 dates starting from the specified start date.
 * @param {Date} startDate - The start date.
 * @returns {Date[]} An array of 7 dates starting from the specified start date.
 * @example
 *
 * const startDate = new Date('2023-03-12');
 * const dateArray = createDateArrayForSevenDays(startDate);
 * console.log(dateArray);
 * // Output: [
 * //   Sun Mar 12 2023 00:00:00 GMT-0500 (Eastern Standard Time),
 * //   Mon Mar 13 2023 00:00:00 GMT-0400 (Eastern Daylight Time),
 * //   Tue Mar 14 2023 00:00:00 GMT-0400 (Eastern Daylight Time),
 * //   Wed Mar 15 2023 00:00:00 GMT-0400 (Eastern Daylight Time),
 * //   Thu Mar 16 2023 00:00:00 GMT-0400 (Eastern Daylight Time),
 * //   Fri Mar 17 2023 00:00:00 GMT-0400 (Eastern Daylight Time),
 * //   Sat Mar 18 2023 00:00:00 GMT-0400 (Eastern Daylight Time)
 * // ]
 */
export const createDateArrayForSevenDays = (startDate) => {
  const dateArray = [];
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day

  // Loop through 7 days starting from the startDate
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate.getTime() + i * millisecondsPerDay);
    dateArray.push(currentDate);
  }

  return dateArray;
};




/**
 * Returns an array of shift objects for the given user and seven days starting from the specified start date.
 * @param {Date|string} startDate - The start date. Can be a Date object or a string in ISO format (YYYY-MM-DD).
 * @param {number} userId - The ID of the user to find shifts for.
 * @param {Object[]} shiftData - An array of shift objects to search for matches.
 * @returns {Object[]} An array of shift objects for the given user and seven days starting from the specified start date.
 * @example
 *
 * const startDate = '2023-03-12';
 * const userId = 2;
 * const shiftData = [
 *   {
 *     "shiftAssignmentId": 2827,
 *     "userId": 2,
 *     "shiftId": 1,
 *     "dateAssigned": "2023-03-10T00:00:00",
 *     "sectionId": 15,
 *     "releasedByUser": false,
 *     "dayId": 6,
 *     "section": "15",
 *     "assignee": "Aleesha Jowett",
 *     "releaseByUserId": 0,
 *     "shiftName": "AM"
 *   // ... more shift objects ...
 * ];
 *
 * const shifts = findShiftsForUserForSevenDays(startDate, userId, shiftData);
 * console.log(shifts);
 * // Output: [
 * //   {
 * //     "shiftAssignmentId": 2827,
 * //     "userId": 2,
 * //     "shiftId": 1,
 * //     "dateAssigned": "2023-03-10T00:00:00",
 * //     "sectionId": 15,
 * //     "releasedByUser": false,
 * //     "dayId": 6,
 * //     "section": "15",
 * //     "assignee": "Aleesha Jowett",
 * //     "releaseByUserId": 0,
 * //     "shiftName": "AM"
 * //   },
 * //   {
 * //     "shiftAssignmentId": 2828,
 * //     "userId": 2,
 * //     "shiftId": 1,
 * //     "dateAssigned": "2023-03-13T00:00:00",
 * //     "sectionId": 15,
 * //     "releasedByUser": false,
 * //     "dayId": 2,
 * //     "section": "15",
 * //     "assignee": "Aleesha Jowett",
 * //     "releaseByUserId": 0,
 * //     "shiftName": "AM"
 * //   }
 * // ]
 */
export const findShiftsForUserForSevenDays = (startDate, userId, shiftData) => {
  const shifts = [];

  // Create an array of dates for the seven days starting from the start date
  const dateArray = createDateArrayForSevenDays(startDate);

  // Loop through the dates in the date array
  for (const date of dateArray) {
    // Find the shift object for the given user and date
    const shift = shiftData.find((s) => {
      const shiftDate = new Date(s.dateAssigned);
      // Check if the user ID and the date match
      return s.userId === userId && shiftDate.toDateString() === date.toDateString();
    });

    // If a shift object was found, add it to the shifts array
    if (shift) {
      shifts.push(shift);
    }
  }
  console.log("shifts" + shifts)

  return shifts;
};

/**
 * Finds all released shifts within 7 days from the given start date, and returns an array of the corresponding shift objects.
 *
 * @param {Date} startDate - The start date for the range of dates to search.
 * @param {Array} shiftData - An array of shift objects to search through.
 * @returns {Array} An array of all released shift objects within 7 days from the given start date.
 *
 * @example
 * const startDate = new Date();
 * const shiftData = [
 *   { id: '1', userId: '123', releasedByUser: true, dateAssigned: "2023-03-13T00:00:00" },
 *   { id: '2', userId: '456', releasedByUser: true, dateAssigned: "2023-03-13T00:00:00" },
 *   { id: '3', userId: '123', releasedByUser: false, dateAssigned: "2023-03-13T00:00:00" },
 * ];
 * const sevenDaysReleasedShifts = findAllReleasedShiftsForSevenDays(startDate, shiftData);
 * console.log(sevenDaysReleasedShifts); // Output: [{ id: '1', userId: '123', releasedByUser: true, dateAssigned: "2023-03-13T00:00:00" }, { id: '2', userId: '456', releasedByUser: true, dateAssigned: "2023-03-13T00:00:00" }]
 */
export const findAllReleasedShiftsForSevenDays = (startDate, shiftData) => {
  const releasedShifts = [];

  // Create an array of dates for the seven days starting from the start date.
  // (createDateArrayForSevenDays function not shown)
  const dateArray = createDateArrayForSevenDays(startDate);

  // Loop through the dates in the date array.
  for (const date of dateArray) {
    // Find the released shift object for the date.
    const releasedShift = shiftData.find((s) => {
      const shiftDate = new Date(s.dateAssigned);
      // Check if the shift was released and the date matches.
      return s.releasedByUser && shiftDate.toDateString() === date.toDateString();
    });

    // If a released shift object was found, add the object to the releasedShifts array.
    if (releasedShift) {
      releasedShifts.push(releasedShift);
    }
  }

  // Return the array of found released shift objects.
  return releasedShifts;
};



/**
 * Filters the shiftData array for the given userId.
 *
 * @param {Array} shiftData - An array of shift objects to filter.
 * @param {string} userId - The ID of the user to filter the shiftData for.
 * @returns {Array} An array of shift objects filtered for the given userId.
 *
 * @example
 * const shiftData = [
 *   { id: '1', userId: '123', dateAssigned: "2023-03-13T00:00:00", releasedByUser: true },
 *   { id: '2', userId: '456', dateAssigned: "2023-03-13T00:00:00", releasedByUser: false },
 *   { id: '3', userId: '123', dateAssigned: "2023-03-13T00:00:00", releasedByUser: true },
 * ];
 * const userId = '123';
 * const shiftsForUser = filterShiftDataForUser(shiftData, userId);
 * console.log(shiftsForUser); // Output: [{ id: '1', userId: '123', dateAssigned: "2023-03-13T00:00:00", releasedByUser: true }, { id: '3', userId: '123', dateAssigned: "2023-03-13T00:00:00", releasedByUser: true }]
 */
export const filterShiftDataForUser = (shiftData, userId) => {
  var shiftDataForUser = shiftData.filter((shift) => shift.userId === userId)
  console.log("shifts for user: " + shiftDataForUser.length)
  return shiftDataForUser;
}


/**
 * Filters the shiftData array for objects where the 'releasedByUser' property is true.
 *
 * @param {Array} shiftData - An array of shift objects to filter.
 * @returns {Array} An array of shift objects where the 'releasedByUser' property is true.
 *
 * @example
 * const shiftData = [
 *   { id: '1', userId: '123', dateAssigned: "2023-03-13T00:00:00", releasedByUser: true },
 *   { id: '2', userId: '456', dateAssigned: "2023-03-13T00:00:00", releasedByUser: false },
 *   { id: '3', userId: '123', dateAssigned: "2023-03-13T00:00:00", releasedByUser: true },
 * ];
 * const releasedShifts = filterShiftDataForReleasedShifts(shiftData);
 * console.log(releasedShifts); // Output: [{ id: '1', userId: '123', dateAssigned: "2023-03-13T00:00:00", releasedByUser: true }, { id: '3', userId: '123', dateAssigned: "2023-03-13T00:00:00", releasedByUser: true }]
 */
export const filterShiftDataForReleasedShifts = (shiftData) => {
  return shiftData.filter((shift) => shift.releasedByUser === true);
}
