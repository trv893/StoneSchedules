import React, { useState } from 'react';
import { View, Text } from 'react-native';

const ShiftItem = ({shift}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const shiftData = [ /* shift data array */ ];

  
    // const handleOptionChange = (optionValue) => {
    //   setSelectedOption(optionValue);
    //   console.log(`Selected option: ${optionValue}`);
    // };
  
  
    return (
      <View>
        {/* <Text>{shift.section}</Text> */}
      </View>
    );
  };

export default ShiftItem;
