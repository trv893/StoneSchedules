import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WeekSelector = ({ startDate }) => {
  var stringDate = startDate.toString();


  return (
    <View style={styles.container}>
      <Text>{stringDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WeekSelector;
