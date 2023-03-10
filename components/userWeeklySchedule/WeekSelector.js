import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WeekSelector = React.memo(({ shiftData, startDate, onStartDateChange }) => {
  const handlePrevWeekPress = useCallback(() => {
    const newStartDate = getPrevWeekStartDate(startDate);
    onStartDateChange(newStartDate);
  }, [startDate, onStartDateChange]);

  const handleNextWeekPress = useCallback(() => {
    const newStartDate = getNextWeekStartDate(startDate);
    onStartDateChange(newStartDate);
  }, [startDate, onStartDateChange]);

  return (
    <View style={styles.container}>
      <Text>Weekly Schedule</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WeekSelector;
