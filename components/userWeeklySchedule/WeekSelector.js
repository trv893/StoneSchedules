import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrevButton, NextButton } from "../Buttons";

const WeekSelector = ({ formattedArrayOfDateObjs, onWeekChange }) => {
  const today = new Date(); // Create a new Date object for today's date

  const onPressPrevious = () => {
    onWeekChange("prev");
    console.log(
      "onPressPrevious " + formattedArrayOfDateObjs[0].dayNumberString
    );
  };

  const onPressNext = () => {
    onWeekChange("next");
    console.log("onPressNext " + formattedArrayOfDateObjs[0].dayNumberString);
  };

  return (
    <View style={styles.container}>
      <PrevButton onPress={onPressPrevious} />
      <View style={styles.weekContainer}>
        {formattedArrayOfDateObjs.map((formattedDate, index) => {
          const dateObj = formattedDate.dateObj;
          const isToday =
            dateObj.getDate() === today.getDate() &&
            dateObj.getMonth() === today.getMonth() &&
            dateObj.getFullYear() === today.getFullYear();
          return (
            <View
              key={index}
              style={[
                styles.dayContainer,
                index === formattedArrayOfDateObjs.length - 1
                  ? {
                      borderEndWidth: 1,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderColor: "#760606",
                    }
                  : { borderEndWidth: 1, borderColor: "#760606" },
                index === 0
                  ? {
                      borderStartWidth: 1,
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      borderColor: "#760606",
                    }
                  : null,
              ]}
            >
              {isToday ? (
                <LinearGradient
                  colors={[
                    "#E60707",
                    "#DE0202",
                    "#D40404",
                    "#CB0202",
                    "#C10303",
                    "#B80000",
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientDay}
                >
                  <Text style={[styles.dayString, { color: "#fff" }]}>
                    {formattedDate.dayString}
                  </Text>
                  <Text style={[styles.dayNumber, { color: "#fff" }]}>
                    {formattedDate.dayNumberString}
                  </Text>
                </LinearGradient>
              ) : (
                <>
                  <Text style={styles.dayString}>
                    {formattedDate.dayString}
                  </Text>
                  <Text style={styles.dayNumber}>
                    {formattedDate.dayNumberString}
                  </Text>
                </>
              )}
            </View>
          );
        })}
      </View>
      <NextButton onPress={onPressNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '1%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  weekContainer: {
    flexDirection: "row",
    borderColor: "#760606",
    paddingHorizontal: 2,
  },
  dayContainer: {
    alignItems: "center",
    borderColor: "#760606",
    borderTopWidth: 1, // Add top border
    borderBottomWidth: 1, // Add bottom border
    paddingHorizontal: 6,
    paddingVertical: 6,
  },

  dayString: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: "bold",
  },
  gradient: {
    width: 30,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  gradientDay: {
    width: 38,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },

  buttonText: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    paddingBottom: 8,
  },
});

export default WeekSelector;
