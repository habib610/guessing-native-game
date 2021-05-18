import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "./Colors";

const TitleText = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    backgroundColor: Colors.orange,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    fontFamily: "open-sans-bold",
    paddingHorizontal: 50
  },
});
export default TitleText;
