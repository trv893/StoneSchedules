import React, { useState } from "react";
import { View, Text, StyleSheet,  } from "react-native";
import WeekSelector from "./WeekSelector";
import { weekOfDateObjectsArray, weekFromStartDate } from "../../utils/dateFunctions";
import MonthYearComponent from "./MonthYearComponent";
import DayList from "./flatListDaySchedule/DayList";
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
    // var item = {"dateObj": "2023-03-12T22:19:47.890Z", "dateString": "3/12/2023", "dayNumberString": "12th", "dayString": "Sun"}
    // var test = filterShiftData(shiftData, {
    //   userId: 2,
    //   date: "3/13/2023",
    //   shiftTime: "am",
    // })
    // console.log("TEST:  " +  test)
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
