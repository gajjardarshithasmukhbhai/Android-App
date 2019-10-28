import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { Icon } from "react-native-paper/lib/typescript/src/components/List/List";
// import {createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from 'react-navigation-tabs';
class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.login} onPress={() => {
          this.props.navigation.navigate("Dashboard");
        }}>Login</Text>
        <Text style={style.signup}>SignUp</Text>
      </View>
    )
  }
}
class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.login} onPress={() => {
          this.props.navigation.openDrawer()
        }}>Dashboard Profile</Text>
      </View>
    )
  }
}
class LogOut extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.LogOut}>LogOut</Text>
      </View>
    )
  }
}
class News extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.login}>HEllo Gajjar i show News</Text>
      </View>
    )
  }
}
class Info extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.login}>I am Info Darshit</Text>
      </View>
    )
  }
}
class Map extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.login}>I am the Map</Text>
      </View>
    )
  }

}
class TopNavigator extends React.Component {
  render() {
    return (
      <View>
        <Text>HEllo GAJJar</Text>
      </View>
    )
  }
}
const BottomNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor} />
      )
    },
  },
  News: {
    screen: News,
    navigationOptions: {
      tabBarLabel: "News",
      tabBarIcon: ({ tintColor }) => (
        <Icons name="news" size={20} color={tintColor} />
      )
    },
  },
  Info: {
    screen: Info,
    navigationOptions: {
      tabBarLabel: "Info",
      tabBarIcon: ({ tintColor }) => (
        <Icons name="info" size={20} color={tintColor} />
      )
    },
  },
  Map: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: "map",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="map" size={20} color={tintColor} />
      )
    },
  },
  LogOut: {
    screen: LogOut,
    navigationOptions: {
      tabBarLabel: "calender",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="calendar" size={20} color={tintColor} />
      )
    },
  },
  TOp: {
    screen: TopNavigator,
    navigationOptions: {
      tabBarLabel: "Top",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="calendar" size={20} color={tintColor} />
      )
    },
  }
}, {
  tabBarOptions: {
    activeTintColor: '#3737ff',
    inactiveTintColor: 'grey',
    labelStyle: {
      fontSize: 14,
      fontWeight: "600"
    },
    style: {
      backgroundColor: '#00ff40',
    },
  }
})

const stackNavigator = createStackNavigator({
  Dashboard: {
    screen: BottomNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "scanner",
      backgroundColor: '#ff8040',
      headerLeft: <View><Icon name="menu" size={25} style={{ margin: 20 }} onPress={navigation.openDrawer} /></View>
    })

  }
})

const DrawNavigator = createDrawerNavigator({
  Dashboard: {
    screen: stackNavigator
  },
  LogOut: {
    screen: BottomNavigator
  },
  TOp: {
    screen: BottomNavigator
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: DrawNavigator
  },
})
export default createAppContainer(AppSwitchNavigator);

const style = StyleSheet.create({
  login: {
    alignSelf: "center",
    fontSize: 20,
    color: "blue",
    marginTop: 300
  },
  signup: {
    alignSelf: "center",
    fontSize: 20,
    color: "blue",
    marginTop: 20
  },
  LogOut: {
    marginTop: 300,
    alignSelf: "center",
    fontSize: 20,
    color: "blue"
  }
})