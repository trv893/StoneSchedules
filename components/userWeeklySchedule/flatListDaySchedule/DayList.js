import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Date from './Date';
import DailyShifts from './DailyShifts';

const DayList = ({ weekDateData, fullSchedule }) => {
  const renderItem = ({ item }) => (
    <View style={styles.listElement}>
      <Date dayString={item.dayString} dayNumberString={item.dayNumberString} />
      <DailyShifts fullSchedule={fullSchedule} dayString={item.dateString} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={weekDateData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dayString}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    width: '100%',
  },
  listElement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    flex: 1,
  },
  
  flatListContainer: {
    alignItems: 'center',
    width: '100%',
  },
});

export default DayList;
