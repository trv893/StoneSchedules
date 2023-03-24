import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { filterShiftData } from "../../../utils/filterFunctions";

const styles = StyleSheet.create({
    amRow: {
        height: "14.29%",
        width: "80%",
        flexDirection: "row",
        backgroundColor: "blue",
        borderColor: "red",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },
});

const AmDailyComponent = ({ fullSchedule, dayString }) => {
    return (
        <View style={styles.amRow}>
            <Text style={styles.text}>
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

export default AmDailyComponent;
