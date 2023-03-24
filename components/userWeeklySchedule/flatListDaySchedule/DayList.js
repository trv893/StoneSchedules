import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Date from "./Date";
import DailyShifts from "./DailyShifts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    width: "90%",
  },
  listElement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 5,
    width: "100%",
  },
});

const DayList = ({ weekDateData, fullSchedule }) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.listElement}>
      <Date
        dayString={item.dayString}
        dayNumberString={item.dayNumberString}
      />
      <DailyShifts
       fullSchedule={fullSchedule}
       dayString={item.dateString} 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={weekDateData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dayString}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default DayList;