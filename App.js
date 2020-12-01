import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

export default class extends React.Component {
  state={
    isLoding: true
  };
  getWeather = async (latitude, longitude) => {
    
    const { data:{main:{temp, temp_max, temp_min}, weather}} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    const value = ((temp_max+temp_min)/2)-2;
    console.log(value,temp_max,temp_min);
    const level =["tooHot","hot","tooWarm","warm","tooAutumn","autumn","tooCold","cold"];
    let weatherStep="";
    if(value>27){
      weatherStep=level[0];
    }else if(value<27 && value>22){
      weatherStep=level[1];
    }else if(value<22 && value>19){
      weatherStep=level[2];
    }else if(value<19 && value>16){
      weatherStep=level[3];
    }else if(value<16 && value>11){
      weatherStep=level[4];
    }else if(value<11 && value>8){
      weatherStep=level[5];
    }else if(value<8 && value>4){
      weatherStep=level[6];
    }else{
      weatherStep=level[7];
    }
    this.setState({isLoding:false, condition:weather[0].main, temp, weatherStep});
    
  };
  //expo getlocaion
  getLocation = async() => {
    //permission
    try {
      //const response = await Location.requestPermissionsAsync();
      //console.log(responese)
      //const location = await Location.getCurrentPositionAsync();
      //const {coords} = locaion;
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude,longitude)
      this.getWeather(latitude, longitude);
      setTimeout(()=>{this.setState({isLoding: false})},1000);
      
      //console.log(location);
      //throw Error()
      // Send to API 
    } catch (error) {
      Alert.alert("Do not access permission", "Plz Agree permission");
      console.log(error)
    }
    
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoding, temp, condition, weatherStep} = this.state;
    return isLoding ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} weatherStep={weatherStep}/>;
  }
}