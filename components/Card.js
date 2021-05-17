import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './Colors';
const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 8,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        marginVertical: 20
    },
})
export default Card;