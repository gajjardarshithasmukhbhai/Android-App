import React, { Component } from 'react';
import { Image, View, ImageBackground, Modal, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const window = Dimensions.get('window');
export default class Darshit extends React.Component {
  constructor() {
    super();
    this.state = {
      Header: true,
    }
  }
  render() {
    return (
      <View>
        <Modal visible={this.state.Header} animationType="fade" onRequestClose={() => { console.log("helllo") }}>
          <View style={style.header}>
            <Text style={style.Guess}>Guess the Number</Text>
          </View>
          <View style={style.gameTextView}>
            <Text style={style.gameText}>Start New Game</Text>
          </View>
          <View style={style.card}>

            <View>
              <ImageBackground source={require('./assets/images/yoyo.png')} style={style.image} imageStyle=
                {{ borderRadius: 11, opacity: 0.7 }}>
                <View style={style.overlay}></View>
                <Text style={[style.textStyle, { paddingTop: 6 }]} >Select a Number</Text>
                <TextInput style={style.textInput} keyboardType='phone-pad' />
              </ImageBackground>
            </View>

          </View>

        </Modal>
      </View>
    )
  }
}
//modal ma jyare visiblity apo tyare te modal new te start thase
//so evu nai ke man fave tya modal tya banavi devu :-)
const style = StyleSheet.create({
  header: {
    elevation: 5,
    width: window.width,
    height: window.height / 6 - 48,
    backgroundColor: "#e91e63"
  },
  textStyle: {
    marginTop: 10,
    fontSize: 18,
    color: "#ff5722",
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textInput: {
    width: 90,
    alignSelf: "center",
    borderBottomWidth: 2,
    borderColor: "#e91e63",
    fontSize: 16,
    paddingTop: 0
  },
  Guess: {
    fontSize: 22,
    marginLeft: 20,
    color: "white",
    marginTop: 15,
    fontWeight: '600'
  },
  overlay: {
    backgroundColor: 'transparent',
    opacity: 0.6
  },
  gameText: {
    paddingTop: 10,
    fontSize: 34,
    fontFamily: "Cookie-Regular",
    color: "#e91e63",
  },
  gameTextView: {
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    elevation: 7,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    width: window.width - 30,
    height: window.height / 2 + 20,
    borderRadius: 11,
    marginTop: 20,
  },
  image: {
    width: window.width - 30,
    height: window.height / 2 - 30,
    resizeMode: "cover",
  }
})