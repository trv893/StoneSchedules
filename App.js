import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import WeeklySchedule from "./components/userWeeklySchedule/WeeklySchedule";
import { getShiftAssignments } from "./api/getShiftAssignments";
import ErrorScreen from "./components/ErrorScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  formatDateToString,
  handleStartDateChange,
} from "./utils/dateFunctions";
import { getDataForWeeklySchedule } from "./utils/filterFunctions";

//TODO: delete this after testing
import fakeData from "./assets/shiftDataExample.json";

const App = () => {
  // Define state variables using the useState hook
  const [shiftData, setShiftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [error, setError] = useState(null);

  const [userId, setUserId] = useState(5);
  const [shiftsForUserId, setShiftsForUserId] = useState(null);
  const [releasedShifts, setReleasedShifts] = useState([]);

  // Create a memoized object of props to pass to WeeklySchedule component
  const weeklyScheduleProps = useMemo(
    () => ({
      startDate,
      shiftsForUserId,
      releasedShifts,
    }),
    [shiftData, startDate]
  );

  useEffect(() => {
    // Call getShiftAssignments API to retrieve shift data
    getShiftAssignments(
      startDate,
      endDate,
      setShiftData,
      setIsLoading,
      setError
    );
  }, []);

  // Render the ErrorScreen component if an error occurs during API call
  if (error) {
    return <ErrorScreen message={error} onRetry={() => fetchData()} />;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Render the ActivityIndicator if the data is loading, otherwise render the WeeklySchedule component */}
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#1e90ff" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <WeeklySchedule
            {...weeklyScheduleProps}
            onStartDateChange={handleStartDateChange}
          />
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
