import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground } from "react-native";
import IconText from "../components/IconText";
import moment from "moment/moment";
// eslint-disable-next-line react/prop-types
const City = ({ weatherData }) => {

    const { container, image, cityName, countryName, cityText,
        populationWrapper, populationText, riseSetWrapper, riseSetText,
        rowLayout } = styles
    // eslint-disable-next-line react/prop-types
    const { name, country, population, sunrise, sunset } = weatherData
    console.log(weatherData)
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                // eslint-disable-next-line no-undef
                source={require('../../assets/city-background.jpg')}
                style={image}>
                <Text style={[cityName, cityText]}> {name}w</Text>
                <Text style={[countryName, cityText]}> {country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        bodyText={`population: ${population} `}
                        iconName={'user'}
                        iconColor={'red'}
                        bodyTextStyles={populationText}
                    />
                </View >
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        bodyText={moment(sunrise).format('h:mm a')}
                        iconName={'sunrise'}
                        iconColor={'white'}
                        bodyTextStyles={riseSetText} />

                    <IconText
                        bodyText={moment(sunset).format('h:mm a')}
                        iconName={'sunset'}
                        iconColor={'white'}
                        bodyTextStyles={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        margin: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center"
    }
})
export default City