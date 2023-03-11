import React, { useState } from "react";
import { View, Text, StyleSheet,  } from "react-native";
import WeekSelector from "./WeekSelector";
import { getAdjacentWeek, getWeekOfDateObjects, formattedDateArray, createFormattedDateArrayFromStartDate } from "../../utils/dateFunctions";
import { findShiftsForUserForSevenDays } from "../../utils/filterFunctions";

const WeeklySchedule = React.memo(({ startDate, shiftsForUserId, releasedShifts}) => {
    const [weekOfDates, setWeekOfDates] = useState([
      getWeekOfDateObjects(startDate),
    ]);
    const onWeekChange = (direction) => {
      var newDateArray = getAdjacentWeek(direction);
      var formattedWeekDateArray = formattedDateArray(newDateArray);
      setWeekOfDates(formattedWeekDateArray);
    };
    console.log("week of dates!!!!!!!! " + weekOfDates[0].dayNumber)
    return (
      <View style={styles.container}>
        <WeekSelector
          formattedDayOfWeekDate={weekOfDates}
          onWeekChange={onWeekChange}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scheduleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    padding: 10,
    margin: 10,
  },
});

export default WeeklySchedule;
