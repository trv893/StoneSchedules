import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { filterShiftData } from "../../utils/filterFunctions";
import ShiftItem from "./ShiftItem";
import PickupRequestDropdown from "./PickupRequestDropdown";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const containerWidth = screenWidth * 0.9;
const containerHeight = screenHeight * 0.8;
const lineHeight = containerHeight / 7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  listElement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 5,
  },
  leftComponent: {
    height: lineHeight * 2,
    width: containerWidth * 0.2,
    backgroundColor: "red",
    borderRightWidth: 1,
    borderColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  dayString: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  dayNumberString: {
    fontSize: 16,
    color: "white",
  },

  rightComponent: {
    flexDirection: "column",
  },
  topRightRow: {
    height: lineHeight,
    width: containerWidth * 0.8,
    flexDirection: "row",
    backgroundColor: "blue",
    borderColor: "red",
  },
  bottomRightRow: {
    height: lineHeight,
    width: containerWidth * 0.8,
    flexDirection: "row",
    backgroundColor: "green",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

const DayList = ({ weekDateData, fullSchedule }) => {
  const renderItem = ({ item, index }) => {
    const filteredShiftDataAM = filterShiftData(fullSchedule, {
      userId: 4,
      shiftTime: "AM",
      date: item.dateString,
    });
    const releasedShiftDataAm = filterShiftData(fullSchedule, {
      userId: 4,
      shiftTime: "AM",
      date: item.dateString,
      released: true,
    });

    const handleValueChange = (itemValue) => {
      setSelectedValue(itemValue);
      onOptionChange(itemValue);
    };

    return (
      <View style={styles.listElement}>
        <View style={styles.leftComponent}>
          <Text style={styles.dayString}>{item.dayString}</Text>
          <Text style={styles.dayNumberString}>{item.dayNumberString}</Text>
        </View>

        <View style={styles.rightComponent}>
          <View style={styles.topRightRow}>
            {filterShiftData(fullSchedule, {
              userId: 14,
              shiftTime: "AM",
              date: item.dateString,
            }) ? (
              <ShiftItem shiftData={filteredShiftDataAM} />
            ) : (
              <View>
                <Text>no shift</Text>
                {/* <PickupRequestDropdown
                onOptionChange={handleValueChange} 
                releasedShiftsArray = {releasedShiftDataAm}
              /> */}
              </View>
              
            )}
          </View>

          <View style={styles.bottomRightRow}>
            <Text>
              {item.dayNumberString}dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
            </Text>
          </View>
        </View>
      </View>
    );
  };

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
