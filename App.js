import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Dimensions  } from "react-native";
import WeeklySchedule from "./components/userWeeklySchedule/WeeklySchedule";
import { getShiftAssignments } from "./api/getShiftAssignments";
import ErrorScreen from "./components/ErrorScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

//TODO: delete this after testing
import fakeData from "./assets/shiftDataExample.json";

const { width, height } = Dimensions.get('window')

const App = () => {
  // Define state variables using the useState hook
  const [shiftData, setShiftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [error, setError] = useState(null);
  const userId = 5;
  //const [userId, setUserId] = useState(5);
  

  

  // Create a memoized object of props to pass to WeeklySchedule component
  const weeklyScheduleProps = useMemo(
    () => ({
      shiftData,
      startDate,
      userId,
    }),
    [shiftData, startDate, userId]
  );

  useEffect(() => {
    setIsLoading(true); // set loading to true when useEffect runs
  
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
          />
        )}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.05, // set margin of 5% of the device width on the left and right sides
    marginTop: height * 0.06, // set margin of 2% of the device height at the top
    marginBottom: height * 0.04, // set margin of 2% of the device height at the bottom
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
