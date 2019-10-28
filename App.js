
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
//stack navigator
class Home extends React.Component {
  render() {
    return (<View><Text style={style.text} onPress={() => {
      this.props.navigation.navigate("page2")
    }}>Hello welcome</Text></View>)
  }
}
class Page2 extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.text} onPress={() => {
          this.props.navigation.openDrawer();
        }}>I am in second page</Text>
      </View>
    )
  }
};
class Other extends React.Component {
  render() {
    return (
      <View><Text>Gajjau</Text></View>
    )
  }
}
const drawer = createDrawerNavigator({
  Home: {
    screen: Page2
  },
  Other: {
    screen: Other
  }
})
const Stack = createStackNavigator({
  Home: {
    screen: Home
  },
  page2: {
    screen: drawer
  }
})
export default createAppContainer(Stack);
const style = StyleSheet.create({
  text: {
    alignSelf: "center",
    marginTop: "70%",
    fontSize: 27
  }
})