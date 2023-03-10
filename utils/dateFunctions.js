/**
 * Formats a Date object into a string in the format "YYYY-MM-DD".
 *
 * @param {Date} date - The Date object to format.
 * @returns {string} The formatted date string in the format "YYYY-MM-DD".
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
 */
export const handleStartDateChange = (newStartDate) => {
  setStartDate(newStartDate);
};
