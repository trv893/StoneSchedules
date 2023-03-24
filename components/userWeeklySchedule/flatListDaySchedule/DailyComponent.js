import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AmDailyComponent = ({ shiftsForDay, style }) => {
  const amShifts = shiftsForDay.filter((shift) => shift.shiftTime === 'am');

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>AM Shifts</Text>
      {amShifts.map((shift) => (
        <View style={styles.shiftContainer} key={shift.id}>
          <Text style={styles.shiftText}>{shift.role}</Text>
        </View>
      ))}
    </View>
  );
};

const PmDailyComponent = ({ shiftsForDay, style }) => {
  const pmShifts = shiftsForDay.filter((shift) => shift.shiftTime === 'pm');

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>PM Shifts</Text>
      {pmShifts.map((shift) => (
        <View style={styles.shiftContainer} key={shift.id}>
          <Text style={styles.shiftText}>{shift.role}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // stack child components vertically
    width: '95%',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shiftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  shiftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export { AmDailyComponent, PmDailyComponent };
