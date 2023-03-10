import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import WeeklySchedule from "./components/userWeeklySchedule/WeeklySchedule";
import { getShiftAssignments } from "./api/getShiftAssignments";
import ErrorScreen from "./components/ErrorScreen";
import * as RNLocalize from "react-native-localize";
import { fetchShiftAssignments } from "./api/getShiftAssignments";

const App = () => {
  const [shiftData, setShiftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [error, setError] = useState(null);
  // Use useMemo to memoize shiftData and startDate props
  const weeklyScheduleProps = useMemo(
    () => ({
      shiftData,
      startDate,
      onStartDateChange: handleStartDateChange,
    }),
    [shiftData, startDate]
  );

  useEffect(() => {
    fetchShiftAssignments();
  }, [startDate]);

  const handleStartDateChange = (newStartDate) => {
    setStartDate(newStartDate);
  };

  if (error) {
    return <ErrorScreen message={error} onRetry={() => fetchData()} />;
  }

  const userLocale = RNLocalize.getLocales()[0].languageCode;
  const { languageCode } = RNLocalize.getLocales()[0];
  const localizedStrings =
    languageCode === "es"
      ? require("./localization/es.json")
      : require("./localization/en.json");

  return (
    <View style={styles.Container}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#1e90ff" />
          <Text style={styles.loadingText}>{localizedStrings.loading}</Text>
        </View>
      ) : (
        <WeeklySchedule {...weeklyScheduleProps} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    top: 60,
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
