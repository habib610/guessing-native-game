import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screen/GameOverScreen";
import GameScreen from "./screen/GameScreen";
import StartGameScreen from "./screen/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const configureNewGame = () => {
    setGuessRound(0);
    setUserNumber(null)
  };
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  const gameOver = (numRounds) => {
    setGuessRound(numRounds);

  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOver} />;
  }
  if (guessRound > 0) {
    content = (
      <GameOverScreen
        configureNewGame={configureNewGame}
        roundsNumber={guessRound}
        userNumber={userNumber}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title="Guessing Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
