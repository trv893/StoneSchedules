import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import WeekSelector from "./WeekSelector";
import { getWeekOfDateObjects } from "../../utils/dateFunctions";
import { findShiftsForUserForSevenDays } from "../../utils/filterFunctions";

const WeeklySchedule = React.memo(({ startDate, shiftsForUserId, releasedShifts}) => {
  const [startDateForWeekSet, setStartDateForWeekSet] = useState(startDate);
  const [weekOfDates, setWeekOfDates] = useState([getWeekOfDateObjects(startDate)]);

  return (
    <View style={styles.container}>
      <WeekSelector setNewStartDateForWeekSet = {setStartDateForWeekSet}
        weekOfDatesArray={weekOfDates}
        setWeekOfDatesArray = {setWeekOfDates}
      />
      <Text>Weekly Schedule</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default WeeklySchedule;
