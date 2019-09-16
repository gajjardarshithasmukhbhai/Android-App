import React from 'react';
import {
  CameraRoll,
  Alert,
  StyleSheet, Image, ImageBackground,
  Dimensions, Text, Animated,
  TouchableOpacity, View, TextInput, ToastAndroid, Vibration, ScrollView
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Navigation from './Navigator/Navigation';
import Trip from './Navigator/Trips.js';
import Saved from './Navigator/saved';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RNCamera, FaceDetector } from 'react-native-camera';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "grey",
      photos: []
    }
    this.color = this.color.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.barcodeRecognized = this.barcodeRecognized.bind(this);
  }

  color = () => {

    this.setState({
      color: "red"
    })
  }
  barcodeRecognized = ({ barcodes }) => {
    barcodes.forEach(barcode => console.warn(barcode.data))
  };
  changeColor = () => {
    if (this.state.color === "red") {
      console.log("hello");
      return 1;
      // kem cho
    }
    else {
      console.log("hello world");

      return 2;
    }
  }
  render() {
    return (
      <ScrollView style={style.header} showsVerticalScrollIndicator={false}>
        <View >
          <View >
            {console.log("gaspar")}
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={{
                flex: 1,
                width: '100%',
                height: 120
              }}
              onGoogleVisionBarcodesDetected={this.barcodeRecognized}
            >
            </RNCamera>


          </View>
          <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={style.Task}>
                <View style={style.taskname}>
                  <Text style={{ fontSize: 30, color: "grey", fontFamily: 'Cookie-Regular' }}>Monday</Text>
                </View>
              </View>
              <View style={style.Task}>

                <View style={style.taskname}>
                  <Text style={{ fontSize: 30, color: "grey", fontFamily: 'Cookie-Regular' }}>Tuesday</Text>
                </View>
              </View>
              <View style={style.Task}>
                <View style={style.taskname}>
                  <Text style={{ fontSize: 28, color: "grey", fontFamily: 'Cookie-Regular' }}>Wendesday</Text>
                </View>
              </View>
              <View style={style.Task}>
                <View style={style.taskname}>
                  <Text style={{ fontSize: 30, color: "grey", fontFamily: 'Cookie-Regular' }}>Thursday</Text>
                </View>
              </View>
              <View style={style.Task}>
                <View style={style.taskname}>
                  <Text style={{ fontSize: 30, color: "grey", fontFamily: 'Cookie-Regular' }}>Friday</Text>
                </View>
              </View>
              <View style={style.Task}>
                <View style={style.taskname}>
                  <Text style={{ fontSize: 30, color: "grey", fontFamily: 'Cookie-Regular' }}>Saturday</Text>
                </View>
              </View>
              <View style={style.Task}>
                <View style={style.taskname}>
                  <Text style={{ fontSize: 30, color: "grey", fontFamily: 'Cookie-Regular' }}>Sunday</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View>
          <View style={style.box}>
            <TouchableOpacity activeOpacity={0.9} onPress={this.color}>
              <View style={style.shadow1}>
                <IconAnt name="API" style={{ color: `${this.state.color}`, fontSize: 40 }} />
                <Text style={[(this.changeColor() == 1) ? style.color5 : style.color2, style.label]}>Current Task</Text>
              </View>
            </TouchableOpacity>
            <View style={style.shadow1}>
              <IconFont name="newspaper-o" style={{ color: "grey", fontSize: 40 }} />
              <Text style={[(this.changeColor() == 1) ? style.color3 : style.color2, style.label]}>News Feed</Text>

            </View>

          </View>
          <View style={style.box2}>
            <View style={style.shadow1}>
              <IconAnt name="Trophy" style={{ color: "grey", fontSize: 40 }} />
              <Text style={[(this.changeColor() == 1) ? style.color4 : style.color2, style.label]}>Reward</Text>

            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={this.changeColor}>
              <View style={style.shadow1}>
                <IconAnt name="piechart" style={{ color: "grey", fontSize: 40, }} />
                <Text style={[(this.changeColor() == 1) ? style.color1 : style.color2, style.label]}>Task Chart</Text>

              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    )
  }
}
const style = StyleSheet.create({
  color1: {
    color: "#8000ff"
  },
  color4: {
    color: "#ff8000"
  },
  color3: {
    color: "#0000ff"
  },
  color5: {
    color: "#2ea5be"
  },
  color2: {
    color: "grey"
  },
  header: {
    height: height / 4,
  },
  weatherText: {
    fontSize: 45,
    color: "white",
    fontWeight: 'bold'
  },
  weather: {
    marginLeft: width - 140,
    marginVertical: -170,
  },
  label: {
    fontSize: 20,
    marginTop: 20,
  },
  Image: {
    resizeMode: "cover",
    width: width,
    height: height / 2 - 60,

  },
  Task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 30,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box2: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 20,
  },
  shadow1: {
    width: width / 2 - 30,
    height: height / 4,
    elevation: 6,
    backgroundColor: "white",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a851ff"

  },

  taskname: {
    width: 110,
    height: 40,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    color: "white",
    padding: 20
  },
  headerText1: {
    color: "white",
    fontSize: 35,
    fontFamily: "Octicons"
  },
  headerText2: {
    color: "white",
    fontSize: 35,
    marginTop: 20,
  },
  headerView: {
    paddingLeft: 30,
    paddingTop: 40

  }
})

export default Explore;