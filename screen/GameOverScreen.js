import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../components/Colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.over}>The Game is Over</Text>
        <Text style={styles.round}>Rounds Number: {props.roundsNumber}</Text>
        <Text style={styles.previous}>Number was {props.userNumber}</Text>
        <Button
          title="START NEW GAME"
          color={Colors.primary}
          onPress={props.configureNewGame}
        />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    textAlign: "center",
  },
  previous: {
      backgroundColor: Colors.blue,
      marginVertical: 5,
      fontSize: 20,
      color: "#fff",
      padding: 10,
      borderRadius: 10,
      marginBottom: 30
  },
  over: {
      backgroundColor: Colors.orange,
      marginVertical: 5,
      fontSize: 20,
      color: "#fff",
      padding: 10,
      borderRadius: 10,
  },
  round: {
      backgroundColor: Colors.violate,
      marginVertical: 5,
      fontSize: 20,
      color: "#fff",
      padding: 10,
      borderRadius: 10,
  },
});
export default GameOverScreen;
