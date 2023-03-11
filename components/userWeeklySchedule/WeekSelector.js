import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const WeekSelector = ({ formattedDayOfWeekDate, onWeekChange }) => {
  console.log("formattedDayOfWeekDate", formattedDayOfWeekDate)
  const onPressPrevious = () => {
    onWeekChange("prev");
  };

  const onPressNext = () => {
    onWeekChange("next");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressPrevious}>
        <Text>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.weekContainer}>
        {formattedDayOfWeekDate.map((formattedDate, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayString}>{formattedDate.dayString}</Text>
            <Text style={styles.dayNumber}>{formattedDate.dayNumber}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={onPressNext}>
        <Text>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    padding: 10,
  },
  weekContainer: {
    flexDirection: "row",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  dayContainer: {
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  dayString: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dayNumber: {
    fontSize: 14,
  },
});

export default WeekSelector;
