import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import WeekSelector from "./WeekSelector";
import { weekOfDateObjectsArray, weekFromStartDate } from "../../utils/dateFunctions";
import MonthYearComponent from "./MonthYearComponent";
import DayList from "./flatListDaySchedule/DayList";
import shiftDataExample from "../../assets/shiftDataExample.json";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WeeklySchedule = React.memo(({ shiftData, startDate, userId }) => {
  const [startDateForWeek, setStartDateForWeek] = useState(startDate);
  const [selectedWeekArrayOfDateObject, setSelectedWeekArrayOfDateObject] = useState(
    weekOfDateObjectsArray(startDateForWeek),
  );
  const onWeekChange = (direction) => {
    var newStartDate = weekFromStartDate(direction, startDateForWeek,)
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
      <View style={styles.dayList}>
        <DayList
          weekDateData={selectedWeekArrayOfDateObject}
          fullSchedule={shiftData}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "98%",
    alignSelf: "center",
  },
});

export default WeeklySchedule;
