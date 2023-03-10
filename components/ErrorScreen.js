import React from "react";
import { View, Text, Button } from "react-native";

const ErrorScreen = ({ message, onRetry }) => {
  return (
    <View>
      <Text>{message}</Text>
      <Button title="Retry" onPress={onRetry} />
    </View>
  );
};

export default ErrorScreen;
