import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#FFE47A", "#3D7EAA"],
    title: "대기흐림",
    subtitle: "지금은 연무가 껴있는 날씨에요",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#3D7EAA", "#FFE47A"],
    title: "천둥번개",
    subtitle: "지금은 천둥번개 가치는 날씨에요",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#4CA1AF", "#2C3E50"],
    title: "소나기",
    subtitle: "지금은 소나기가 오는 날씨에요",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#004e92", "#000428"],
    title: "비",
    subtitle: "지금은 비가 오는 날씨에요",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#D3959B", "#BFE6BA"],
    title: "눈",
    subtitle: "지금은 눈이 오는 날씨에요",
  },
  Atmosphere: {
    iconName: "weather-windy",
    gradient: ["#DAE2F8", "#D6A4A4"],
    title: "바람",
    subtitle: "지금은 바람이 부는 날씨에요",
  },
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#f8b500", "#fceabb"],
    title: "맑음",
    subtitle: "지금은 맑은 날씨에요",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#d9a7c7", "#fffcdc"],
    title: "구름",
    subtitle: "지금은 구름 낀 날씨에요",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#EFEFBB", "#D4D3DD"],
    title: "안개",
    subtitle: "지금은 안개 낀 날씨에요",
  },
  Dust: {
    iconName: "weather-tornado",
    gradient: ["#666600", "#999966"],
    title: "황사",
    subtitle: "지금은 황사가 오는화창한 날씨에요",
  },
  Sunny: {
    iconName: "weather-sunny",
    gradient: ["#c21500", "#ffc500"],
    title: "화창한",
    subtitle: "지금은 화창한 날씨에요",
  },
};

export default function Weather({ temp, condition }) {
  //Text는 temoerature가 될것이다.
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired, //temp는 number가 될것이다.
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
    "Dust",
    "Sunny",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
