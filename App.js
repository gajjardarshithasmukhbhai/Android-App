import React from 'react';
import { StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, View, TextInput, ToastAndroid, Vibration, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Root, Card, Text, CardItem, Content, Header, Left, Body, Right, Button, Icon, Title, Input, Item, Toast } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import Explore from './Navigator/Explore.js';
import Navigation from './Navigator/Navigation';
import Trip from './Navigator/Trips.js';
import Saved from './Navigator/saved';
//flex 1 width the maximum te api te dese
//background colot thi 80 height agad teno color e white te bani jase
//but borderBottomWidth thi jya tame je height te 80 up che tya border te bani te jase
//but when borderBottomColor thi border no color e chnage te thai jase
class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      AntDesign: require('native-base/Fonts/AntDesign.ttf'),
      EvilIcons: require('native-base/Fonts/EvilIcons.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Playfair: require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
      Cookie: require('./assets/fonts/Cookie-Regular.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />

    }
    return (
      <View>

        <View style={{ flex: 1 }}>
          <View style={{
            height: 100, backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
          }}>
            <View style={{
              flexDirection: "row",
              marginVertical: 20,
              height: 50,
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: "#dddddd",
              borderRadius: 6,

            }}>
              <Ionicons name="md-search" size={24} color="black" style={{ flex: 1, marginVertical: 11, marginHorizontal: 8 }} />

              <TextInput underlineColorAndroid="transparent" placeholder="Try Kadi" placeholderTextColor="grey" style={{
                fontWeight: "400", width: "84%"

              }} />
            </View>
          </View>


        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginVertical: 120 }}>
            <View >
              <View style={{ justifyContent: 'flex-start', marginLeft: 10, }}>
                <Text style={{ fontSize: 24, paddingBottom: 10, fontFamily: 'Playfair', fontWeight: '600' }}>Flight Booking</Text>
              </View>
              <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  <View style={{ flex: 2, borderWidth: 1, borderRadius: 7, borderColor: 'grey', marginLeft: 10 }}>
                    <Image source={require('./assets/images/aeroplane-air-5.jpg')} style={{ width: 140, height: 120, borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                    <Button style={{ width: 110, height: 34, marginTop: 6, justifyContent: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 7, backgroundColor: '#fffff', alignSelf: 'center' }}>
                      <Ionicons name="md-planet" size={23} style={{ marginLeft: 28 }} color='grey' />
                      <Text style={{ color: "grey", marginRight: 12 }}>Airbus</Text>
                    </Button>
                  </View>
                  <View style={{ shadowColor: '#090000', flex: 2, borderWidth: 1, borderRadius: 7, borderColor: 'grey', marginLeft: 10 }}>
                    <Image source={require('./assets/images/aeroplane-aircraft-1.jpg')} style={{ width: 140, height: 120, borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                    <Button style={{ width: 110, height: 34, marginTop: 6, justifyContent: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 7, backgroundColor: '#fffff', alignSelf: 'center' }}>
                      <Ionicons name="md-planet" size={23} style={{ marginLeft: 28 }} color='grey' />
                      <Text style={{ color: "grey", marginRight: 12 }}>Qatar</Text>
                    </Button>

                  </View>
                  <View style={{ shadowColor: '#090000', flex: 2, borderWidth: 1, borderRadius: 7, borderColor: 'grey', marginLeft: 10 }}>
                    <Image source={require('./assets/images/aeroplane-aircraft-4.jpg')} style={{ width: 140, height: 120, borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                    <Button style={{ width: 110, height: 34, marginTop: 6, justifyContent: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 7, backgroundColor: '#fffff', alignSelf: 'center' }}>
                      <Ionicons name="md-planet" size={23} style={{ marginLeft: 28 }} color='grey' />
                      <Text style={{ color: "grey", marginRight: 12 }}>Alaska</Text>
                    </Button>

                  </View>
                  <View style={{ shadowColor: '#090000', flex: 2, borderWidth: 1, borderRadius: 7, borderColor: 'grey', marginLeft: 10 }}>
                    <Image source={require('./assets/images/aircraft-aircraft-3.jpg')} style={{ width: 140, height: 120, borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                    <Button style={{ width: 110, height: 34, marginTop: 6, justifyContent: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 7, backgroundColor: '#fffff', alignSelf: 'center' }}>
                      <Ionicons name="md-planet" size={23} style={{ marginLeft: 28 }} color='grey' />
                      <Text style={{ color: "grey", marginRight: 12 }}>Etihad</Text>
                    </Button>

                  </View>
                  <View style={{ shadowColor: '#090000', flex: 2, borderWidth: 1, borderRadius: 7, orderColor: 'grey', marginLeft: 10, paddingBottom: 5, marginRight: 10 }}>
                    <Image source={require('./assets/images/aeroplane-aircraft-2.jpg')} style={{ width: 140, height: 120, borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                    <Button style={{ width: 110, height: 34, marginTop: 6, justifyContent: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 7, backgroundColor: '#fffff', alignSelf: 'center' }}>
                      <Ionicons name="md-planet" size={23} style={{ marginLeft: 28 }} color='grey' />
                      <Text style={{ color: "grey", marginRight: 12 }}>Indigo</Text>
                    </Button>

                  </View>


                </ScrollView>

              </View>

              {/*start*/}

              <View style={{ flexDirection: 'column' }}>
                <View style={{ marginTop: 24, padding: 10 }}>
                  <Text style={{ fontSize: 24, fontFamily: 'Playfair', fontWeight: '500' }}>Introducing Zexmux Plus</Text>

                </View>
                <View style={{ justifyContent: 'space-around', padding: 8 }}>
                  <Text style={{ fontSize: 18, paddingBottom: 10, fontFamily: 'Roboto', color: 'grey', paddingBottom: 10 }}>Our Airways give worldest best facility</Text>

                </View>


                {/*resize mode contain te proper image ne te lavi de che cut nahi thava de*/}
                <View style={{ justifyContent: 'space-around', alignSelf: 'center', marginVertical: -7 }}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ padding: 10, flex: 2 }}>
                      <ImageBackground source={require('./assets/images/etihad-airways.jpg')} imageStyle={{ borderRadius: 6 }} style={{ width: 340, height: 190 }}>
                        <View >
                          <Text style={{ color: "white", marginVertical: 150, marginHorizontal: 90, fontSize: 16 }}>Etihad Airways</Text>
                        </View>
                      </ImageBackground>

                    </View>
                    {/*image set karo and ene scroll karava magta hoy to always width height apo*/}
                    <View style={{ padding: 10, flex: 2 }}>
                      <ImageBackground source={require('./assets/images/facility1.jpg')} imageStyle={{ borderRadius: 6 }} style={{ width: 340, height: 190 }}>
                        <View >
                          <Text style={{ color: "white", marginVertical: 150, marginHorizontal: 60, fontSize: 16 }}>Seating Arrangement</Text>
                        </View>
                      </ImageBackground>

                    </View>
                    <View style={{ padding: 10, flex: 2 }}>
                      <ImageBackground source={require('./assets/images/facility2.jpg')} imageStyle={{ borderRadius: 6 }} style={{ width: 340, height: 190 }}>
                        <View >
                          <Text style={{ color: "white", marginVertical: 150, marginHorizontal: 90, fontSize: 16 }}>Comfortable Seats</Text>
                        </View>
                      </ImageBackground>

                    </View>
                    <View style={{ padding: 10, flex: 2 }}>
                      <ImageBackground source={require('./assets/images/facility3.jpg')} imageStyle={{ borderRadius: 6 }} style={{ width: 340, height: 190 }}>
                        <View >
                          <Text style={{ color: "white", marginVertical: 150, marginHorizontal: 90, fontSize: 16 }}>Eating Facility</Text>
                        </View>
                      </ImageBackground>

                    </View>
                    <View style={{ padding: 10, flex: 2 }}>
                      <ImageBackground source={require('./assets/images/facility4.jpg')} imageStyle={{ borderRadius: 6 }} style={{ width: 340, height: 190 }}>
                        <View >
                          <Text style={{ color: "white", marginVertical: 150, marginHorizontal: 60, fontSize: 16 }}>Sleeping Arrangement</Text>
                        </View>
                      </ImageBackground>

                    </View>

                  </ScrollView>


                </View>

              </View>

              {/*end*/}
              <View style={{ flex: 1, marginVertical: 420 }}>
                <Text>Hello Gajjar Darshit</Text>
              </View>
            </View>



          </View>

        </ScrollView>

      </View>
    )
  }
}
// export default Explore;
//tint color is specially is use for when we want to give color 
//transparent 
//ex.we make the image and the by default android border became solid
//so that time tint color through we make the different color
//ex.we make one icon and some situation icon color will be change so that situation
//we use tint color otherwise that color icon always be one direction
const TabNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {

      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-search" size={32} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: '#da371b',
        labelStyle: {
          fontSize: 11,
        },
      },
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-save" size={32} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: '#da371b',
        labelStyle: {
          fontSize: 11,
        },
      },
    }
  },
  Trips: {
    screen: Trip,
    navigationOptions: {
      tabBarLabel: 'Trips',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-planet" size={32} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: '#da371b',
        inactiveTintColor: 'grey',
        style: {
          shadowOpacity: .5,
          elevation: 5,
        },
        labelStyle: {
          fontSize: 11,
        },
      },
    },

  },
  Navigation: {
    //screen give the component show which is you import that
    screen: Navigation,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-person" size={32} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: '#da371b',
        labelStyle: {
          fontSize: 11,
        },
      },
    },

  }
});
export default createAppContainer(TabNavigator);
