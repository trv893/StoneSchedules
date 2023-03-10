import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import WeeklySchedule from "./components/userWeeklySchedule/WeeklySchedule";
import { getShiftAssignments } from "./api/getShiftAssignments";
import ErrorScreen from "./components/ErrorScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [shiftData, setShiftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [error, setError] = useState(null);

  const weeklyScheduleProps = useMemo(
    () => ({
      shiftData,
      startDate,
      onStartDateChange: handleStartDateChange,
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
  }, [startDate]);

  const handleStartDateChange = (newStartDate) => {
    setStartDate(newStartDate);
  };

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
