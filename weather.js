import React from "react";
import {View, Text, StyleSheet, StatusBar }from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const outFit={
    tooHot:{
        wearing:["민소매", "반팔", "반바지", "원피스"]
    },
    hot:{
        wearing:["반팔","얇은셔츠"]
    },
    tooWarm:{
        wearing:["얇은가디건"]
    },
    warm:{wearing:["얇은니트"]},
    tooAutumn:{wearing:["가디건","야상"]},
    autumn:{wearing:["트렌치코트"]},
    tooCold:{wearing:["코트","히트텍"]},
    cold:{wearing:["패딩","목도리"]},

}
const weatherOptions = {
    Haze: {
      iconName: "weather-hazy",
      gradient: ["#FFAF7B", "#D76D77","#3A1C71"]
    },
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#283048","#859398"]
    },
    Drizzle: {
      iconName: "weather-rainy",
      gradient: ["#3D7EAA","#FFE47A"]
    },
    Rain: {
      iconName: "weather-pouring",
      gradient: ["#085078","#85D8CE"]
    },
    Snow: {
      iconName: "weather-snowy-heavy",
      gradient: ["#403B4A","#E7E9BB"]
    },
    Atmosphere: {
      iconName: "weather-fog",
      gradient: ["#757F9A","#D7DDE8"]
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#e1eec3","#f05053"]
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#757F9A","#D7DDE8"]
    },
    Mist: {
      iconName: "weather-fog",
      gradient: ["#757F9A","#D7DDE8"]
    },
    Dust: {
      iconName: "weather-fog",
      gradient: ["#757F9A","#D7DDE8"]
    }
  };
export default function Weather({temp, condition, weatherStep}){
    console.log(weatherStep);
    console.log(condition);
    return(
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={70} color="white" />
            <Text style={styles.temp}>{temp}<Text style={styles.degree}>℃</Text></Text>    
        </View>
        <View style={styles.outFitZone}>
            <Text style={styles.outFit}>Recomand OutFit</Text>
    <Text style={styles.outFit}>{outFit[weatherStep].wearing[0]}</Text>
        </View>
    </LinearGradient>
    );

}

Weather.propTypes={
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
      ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    temp:{
        fontSize: 40,
        color:"white"
    },
    outFitZone:{
        flex:3,
        //backgroundColor: "red"
    },
    halfContainer:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor: "blue"
    },
    outFit:{
        textAlign: "left",
        fontWeight: "bold",
        color:"white",
        paddingLeft:35,
        fontSize:20
    },
    degree:{
        fontSize:25,
    }

});