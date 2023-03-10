import { formatDateToString } from "../utils/dateFormat";

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
