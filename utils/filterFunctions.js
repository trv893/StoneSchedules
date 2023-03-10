//TODO: delete this after testing
import fakeData from "../assets/shiftDataExample.json";

/**
 * Creates an array of ISO date strings for 7 days starting from the given start date.
 *
 * @param {Date} startDate - The start date for the range of dates to create.
 * @returns {Array} An array of ISO date strings for 7 days starting from the given start date whose format matches dateAssigned format from the database .
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
 * Finds the shifts for a given user for 7 days starting at the given start date, and returns an array of the corresponding shift objects.
 *
 * @param {Date} startDate - The start date for the range of shifts to find.
 * @param {string} userId - The ID of the user for which to find shifts.
 * @param {Array} shiftData - An array of shift objects to search through.
 * @returns {Array} An array of shift objects for the given user for 7 days starting at the given start date.
 */
export const findShiftsForUserForSevenDays = (startDate, userId, shiftData) => {
  const sevenDaysShifts = [];
  const dateStringArray = createDateStringArrayForSevenDays(startDate); // Create an array of ISO date strings for 7 days starting from the given start date
  
  for (let i = 0; i < 7; i++) {
    const dateString = dateStringArray[i];
    const shift = shiftData.find((s) => s.userId === userId && s.dateAssigned.substring(0, 10) === dateString); // Find the first shift that matches the condition for the current date and user ID
    if (shift) {
      sevenDaysShifts.push(shift); // If a shift is found, add it to the array
    }
  }
  
  return sevenDaysShifts;
}

/**
 * Finds all released shifts within 7 days from the given start date, and returns an array of the corresponding shift objects.
 *
 * @param {Date} startDate - The start date for the range of dates to search.
 * @param {Array} shiftData - An array of shift objects to search through.
 * @returns {Array} An array of all released shift objects within 7 days from the given start date.
 */
export const findAllReleasedShiftsForSevenDays = (startDate, shiftData) => {
  const sevenDaysShifts = [];
  const dateStringArray = createDateStringArrayForSevenDays(startDate); // Create an array of ISO date strings for 7 days starting from the given start date
  
  for (let i = 0; i < 7; i++) {
    const dateString = dateStringArray[i];
    const releasedShifts = shiftData.filter((s) => s.releasedByUser && s.dateAssigned.substring(0, 10) === dateString); // Find all released shifts for the current date
    sevenDaysShifts.push(...releasedShifts); // Add the released shifts to the array
  }
  
  return sevenDaysShifts;
}

/**
 * Retrieves data for the WeeklySchedule component for a specific user and week.
 *
 * @param {Array} shiftData - The array of shift assignments data to filter.
 * @param {number} userId - The user ID to filter the shift data for.
 * @param {Date} startDate - The start date of the week to retrieve shift data for.
 * @returns {void}
 */
export const getDataForWeeklySchedule = (shiftData, userId, startDate, setWeekOfShiftsForUserId, setWeekOfReleasedShifts) => {
  // Find all released shifts for the week starting on the provided start date
  const releasedShiftsForWeek = findAllReleasedShiftsForDay(startDate, fakeData);

  // Find all shifts for the given user for the week starting on the provided start date
  const weekOfShiftsForUserId = findShiftsForUserForSevenDays(startDate, userId, shiftData);

  // Update the state variables with the filtered shift data
  setWeekOfShiftsForUserId(weekOfShiftsForUserId);
  setWeekOfReleasedShifts(releasedShiftsForWeek);
}

/**
 * Filters the shiftData array for the given userId.
 *
 * @param {Array} shiftData - An array of shift objects to filter.
 * @param {string} userId - The ID of the user to filter the shiftData for.
 * @returns {Array} An array of shift objects filtered for the given userId.
 */
export const filterShiftDataForUser = (shiftData, userId) => {
  return shiftData.filter((shift) => shift.userId === userId);
}

/**
 * Filters the shiftData array for objects where the 'releasedByUser' property is true.
 *
 * @param {Array} shiftData - An array of shift objects to filter.
 * @returns {Array} An array of shift objects where the 'releasedByUser' property is true.
 */
export const filterShiftDataForReleasedShifts = (shiftData) => {
  return shiftData.filter((shift) => shift.releasedByUser === true);
}
