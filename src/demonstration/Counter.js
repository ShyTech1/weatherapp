import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, StatusBar } from 'react-native';


const Counter = () => {
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`counter is ${count}`)
    }, [count])


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>{`${count}`}</Text>
            <Button
                color={'red'}
                title={'Increase the count'}
                onPress={() => setCount(count + 1)} >
            </Button>
            <Button
                color={'green'}
                title={'Decrement the count'}
                onPress={() => setCount(count == 0 ? count : count - 1)} >
            </Button>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight - 5 || 0,
        backgroundColor: 'lightblue '
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginBottom: 25

    }
})
export default Counter
