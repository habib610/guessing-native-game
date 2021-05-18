import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screen/GameOverScreen";
import GameScreen from "./screen/GameScreen";
import StartGameScreen from "./screen/StartGameScreen";
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { useFonts } from 'expo-font';
import Colors from "./components/Colors";

const fetchFonts = () => {
 return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [loaded,setLoaded] = useState(false)
  
  
  if (!loaded) {
    return <AppLoading
    startAsync={fetchFonts}
    onFinish={()=> setLoaded(true)}
    onError={(err)=> console.log(err)}
    />
  }
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
      <Text style={styles.test}>Hello text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    fontSize: 22,
    backgroundColor: Colors.pink,
    padding: 10,
    color: "#fff",
  }
});
