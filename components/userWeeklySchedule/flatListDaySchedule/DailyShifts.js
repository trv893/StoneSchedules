import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { filterShiftData } from "../../../utils/filterFunctions";
import AmDailyComponent from "./AmDailyShifts";
import PmDailyComponent from "./PmDailyShifts";

const styles = StyleSheet.create({
  dailyShiftComponent: {
    flexDirection: "row",
    width: "80%",
  },
});

const DailyShifts = ({ fullSchedule, dayString }) => {
  return (
    <View style={styles.dailyShiftComponent}>
      <AmDailyComponent
        fullSchedule={fullSchedule}
        dayString={dayString}
      />
      <PmDailyComponent
        fullSchedule={fullSchedule}
        dayString={dayString}
      />
    </View>
  );
};

export default DailyShifts;
