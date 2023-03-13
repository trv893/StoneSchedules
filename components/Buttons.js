import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PrevButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonPrev} onPress={onPress}>
      <LinearGradient
        colors={[
          "#E60707",
          "#DE0202",
          "#D40404",
          "#CB0202",
          "#C10303",
          "#B80000",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>{"<"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const NextButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonNext} onPress={onPress}>
      <LinearGradient
        colors={[
          "#B80000",
          "#C10303",
          "#CB0202",
          "#D40404",
          "#DE0202",
          "#E60707",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>{">"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPrev: {
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    marginRight: 4,
  },
  buttonNext: {
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    marginLeft: 4,
  },
  gradient: {
    width: 30,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export { PrevButton, NextButton };
