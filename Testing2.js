import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Animated, Dimensions,
  PanResponder, Modal
} from 'react-native';
//import ICON from './ICON';
//import Modal from 'react-native-modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: true,
      pres1: false,
      pres2: false,
      pres3: false,
      
      currentIndex: 0
    },

      this.position = new Animated.ValueXY()
  };

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {
        //
      }
    })
  }
  render() {

    return (

      <View style={{ flex: 1 }} >


        <Animated.View style={this.position.getLayout()}
          {...this.PanResponder.panHandlers}
        >
          <Modal animated
            animationType="fade"
            transparent
            visible={this.state.showMe}
            onRequestClose={() => console.warn('this is close request')}>

            <View style={styles.modalView}>
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

              <TouchableOpacity onPress={() => this.setState({ showMe: false, pres2: false, pres3: false })}>
                <View style={{ width: 370, height: 40, backgroundColor: 'red', marginTop: 50, borderRadius: 20, marginLeft: 20 }}>
                  <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', marginTop: 5 }} > Done </Text>
                </View>
              </TouchableOpacity>
            </View>

          </Modal>
        </Animated.View>




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

    color: 'green',
    position: 'absolute',
    bottom: 0,
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
    justifyContent: 'space-between'
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