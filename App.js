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
import * as Animate from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      animationEffect: "",
      animationEffec: ""
    }
  }
  render() {
    return (
      <View>

        <View style={{ marginTop: 260, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {
            // console.log("gajjar DArshit");
            this.setState({
              animationEffect: "bounceIn"
            })
            setTimeout(() => {
              this.props.navigation.navigate("LogIn")
            }, 350);
          }}>
            <Animate.View animation={this.state.animationEffect} style={{ borderWidth: 1, width: 120, height: 60, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>Login</Text>
            </Animate.View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {
            this.setState({
              animationEffec: "flipInY"
            })
            setTimeout(() => {
              this.props.navigation.navigate("SignUp")
            }, 620);
          }}>
            <Animate.View animation={this.state.animationEffec} style={{ marginTop: 10, borderWidth: 1, width: 120, height: 60, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>Signup</Text>
            </Animate.View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
class Login extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 23, marginTop: 290, alignSelf: "center" }} onPress={() => {
          this.props.navigation.navigate("Home")
        }}>I am Login</Text>
      </View>
    )
  }
}
class SignUp extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 23, marginTop: 290, alignSelf: "center" }} onPress={() => {
          this.props.navigation.navigate("Home");
        }}>I am SignUp</Text>
      </View>
    )
  }
}
class Contact extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 23, marginTop: 290, alignSelf: "center" }} onPress={() => {
          this.props.navigation.navigate("Home");
        }}>I am Contact</Text>
      </View>
    )
  }
}
class Logout extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 23, marginTop: 290, alignSelf: "center" }} onPress={() => {
          this.props.navigation.navigate("Home");
        }}>I am Logout</Text>
      </View>
    )
  }
}
const teabNavigator = createStackNavigator({
  Logout: {
    screen: Logout,
    navigationOptions: ({ navigation }) => ({
      title: "Example",
      headerLeft: <Icon name="md-menu" size={24} style={{ margin: 20, color: "#ffff" }} onPress={navigation.openDrawer} />,
      headerStyle: {
        backgroundColor: '#56CC',
      },
      headerTintColor: '#fff',
    })
  },
})
const tebNavigator = createStackNavigator({
  LogIn: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: "Example",
      headerLeft: <Icon name="md-menu" size={24} style={{ margin: 20, color: "#ffff" }} onPress={navigation.openDrawer} />,
      headerStyle: {
        backgroundColor: '#56CC',
      },
      headerTintColor: '#fff',
    })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      // title: "Example",
      // headerLeft: <Icon name="md-menu" size={24} style={{ margin: 20, color: "#ffff" }} onPress={navigation.openDrawer} />,
      headerStyle: {
        backgroundColor: '#56CC',
      },
      headerTintColor: '#fff',
    })
  },
  contact: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      title: "Example",
      headerLeft: <Icon name="md-menu" size={24} style={{ margin: 20, color: "#ffff" }} onPress={navigation.openDrawer} />,
      headerStyle: {
        backgroundColor: '#56CC',
      },
      headerTintColor: '#fff',
    })
  }
})

const drawer = createDrawerNavigator({
  LogIn: {
    screen: tebNavigator,
  },
  Logout: {
    screen: teabNavigator,
  }
})

const switching = createSwitchNavigator({
  Home: {
    screen: Home
  },
  LogIn: {
    screen: drawer
  }
})
const App = createAppContainer(switching);

export default App;

const style = StyleSheet.create({
  text: {
    fontSize: 23,
    marginTop: 270,
    alignSelf: "center"
  }
})