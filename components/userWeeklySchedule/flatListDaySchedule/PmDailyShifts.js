import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { filterShiftData } from "../../../utils/filterFunctions";

const styles = StyleSheet.create({
    pmRow: {
        height: "14.29%",
        width: "80%",
        flexDirection: "row",
        backgroundColor: "blue",
        borderColor: "red",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
});

const PmDailyComponent = ({ fullSchedule, dayString }) => {
    return (
        <View style={styles.pmRow}>
            <Text style={styles.text}>
                Section:ggggggggggggggg
                {/* {
                    filterShiftData(fullSchedule, {
                        userId: 4,
                        shiftTime: "PM",
                    })[0].section
                } */}
            </Text>
        </View>
    );
};

export default PmDailyComponent;
