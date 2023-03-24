import React from "react";
import { View, StyleSheet } from "react-native";
import { PrevButton, NextButton } from "../Buttons";
import WeekDisplay from "./WeekDisplay";

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
      <WeekDisplay formattedArrayOfDateObjs={formattedArrayOfDateObjs} today={today} />
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
});

export default WeekSelector;
