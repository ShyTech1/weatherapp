import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'
import { weatherType } from "../utilties/weatherType";
import moment from "moment/moment";

const ListItem = (props) => {

    // eslint-disable-next-line react/prop-types
    const { dt_txt, min, max, condition } = props
    const { item, date, temp, dateTextWrapper } = styles
    console.log(new Date(dt_txt))

    return (

        <View style={item}>
            <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('hh:mm')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>

        </View>

    )
}


const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'indianred'
    },
    temp: {
        color: 'white',
        fontSize: 25
    },
    date: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }

})
export default ListItem