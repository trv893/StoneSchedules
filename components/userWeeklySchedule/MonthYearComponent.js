import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MonthYearComponent = ({ Week }) => {
  // Get the first and last dates in the array of dates
  const firstDate = new Date(Week[0].dateObj);
  const lastDate = new Date(Week[Week.length - 1].dateObj);

  // Get the names of the first and last months
  const firstMonth = firstDate.toLocaleString('default', { month: 'long' });
  const lastMonth = lastDate.toLocaleString('default', { month: 'long' });

  // Get the year of the first date
  const year = firstDate.getFullYear();

  // Create the string to display based on the number of months in the array
  let monthString = '';
  if (firstMonth === lastMonth) {
    // If there is only one month, display the month and year
    monthString = `${firstMonth} ${year}`;
  } else {
    // If there are two or more months, display the month range with the year
    monthString = `${firstMonth} - ${year} - ${lastMonth}`;
  }

  // Return the text component with the month string
  return (
    <Text style={styles.text}>
      {monthString}
    </Text>
  );
};

// Styles for the text component
const styles = StyleSheet.create({
  text: {
    color: '#760606',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MonthYearComponent;
