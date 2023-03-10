import { createDateStringArrayForSevenDays, findShiftsForUserForSevenDays, findAllReleasedShiftsForSevenDays, filterShiftDataForUser, filterShiftDataForReleasedShifts } from './filterFunctions';
import shiftDataExample from '../assets/shiftDataExample.json';

// Test createDateStringArrayForSevenDays function
console.log(createDateStringArrayForSevenDays(new Date())); // should log an array of 7 ISO date strings starting from today's date

// Test findShiftsForUserForSevenDays function
const userId = 5; // replace with a valid user ID from the shiftDataExample file
const startDate = new Date(); // replace with a valid start date
const shiftsForUser = findShiftsForUserForSevenDays(startDate, userId, shiftDataExample);
console.log(shiftsForUser); // should log an array of shifts for the given user for 7 days starting at the given start date

// Test findAllReleasedShiftsForSevenDays function
const releasedShifts = findAllReleasedShiftsForSevenDays(startDate, shiftDataExample);
console.log(releasedShifts); // should log an array of all released shift objects within 7 days from the given start date

// Test filterShiftDataForUser function
const userIdToFilter = 5; // replace with a valid user ID from the shiftDataExample file
const shiftsFilteredForUser = filterShiftDataForUser(shiftDataExample, userIdToFilter);
console.log(shiftsFilteredForUser); // should log an array of shift objects filtered for the given user ID

// Test filterShiftDataForReleasedShifts function
const releasedShiftsFiltered = filterShiftDataForReleasedShifts(shiftDataExample);
console.log(releasedShiftsFiltered); // should log an array of shift objects where the 'releasedByUser' property is true
