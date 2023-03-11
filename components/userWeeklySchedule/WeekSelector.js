import React, { useCallback } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { formatDayOfWeekDate } from "../../utils/dateFunctions";

const WeekSelector = ({ setNewStartDateForWeekSet, setWeekOfDatesArray}) => {
  const [weekOfDates, setWeekOfDates] = useState(weekOfDatesArray);
  const [formattedDayofWeekDate, setFormattedDayofWeekDate] = useState(formatDayOfWeekDate(weekOfDates));
  return (
    <View style={styles.container}>
      <Text>{stringDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WeekSelector;
