import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp }) {
  //Text는 temoerature가 될것이다.
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.PropTypes = {
  temp: PropTupes.number.isRequired, //temp는 number가 될것이다.
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
