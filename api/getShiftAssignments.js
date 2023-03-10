import { formatDateToString } from "../utils/dateFormat";

export const getShiftAssignments = async (startDate, endDate) => {
  const startDateString = formatDateToString(startDate);
  const url = `http://192.168.50.230:8888/Employee/GetShiftAssignments?startDate=${startDateString}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    // Throw error if fetch fails
    throw new Error("Failed to fetch shift assignments");
  }
};

export const fetchShiftAssignments = async (startDate) => {
  try {
    const response = await fetch(`https://your-api.com/shifts/${startDate}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw new Error("Could not fetch shift assignments");
  }
};