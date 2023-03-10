import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WeeklySchedule = React.memo(({ shiftData, startDate }) => {


  return (
    <View style={styles.container}>
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
