import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import WeekSelector from "./WeekSelector";

const WeeklySchedule = React.memo(({ startDate, shiftsForUserId, releasedShifts}) => {

  console.log("shiftsForUserId: " + shiftsForUserId);
  console.log("releasedShifts: " + releasedShifts);


  return (
    <View style={styles.container}>
      <WeekSelector startDate={startDate} />
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
