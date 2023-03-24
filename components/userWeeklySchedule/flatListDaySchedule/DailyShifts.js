import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AmDailyComponent, PmDailyComponent } from './DailyComponent';

const DailyShifts = ({ fullSchedule, dayString }) => {
  const shiftsForDay = fullSchedule.filter(
    (shift) => shift.date === dayString
  );

  return (
    <View style={styles.container}>
      <AmDailyComponent shiftsForDay={shiftsForDay} />
      <PmDailyComponent shiftsForDay={shiftsForDay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
  },
});

export default DailyShifts;
