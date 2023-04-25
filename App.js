import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tab";
import {
  View,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { useGetWeather } from "./hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

// eslint-disable-next-line react/display-name

const App = () => {
  console.log("**APP IS RUNNING**")
  const { container } = styles;
  // eslint-disable-next-line no-unused-vars
  const [loading, error, weather] = useGetWeather()


  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View style={container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'red'} />
      )
      }
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})
export default App