/**
 * Filters an array of shift data based on the provided filtering criteria.
 *
 * @param {Array} shiftData - The array of shift data to filter.
 * @param {Object} params - An object containing the filtering parameters.
 * @param {string|Date} params.date - The date to filter by, in either a string or Date format.
 * @param {number} params.userId - The user ID to filter by.
 * @param {boolean|null} params.released - The release status to filter by, or null to include all release statuses.
 * @param {string} params.shiftTime - The shift time to filter by, either "AM" or "PM".
 *
 * @returns {Array|null} An array of shift objects that match the provided filtering criteria,
 * or null if the filtered array has zero length.
 *
 * @example
 *
 * const shiftData = [
 *   {
 *     "shiftAssignmentId": 4988,
 *     "userId": 2,
 *     "shiftId": 1,
 *     "dateAssigned": "2023-03-13T00:00:00",
 *     "sectionId": 5,
 *     "releasedByUser": false,
 *     "dayId": 2,
 *     "section": "5",
 *     "assignee": "Aleesha Johnson",
 *     "releaseByUserId": 0,
 *     "shiftName": "AM"
 *   },
 *   // ... other shift objects
 * ];
 *
 * // Filter shiftData by date and shift time
 * const filteredShiftData = filterShiftData(shiftData, { date: "2023-03-10", shiftTime: "PM" });
 * // filteredShiftData is an array containing the shift object with shiftId 2
 *
 * // Filter shiftData by userId and release status
 * const filteredShiftData2 = filterShiftData(shiftData, { userId: 2, released: true });
 * // filteredShiftData2 is an array containing the shift object with shiftId 1 on March 14th, 2023
 */
export const filterShiftData = (shiftData, params = {}) => {
  if (!shiftData) {
    return null;
  }

  const { date = null, userId = null, released = null, shiftTime = null } = params;

  /**
   * Parses a date string or a Date object and returns the date in ISO format.
   * Returns null if the input is an invalid date string.
   * @param {String|Date} date - The date string or Date object to parse.
   * @returns {String|null} The date in ISO format or null if the input is an invalid date string.
   */
  function parseDate(date) {
    const dateObject = new Date(date);
    const isoDate = isNaN(dateObject) ? null : dateObject.toISOString();
    return isoDate ? isoDate.substring(0, 10) : null;
  }

  const filteredUserId = typeof userId === 'string' ? parseInt(userId) : userId;

  const filteredShiftData = shiftData.filter(shift => 
    (!date || parseDate(shift.dateAssigned) === parseDate(date)) &&
    (!filteredUserId || shift.userId === filteredUserId) &&
    (released === null || shift.releasedByUser === (released === true)) &&
    (!shiftTime || shift.shiftName === shiftTime.toUpperCase())
  );
  console.log("filteredShiftData: " + filteredShiftData )

  return filteredShiftData.length > 0 ? filteredShiftData : null;
};
