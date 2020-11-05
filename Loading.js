import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (<View style={styles.container}>
        <Text style={styles.subtitle}>OUTFIT OF TODAY'S WEATHER</Text>
        <Text style={styles.title}>#OOTW</Text>
    </View>);
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#B84CE4",
        justifyContent: "flex-end",
        paddingVertical:200,
    },
    subtitle:{
        color:"black",
        fontSize:18,
        textAlign: "right",
        paddingRight: 20,
    },
    title:{
        color:"black",
        fontSize:35,
        textAlign: "right",
        fontWeight: "bold",
        paddingRight: 20,
    },
});