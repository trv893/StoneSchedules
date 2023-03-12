import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const containerHeight = screenHeight * 0.8;
const lineHeight = containerHeight / 7;

const styles = StyleSheet.create({
  container: {
    height: containerHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  lineContainer: {
    height: lineHeight,
    width: '95%',
    borderWidth: 1,
    borderColor: '#0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  leftComponent: {
    height: '100%',
    width: '20%',
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'purple',
  },
  rightComponent: {
    flex: 1,
    flexDirection: 'column',
  },
  topRightRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'red',
  },
  bottomRightRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'blue',
  },
});

const DayList = ({ userShiftData, releasedShiftData }) => {
  const data = [
    'Line 1',
    'Line 2',
    'Line 3',
    'Line 4',
    'Line 5',
    'Line 6',
    'Line 7',
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View style={styles.lineContainer} key={index}>
          <View style={styles.leftComponent} />
          <View style={styles.rightComponent}>
            <View style={styles.topRightRow} />
            <View style={styles.bottomRightRow} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default DayList;
