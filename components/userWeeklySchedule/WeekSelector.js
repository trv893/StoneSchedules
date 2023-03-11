import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

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
        <LinearGradient
          colors={["#E60707", "#DE0202", "#D40404", "#CB0202", "#C10303", "#B80000"]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>{"<"}</Text>
        </LinearGradient>
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
                index === formattedArrayOfDateObjs.length - 1 ? { borderEndWidth: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5 } : { borderEndWidth: 1 },
                index === 0 ? { borderStartWidth: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 } : null,
                isToday ? { backgroundColor: "#E61919" } : null, // Set background color to gray if the date is today's date
              ]}
            >
              <Text style={styles.dayString}>{formattedDate.dayString}</Text>
              <Text style={styles.dayNumber}>{formattedDate.dayNumberString}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.button} onPress={onPressNext}>
        <LinearGradient
          colors={["#B80000", "#C10303", "#CB0202", "#D40404", "#DE0202", "#E60707"]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>{">"}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: "auto",
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  weekContainer: {
    flexDirection: "row",
    borderColor: "gray",
    paddingHorizontal: 2,
  },
  dayContainer: {
    flex: 1,
    alignItems: "center",
    borderColor: "#760606",
    borderTopWidth: 1, // Add top border
    borderBottomWidth: 1, // Add bottom border
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  
  dayString: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  gradient: {
    width: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bolder',
    paddingBottom: 8,
  }
  
});


export default WeekSelector;
