import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screen/GameScreen';
import StartGameScreen from './screen/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  
  if(userNumber) {
    content = <GameScreen userChoice={userNumber} />
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
    flex: 1
  },
});
