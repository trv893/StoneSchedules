import { formatDateToString } from "../utils/dateFunctions";

/**
 * Retrieves shift assignments from the API for the given date range and updates the state variables.
 *
 * @param {Date} startDate - The start date for the range of shift assignments to retrieve.
 * @param {Date} endDate - The end date for the range of shift assignments to retrieve.
 * @param {function} setShiftData - The setState function to update the shiftData state variable.
 * @param {function} setIsLoading - The setState function to update the isLoading state variable.
 * @param {function} setError - The setState function to update the error state variable.
 * @returns {Promise<void>} A Promise that resolves when the shift assignments have been retrieved and updated in state, or rejects with an error message.
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
