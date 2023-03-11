import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const WeekSelector = ({ formattedArrayOfDateObjs, onWeekChange }) => {
  const today = new Date(); // Create a new Date object for today's date

  const onPressPrevious = () => {
    onWeekChange("prev");
    console.log("onPressPrevious " + formattedArrayOfDateObjs[0].dayNumberString);
  };

  const onPressNext = () => {
    onWeekChange("next");
    console.log("onPressNext " + formattedArrayOfDateObjs[0].dayNumberString)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressPrevious}>
        <Text style={styles.buttonText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.weekContainer}>
        {formattedArrayOfDateObjs.map((formattedDate, index) => {
          const dateObj = formattedDate.dateObj;
          const isToday = dateObj.getDate() === today.getDate() && dateObj.getMonth() === today.getMonth() && dateObj.getFullYear() === today.getFullYear();
          return (
            <View
              key={index}
              style={[
                styles.dayContainer,
                index === formattedArrayOfDateObjs.length - 1 ? { borderEndWidth: 1 } : { borderEndWidth: 1 },
                index === 0 ? { borderStartWidth: 1 } : null,
                isToday ? { backgroundColor: "lightblue" } : null, // Set background color to gray if the date is today's date
              ]}
            >
              <Text style={styles.dayString}>{formattedDate.dayString}</Text>
              <Text style={styles.dayNumber}>{formattedDate.dayNumberString}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.button} onPress={onPressNext}>
        <Text style={styles.buttonText}>{">"}</Text>
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
    overflow: "hidden", // To hide the extra border at the beginning
  },
  weekContainer: {
    flexDirection: "row",
    borderColor: "gray",
    paddingHorizontal: 2,
  },
  dayContainer: {
    flex: 1, // To make the day containers expand to fill the available space
    alignItems: "center",
    borderColor: "gray",
    paddingHorizontal: 4,
    paddingVertical: 8, // To make the day containers taller
  },
  dayString: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dayNumber: {
    fontSize: 14,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default WeekSelector;
