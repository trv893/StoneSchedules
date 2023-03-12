import { filterShiftData } from '../utils/filterFunctions';
import shiftDataExample from '../assets/shiftDataExample.json';

const shiftData = shiftDataExample;

describe('filterShiftData', () => {
  it('should return an empty array if shiftData is not provided', () => {
    const result = filterShiftData();
    expect(result).toEqual([]);
  });

  it('should filter by date and shift time', () => {
    const result = filterShiftData(shiftData, { date: '2023-03-10', shiftTime: 'PM' });
    expect(result).toEqual([{
      "shiftAssignmentId": 2828,
      "userId": 2,
      "shiftId": 2,
      "dateAssigned": "2023-03-10T00:00:00",
      "sectionId": 11,
      "releasedByUser": false,
      "dayId": 6,
      "section": "11",
      "assignee": "Aleesha Johnson",
      "releaseByUserId": 0,
      "shiftName": "PM"
    }]);
  });

  it('should filter by userId and release status', () => {
    const result = filterShiftData(shiftData, { userId: 2, released: true });
    expect(result).toEqual([{
      "shiftAssignmentId": 4989,
      "userId": 2,
      "shiftId": 1,
      "dateAssigned": "2023-03-14T00:00:00",
      "sectionId": 5,
      "releasedByUser": true,
      "dayId": 3,
      "section": "5",
      "assignee": "Aleesha Johnson",
      "releaseByUserId": 0,
      "shiftName": "AM"
    }]);
  });

  it('should include all shifts if released is null', () => {
    const result = filterShiftData(shiftData, { released: null });
    expect(result).toEqual(shiftData);
  });

  it('should not filter if no params are provided', () => {
    const result = filterShiftData(shiftData);
    expect(result).toEqual(shiftData);
  });

  it('should filter by userId as string or number', () => {
    const result1 = filterShiftData(shiftData, { userId: '2' });
    expect(result1).toEqual(shiftData.filter(shift => shift.userId === 2));
    const result2 = filterShiftData(shiftData, { userId: 1 });
    expect(result2).toEqual([]);
  });

  it('should handle invalid date string input', () => {
    const result = filterShiftData(shiftData, { date: 'invalid date string' });
    expect(result).toEqual([]);
  });
});
