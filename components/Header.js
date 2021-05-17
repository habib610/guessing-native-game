import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './Colors';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>{props.title}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.pink,
        padding: 20,
        paddingTop: 50,
        color: "#fff",
    },
    logo: {
        color: "#fff",
        fontSize: 20
    }
})
export default Header;