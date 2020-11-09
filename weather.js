import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp, condition,temp_max, temp_min, name}){
    return <View style={styles.container}>
            <Text>{temp}</Text>
            <Text></Text>
            {/* <Text>{name}</Text>
            <Text>{temp_max}</Text>
            <Text>{temp_min}</Text> */}
            </View>
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired
    // temp_min: PropTypes.number.isRequired,
    // temp_max: PropTypes.number.isRequired,
    // name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});