import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Colors from './Colors';

const Input = (props) => {
    return (
            <TextInput {...props} style={{...styles.input, ...props.style}}/>
    );
};
const styles = StyleSheet.create({
    input: {
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1,
        marginVertical: 10,
        height: 20
    }
})
export default Input;