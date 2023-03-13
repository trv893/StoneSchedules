import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { filterShiftData } from "../../utils/filterFunctions";

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
    borderRightWidth: 1, // Use borderRightWidth instead of borderRight
    borderColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  dayString: {
    fontSize: 20, // Set font size to 20
    fontWeight: "bold", // Set font weight to bold
    color: "white", // Set text color to white
  },
  dayNumberString: {
    fontSize: 16, // Set font size to 16
    color: "white", // Set text color to white
  },

  rightComponent: {
    flexDirection: "column",
  },
  topRightRow: {
    height: lineHeight,
    width: containerWidth * 0.8,
    flexDirection: "row",
    backgroundColor: "blue",
    //borderBottom: 1,
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
  const renderItem = ({ item, index }) => (
    <View style={styles.listElement}>
      <View style={styles.leftComponent}>
        <Text style={styles.dayString}>{item.dayString}</Text>
        <Text style={styles.dayNumberString}>{item.dayNumberString}</Text>
      </View>

      <View style={styles.rightComponent}>
        <View style={styles.topRightRow}>
          <Text style={styles.listElement}>
            {
              filterShiftData(fullSchedule, {
                userId: 4,
                shiftTime: "PM",
                })[0].section
            }
          </Text>
        </View>

        <View style={styles.bottomRightRow}>
          <Text>{item.dayNumberString}dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf</Text>
        </View>
      </View>
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
