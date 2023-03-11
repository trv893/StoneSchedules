import { formatDateToString } from "../utils/dateFunctions";

/**
 * Resolves with an array of shift assignments, where each assignment is an object
 * with the following properties:
 *
 * - shiftAssignmentId (number): the ID of the shift assignment
 * - userId (number): the ID of the user assigned to the shift
 * - shiftId (number): the id of the time of the shift the user is assigned to where 1 is "AM" and 2 is "PM"
 * - dateAssigned (string): the date of the assigned shift in "2023-03-14T00:00:00" format
 * - sectionId (number): the ID of the section the shift is assigned to
 * - releasedByUser (boolean): whether the shift has been released by the user
 * - dayId (number): the ID of the day the shift is assigned to
 * - section (string): the name of the section the user is assigned to for that shift
 * - assignee (string): the name of the user assigned to the shift
 * - releaseByUserId (number): the ID of the true of false value indicating whether the shift has been released by the user
 * - shiftName (string): the string value of the time of the shift, either "AM" or "PM". 
 *
 * @param {Date} startDate - The start date for the range of shift assignments to retrieve.
 * @param {Date} endDate - The end date for the range of shift assignments to retrieve.
 * @param {function} setShiftData - The setState function to update the shiftData state variable.
 * @param {function} setIsLoading - The setState function to update the isLoading state variable.
 * @param {function} setError - The setState function to update the error state variable.
 * @returns {Promise<void>} A Promise that resolves when the shift assignments have been retrieved and updated in state, or rejects with an error message.
 *
 * @example
 * getShiftAssignments("2023-03-10", "2023-03-15"), setShiftData, setIsLoading, setError)
 *   .then(shiftAssignments => {
 *     console.log(shiftAssignments);
 *     // Output:
 *     // [
 *     //   {
 *     //     "shiftAssignmentId": 4988,
 *     //     "userId": 2,
 *     //     "shiftId": 1,
 *     //     "dateAssigned": "2023-03-13T00:00:00",
 *     //     "sectionId": 5,
 *     //     "releasedByUser": false,
 *     //     "dayId": 2,
 *     //     "section": "5",
 *     //     "assignee": "Aleesha Johnson",
 *     //     "releaseByUserId": 0,
 *     //     "shiftName": "AM"
 *     //   },
 *     //   {
 *     //     "shiftAssignmentId": 4989,
 *     //     "userId": 2,
 *     //     "shiftId": 1,
 *     //     "dateAssigned": "2023-03-14T00:00:00",
 *     //     "sectionId": 5,
 *     //     "releasedByUser": true,
 *     //     "dayId": 3,
 *     //     "section": "5",
 *     //     "assignee": "Aleesha Johnson",
 *     //     "releaseByUserId": 0,
 *     //     "shiftName": "AM"
 *     //   },
 *     //   ...
 *     // ]
 *   })
 *   .catch(error => console.error(error));
 */
export const getShiftAssignments = async (
  startDate,
  endDate,
  setShiftData,
  setIsLoading,
  setError
) => {
  const startDateString = formatDateToString(startDate);
  const endDateString = endDate ? formatDateToString(endDate) : "";
  const url = `http://192.168.50.230:8888/Employee/GetShiftAssignments?startDate=${startDateString}&endDate=${endDateString}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setShiftData(data);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
    setError(error.message);
    throw new Error("Failed to fetch shift assignments");
  }
};
