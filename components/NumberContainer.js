import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Colors from './Colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.children}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        borderColor: Colors.primary,
        borderWidth: 2,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
        fontSize: 22,
    }
})
export default NumberContainer;