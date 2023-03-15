import React, { useState } from 'react';
import { View, Picker } from 'react-native';

const DropdownList = ({ onOptionChange, releasedShifts }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
    onOptionChange(itemValue);
  };

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
      >
        {/* <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" /> */}
      </Picker>
    </View>
  );
};

export default DropdownList;
