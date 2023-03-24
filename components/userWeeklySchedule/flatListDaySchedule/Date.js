import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  dateComponent: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  dayString: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  dayNumberString: {
    fontSize: 20,
    color: "white",
  },
});

const Date = ({ dayString, dayNumberString }) => {
  return (
    <View style={styles.dateComponent}>
      <Text style={styles.dayString}>{dayString}</Text>
      <Text style={styles.dayNumberString}>{dayNumberString}</Text>
    </View>
  );
};

export default Date;
