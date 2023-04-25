import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/rowText';
import { weatherType } from '../utilties/weatherType';




// eslint-disable-next-line react/prop-types
const CurrentWeather = ({ weatherData }) => {
    console.log('**COMPONENT CURRENT WEATHER**')
    const { wrapper,
        container,
        tempStyles,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message } = styles

    // eslint-disable-next-line react/prop-types
    const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
    // eslint-disable-next-line react/prop-types
    const weatherCondition = weather[0]?.main
    return (

        <SafeAreaView style={[
            wrapper,
            { backgroundColor: weatherType[weatherCondition]?.backgroundColor }]}>
            <View style={container}>
                <Feather
                    name={weatherType[weatherCondition]?.icon}
                    size={100}
                    color="white" />

                <Text>Current Weather</Text>
                <Text style={tempStyles}> {`${temp}°`} </Text>
                <Text style={feels}> {`feels like ${feels_like}°`} </Text>
                <RowText
                    containerStyles={highLowWrapper}
                    messageOne={`High:${temp_max}° `}
                    messageOneStyles={highLow}
                    messageTwo={`Low:${temp_min}°`}
                    messageTwoStyles={highLow}
                />

            </View>
            <RowText
                // eslint-disable-next-line react/prop-types
                messageOne={weather[0]?.description}
                messageTwo={weatherType[weatherCondition]?.message}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    wrapper: {
        flex: 1,
    },
    tempStyles: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black'
    },
    highLow: {
        color: 'black',
        fontSize: 30
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    }, description: {
        fontSize: 43
    },
    message: {
        fontSize: 25
    }
});
export default CurrentWeather