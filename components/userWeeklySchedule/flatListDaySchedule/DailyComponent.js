import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AmDailyComponent = ({ shiftsForDay }) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.shiftText}>
                Section:dddddddd444444
                {/* {
                    filterShiftData(fullSchedule, {
                        userId: 4,
                        shiftTime: "AM",
                    })[0].section
                } */}
            </Text>
    </View>
  );
};

const PmDailyComponent = ({ shiftsForDay }) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.shiftText}>
                Section:dddddddd
                {/* {
                    filterShiftData(fullSchedule, {
                        userId: 4,
                        shiftTime: "AM",
                    })[0].section
                } */}
            </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // stack child components vertically
    width: '95%',
    padding: 0,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
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
