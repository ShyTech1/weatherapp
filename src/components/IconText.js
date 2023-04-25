import React from "react";
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";


const IconText = (props) => {
    // eslint-disable-next-line react/prop-types
    const { iconName, iconColor, bodyText, bodyTextStyles } = props;
    const { container, textTheme } = styles
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor}></Feather>
            <Text style={[textTheme, bodyTextStyles]}> {bodyText} </Text>
        </View >
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold',
    },
    container: {
        alignItems: "center"
    }
})

export default IconText;