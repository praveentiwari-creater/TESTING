import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Animated, Dimensions,
  PanResponder, Modal
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

console.disableYellowBox = true;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: true,
      pres1: false,
      pres2: false,
      pres3: false,

     // currentIndex: 0
    }
    this.position = new Animated.ValueXY()

  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: 0, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {
        // if(-gestureState.dy>50 && -gestureState.vy>0.7)
        if (gestureState.dy > 0 && gestureState.vy >0.5) {
          Animated.timing(this.position, {
            toValue: ({ x: 0, y: SCREEN_HEIGHT }),
            duration: 400

          }).start()
        }
        else{
          Animated.spring(this.position,{
            toValue:({x:0,y:0})
          }).start()
        }
     
    }
  })
 }
  // position = new Animated.ValueXY();
  // PanResponder = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onPanResponderMove: (e, gestureState) => {
  //     const newPosition = { x: gestureState.dx, y: gestureState.dy }
  //     this.position.setValue(newPosition);
  //   }
  // });
  render() {

    return (
      <View style={{ flex: 1 }} >



        <Modal animated
          animationType="fade"
          transparent
          visible={this.state.showMe}
          onRequestClose={() => console.warn('this is close request')}>


          {/* <View style={styles.modalView}> */}
          <Animated.View style={[this.position.getLayout(), styles.modalView]} {...this.PanResponder.panHandlers} >
            <Text style={{ textAlign: 'center' }}>  Hey , modal let see now</Text>

            {this.state.pres1 == false ?
              <TouchableOpacity onPress={() => this.setState({ pres1: true })}>
                <View style={styles.Touch1}>
                  <Text style={{ fontSize: 15, marginTop: 25, fontWeight: 'bold', marginLeft: 10, color: 'red' }}> History</Text>
                  <Image source={require('./ICON/correct.png')} style={styles.circle} />
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.setState({ pres1: false })}>
                <View style={styles.Touch}>
                  <Text style={{ fontSize: 15, marginTop: 25, fontWeight: 'bold', marginLeft: 10 }}> History</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
            }

            {this.state.pres2 == false ?
              <TouchableOpacity onPress={() => this.setState({ pres2: true })}>
                <View style={styles.Touch}>
                  <Text style={{ fontSize: 15, marginTop: 25, fontWeight: 'bold', marginLeft: 10 }}> History</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.setState({ pres2: false })}>
                <View style={styles.Touch1}>
                  <Text style={{ fontSize: 15, marginTop: 25, fontWeight: 'bold', marginLeft: 10, color: 'red' }}> History</Text>
                  <Image source={require('./ICON/correct.png')} style={styles.circle} />
                </View>
              </TouchableOpacity>
            }

            {this.state.pres3 == false ?
              <TouchableOpacity onPress={() => this.setState({ pres3: true })}>
                <View style={styles.Touch}>
                  <Text style={{ fontSize: 15, marginTop: 25, fontWeight: 'bold', marginLeft: 10 }}> History</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.setState({ pres3: false })}>
                <View style={styles.Touch1}>
                  <Text style={{ fontSize: 15, marginTop: 25, fontWeight: 'bold', marginLeft: 10, color: 'red' }}> History</Text>
                  <Image source={require('./ICON/correct.png')} style={styles.circle} />
                </View>
              </TouchableOpacity>
            }

            <View style={{ width: 370, height: 40, backgroundColor: 'red', marginTop: 50, borderRadius: 10, marginLeft: 20 }}>
              <TouchableOpacity onPress={() => this.setState({ showMe: false, pres2: false, pres3: false })}>

                <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', marginTop: 5 }} > Done </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
          {/* </View> */}


        </Modal>

        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={{ borderWidth: 0.7, height: 40, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, marginTop: 8, fontWeight: 'bold' }}> History</Text>
          </View>

          <View style={{ borderWidth: 0.7, height: 40, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, marginTop: 8, fontWeight: 'bold' }}> History</Text>
          </View>

          <View style={{ borderWidth: 0.7, height: 50, backgroundColor: 'white', marginTop: 40 }}>
            <Text style={{ fontSize: 15, marginTop: 8, fontWeight: 'bold' }}> History</Text>
          </View>

          <View style={{ borderWidth: 0.7, height: 50, backgroundColor: 'white' }}>
            <TouchableOpacity onPress={() => this.setState({ showMe: true })}>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}> Open modal </Text>
              <Text > Open modal </Text>
            </TouchableOpacity>
          </View>


          <View style={{ borderWidth: 0.7, height: 40, backgroundColor: 'white', marginTop: 50 }}>
            <Text style={{ fontSize: 15, marginTop: 8, fontWeight: 'bold' }}> History</Text>
          </View>

          <View style={{ borderWidth: 0.7, height: 40, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, marginTop: 8, fontWeight: 'bold' }}> History</Text>
          </View>

        </View>

      </View>

      //  <View>
      // <Animated.View style={this.position.getLayout()}
      //           {...this.PanResponder.panHandlers}
      //         >
      //   <Text>
      //     nameeee
      //   </Text>
      //   </Animated.View>
      // </View> 

    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(330,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'rgba(33,393,203,332)',
    width: '100%',
    height: 400,
    marginTop: 270,
    color: 'green',
    // position: 'absolute',
    // bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20

  },
  CloseText: {
    backgroundColor: '#333',
    color: '#bbb',
    padding: 5,
    margin: 20
  },
  Touch: {
    borderWidth: 2,
    width: 370,
    height: 70,
    marginLeft: 22,
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'rgba(33,393,203,332)'
  },
  Touch1: {
    borderWidth: 2,
    width: 370,
    height: 70,
    marginLeft: 22,
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 10,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  circle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    margin: 25
  }

});

//        if(-gestureState.dy>50 && -gestureState.vy>0.7)
    //       // if (gestureState.dy > 0 && gestureState.vy > 2)
    //        {
    // Animated.timing(this.position,{
    //   toValue:({x:0,y:-SCREEN_HEIGHT}),
    //   duration:100

    // }).start()

    //        }