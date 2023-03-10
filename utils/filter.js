export const findShiftForDayAndUser = (date, userId, shiftName, shiftData) => {
  const dateString = date.toISOString().split("T")[0];
  const matchingShift = shiftData.find(
    (shift) =>
      shift.dateAssigned.split("T")[0] === dateString &&
      shift.userId === userId &&
      shift.shiftName === shiftName
  );
  return matchingShift ? "Section: " + matchingShift.section : null;
};

//TODO: change fakeData to shiftData after testing
export const findAllReleasedShiftsForDay = (date, shiftName, fakeData) => {
  const dateString = date.toISOString().split("T")[0];
  //TODO: delete this after testing and return to data.filter
  return fakeData.filter(
    (shift) =>
      shift.dateAssigned.split("T")[0] === dateString &&
      shift.shiftName === shiftName &&
      shift.releasedByUser === true
  );
};
