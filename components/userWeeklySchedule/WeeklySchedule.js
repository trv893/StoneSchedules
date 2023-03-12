import React, { useState } from "react";
import { View, Text, StyleSheet,  } from "react-native";
import WeekSelector from "./WeekSelector";
import { weekOfDateObjectsArray, weekFromStartDate } from "../../utils/dateFunctions";
import {filterShiftData } from "../../utils/filterFunctions";
import MonthYearComponent from "./MonthYearComponent";
import DayList from "./DayList";
import shiftDataExample from "../../assets/shiftDataExample.json";

const WeeklySchedule = React.memo(({ shiftData, startDate, userId,}) => {
  const [startDateForWeek, setStartDateForWeek] = useState(startDate);
  const [selectedWeekArrayOfDateObject, setSelectedWeekArrayOfDateObject] = useState(
    weekOfDateObjectsArray(startDateForWeek),
  );
  const onWeekChange = (direction) => {
    var newStartDate = weekFromStartDate(direction, startDateForWeek,)
    setStartDateForWeek(newStartDate);
    setSelectedWeekArrayOfDateObject(weekOfDateObjectsArray(newStartDate));
    var test = filterShiftData(shiftDataExample, {
      date: '3/12/2023',
    } )
    console.log("TEST:  " + test.length)
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
        fullSchedule = {shiftData}
       style={styles.dayList} />
    </View>
  );
});




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayList: {
  }
});

export default WeeklySchedule;
