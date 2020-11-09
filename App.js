
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Text, View, StyleSheet } from 'react-native';
import Axios from 'axios';
import Weather from './weather';

const API_KEY = "74efabcfc9a348ea7b1f3ff0afe5915f";
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
export default class extends React.Component {
    state = {
      isLoading: true
    };
    getWeather = async(latitude, longitude) => {
        const {data} = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        this.setState({
          isLoading: false,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          name: data.name,
          condition: data.weather[0].main,
        });
    };

    getLocation = async() => {
      try {
        const response = await Location.requestPermissionsAsync();
        console.log(response);
        const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();  
        this.getWeather(latitude, longitude);
        this.setState({isLoading: false});
        
     } catch (error) {
        Alert.alert("Can't find you.", "set location permission");
      } 
      
      
    };
    componentDidMount(){
      this.getLocation();
    }
    render(){
      const { isLoading, temp, condition, temp_max, temp_min, name } = this.state;
      return isLoading ? <Loading /> : <Weather temp={temp} condition={condition}/>;
    }
    
  
}

