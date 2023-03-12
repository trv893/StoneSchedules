import React, { useState } from "react";
import { View, Text, StyleSheet,  } from "react-native";
import WeekSelector from "./WeekSelector";
import { weekOfDateObjectsArray, weekFromStartDate } from "../../utils/dateFunctions";
import { findShiftsForUserForSevenDays } from "../../utils/filterFunctions";
import MonthYearComponent from "./MonthYearComponent";
import DayList from "./DayList";

const WeeklySchedule = React.memo(({ startDate, shiftsForUserId, releasedShifts, userId}) => {
  const [startDateForWeek, setStartDateForWeek] = useState(startDate);
  const [selectedWeekArrayOfDateObject, setSelectedWeekArrayOfDateObject] = useState(
    weekOfDateObjectsArray(startDateForWeek),
  );
  const [userCurrentWeekShiftData, setUserShiftData] = useState(
    findShiftsForUserForSevenDays(startDateForWeek, userId, shiftsForUserId)
  );
  const onWeekChange = (direction) => {
    var newStartDate = weekFromStartDate(direction, startDateForWeek,)
    console.log("newStartDate " + newStartDate)
    setStartDateForWeek(newStartDate);
    setSelectedWeekArrayOfDateObject(weekOfDateObjectsArray(newStartDate));
  };
  return (
    <View style={styles.container}>
      <MonthYearComponent Week={selectedWeekArrayOfDateObject} />
      <WeekSelector
        formattedArrayOfDateObjs={selectedWeekArrayOfDateObject}
        onWeekChange={onWeekChange}
      />
      <DayList
        weekDateData={selectedWeekArrayOfDateObject}
        userSchedule = {userCurrentWeekShiftData}
       style={styles.dayList} />
    </View>
  );
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});

export default WeeklySchedule;
