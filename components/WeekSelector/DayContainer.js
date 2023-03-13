import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DayContainer = ({ formattedDate, isToday, isFirst, isLast }) => {
  return (
    <View
      style={[
        {
          borderLeftWidth: isFirst ? 1 : 0,
          borderRightWidth: isLast ? 1 : 0,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderRadius: 5,
          borderColor: '#760606',
          paddingHorizontal: 6,
          paddingVertical: 6,
        },
      ]}
    >
      {isToday ? (
        <LinearGradient
          colors={[
            '#E60707',
            '#DE0202',
            '#D40404',
            '#CB0202',
            '#C10303',
            '#B80000',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 5, height: 45 }}
        >
          <Text style={[{ color: '#fff', fontSize: 16, fontWeight: 'bold' }]}>
            {formattedDate.dayString}
          </Text>
          <Text style={[{ color: '#fff', fontSize: 14, fontWeight: 'bold' }]}>
            {formattedDate.dayNumberString}
          </Text>
        </LinearGradient>
      ) : (
        <>
          <Text style={[{ fontSize: 16, fontWeight: 'bold' }]}>
            {formattedDate.dayString}
          </Text>
          <Text style={[{ fontSize: 14, fontWeight: 'bold' }]}>
            {formattedDate.dayNumberString}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    dayContainer: {
        alignItems: "center",
        borderColor: "#760606",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 6,
      },
    
      dayString: {
        fontSize: 16,
        fontWeight: "bold",
      },
      dayNumber: {
        fontSize: 14,
        fontWeight: "bold",
      },
    
    });

export default DayContainer;
