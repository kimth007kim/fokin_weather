import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp }) {
  //Text는 temoerature가 될것이다.
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name="weather-sunny" size={96} color="black" />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </View>
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
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
