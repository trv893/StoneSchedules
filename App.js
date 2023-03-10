import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import WeeklySchedule from "./components/userWeeklySchedule/WeeklySchedule";
import { getShiftAssignments } from "./api/getShiftAssignments";
import ErrorScreen from "./components/ErrorScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  findShiftForDayAndUser,
  findAllReleasedShiftsForDay,
} from "./utils/filter";

//TODO: delete this after testing
import fakeData from "./assets/shiftDataExample.json";

const App = () => {
  const [shiftData, setShiftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [error, setError] = useState(null);

  const [matchingShift, setMatchingShift] = useState(null);
  const [releasedShifts, setReleasedShifts] = useState([]);

  const weeklyScheduleProps = useMemo(
    () => ({
      shiftData,
      startDate,
      setStartDate,
      matchingShift,
      releasedShifts,
    }),
    [shiftData, startDate]
  );

  useEffect(() => {
    getShiftAssignments(
      startDate,
      endDate,
      setShiftData,
      setIsLoading,
      setError
    );
    // Call filter functions on shiftData and store the results in state variables
    const matchingShift = findShiftForDayAndUser(date, userId, shiftName, shiftData);
    //TODO: change fakeData to shiftData after testing
    const releasedShifts = findAllReleasedShiftsForDay(date, shiftName, fakeData);
    setMatchingShift(matchingShift);
    setReleasedShifts(releasedShifts);
  }, [startDate]);

  if (error) {
    return <ErrorScreen message={error} onRetry={() => fetchData()} />;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#1e90ff" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <WeeklySchedule {...weeklyScheduleProps} />
        )}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
  },
});

export default App;
