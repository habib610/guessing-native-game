import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "../components/Card";
import Colors from "../components/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    const inputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }
    const confirmInputHandler = () => {
        const chosenNumber = enteredValue;
        if(isNaN(chosenNumber) ||  chosenNumber <= 0 || chosenNumber > 99) {
           Alert.alert("Invalid Number!", "Number has to be between 0-100", [{text: "Okay", style: "destructive", onPress: resetInputHandler}])
            return;
        } 
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
        Keyboard.dismiss()
    }
    let confirmedInput ;
    if(confirmed) {
        confirmedInput = <Card style={styles.summaryContainer}>
            <Text>You Selected</Text>
           <NumberContainer>{selectedNumber}</NumberContainer> 
           <Button color={Colors.primary} title="START GAME" />
        </Card>
    }
  return (
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text style={styles.title}>Start Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <Input
        style={styles.input}
        blurOnSubmit
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize={false}
        onChangeText = {inputHandler}
        value={enteredValue}
         />
        <View style={styles.buttonContainer}>
        <View style={styles.button}><Button onPress={resetInputHandler} title="Reset" color={Colors.violate} /></View>  
        <View style={styles.button}><Button onPress={confirmInputHandler} title="Confirm" color={Colors.pink} /></View>  
        </View>
      </Card>
      {
          confirmedInput
      }
    </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
      width: 300,
      maxWidth: "80%",
      alignItems: "center",
      },
  title: {
    fontSize: 22,
    backgroundColor: Colors.orange,
    // width: "100%",
    padding: 10,
    textAlign: "center",
    color: "#fff"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
      width: 100
  },
  input: {
      width: 50,
      textAlign: "center"
  },
  summaryContainer: {
      marginTop: 10,
      alignItems: "center",
  }
});
export default StartGameScreen;