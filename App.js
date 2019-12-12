import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
// import * as Animatable from 'react-native-animatable';
class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}

class Darshit extends React.Component {
  render() {
    return (
      <View>
        <Text onPress={() => {
          this.props.navigation.navigate("Navigation")
        }}>Hello Gajjar</Text>
      </View>
    )
  }
}
class Navigation extends React.Component {
  render() {
    return (
      <View>
        <Text>Full stack Developer</Text>
      </View>
    )
  }
}
const Navigati = createStackNavigator({
  Home: {
    screen: Darshit,
    navigationOptions: {
      title: "HEllo",
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#2F95D6',
        borderBottomColor: '#ff00ff',
        borderBottomWidth: 1,
      },
      
    },
  },
  Navigation: {
    screen: Navigation,

  }
})
const SwitchNavigation = createSwitchNavigator({
  Home: {
    screen: Navigati
  }
})
export default createAppContainer(Navigati);

const style = StyleSheet.create({
  text: {
    fontSize: 23,
    marginTop: 270,
    alignSelf: "center"
  }
})