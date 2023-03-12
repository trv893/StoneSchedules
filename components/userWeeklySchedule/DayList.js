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
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
  },
  lineContainer: {
    height: lineHeight,
    width: '95%',
    borderBottomWidth: 1,
    borderColor: '#0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  leftComponent: {
    height: '100%',
    width: '20%',
    backgroundColor: 'red',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'purple',
  },
  topRightComponent: {
    height: '50%',
    width: '40%',
    backgroundColor: 'blue',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  bottomRightComponent: {
    height: '50%',
    width: '40%',
    backgroundColor: 'green',
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'blue',
  },
  lineText: {
    fontSize: 16,
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
          <View style={styles.topRightComponent} />
          <View style={styles.bottomRightComponent} />
          <Text style={styles.lineText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default DayList;
