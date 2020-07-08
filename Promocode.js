import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Animated, Dimensions,ScrollView,
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
      set:''
      // currentIndex: 0
    }
    this.position = new Animated.ValueXY()

  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,

      // onPanResponderMove: (evt, gestureState) => {
      //   this.position.setValue({ x: 0, y: gestureState.dy })
      // },
      //   onPanResponderRelease: (evt, gestureState) => {
      //     // if(-gestureState.dy>50 && -gestureState.vy>0.7)
      //     if (gestureState.dy > 0 && gestureState.vy >0.5) {
      //       Animated.timing(this.position, {
      //         toValue: ({ x: 0, y: SCREEN_HEIGHT }),
      //         duration: 400

      //       }).start()
      //     }
      //     else{
      //       Animated.spring(this.position,{
      //         toValue:({x:0,y:0})
      //       }).start()
      //     }

      // }
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

  presses = () => {



    if (this.state.pres1 == true) {
     this.setState({set:'1'})
    }
     else if (this.state.pres2 = true) {
      this.setState({set:'2'})
    }
    else {
      this.setState({set:'3'})
    }



  }

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
            <Text style={{ textAlign: 'center', fontSize: 30 ,marginBottom:10,marginTop:10,
            color:'#804000',fontWeight:'bold'}}>This is Promocode</Text>
           <ScrollView>
            {this.state.pres1 == false ?

              <TouchableOpacity onPress={() => this.setState({ pres1: true,
               pres2: false, pres3: false,set:'CNFDEVKTY150' })}>
                <View style={[styles.Touch]}>
                  <Text style={{ fontSize: 18, marginTop: 20,  marginLeft: 10 }}>
                    COUPON CODE RS.150 OFF</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.setState({ pres1: false })}>
                <View style={styles.Touch1}>
                  <Text style={{
                    fontSize: 18, marginTop: 20, marginLeft: 10,
                    color: 'red'
                  }}>COUPON CODE RS.150 OFF</Text>
                  <Image source={require('./ICON/correct.png')} style={styles.circle} />
                </View>
              </TouchableOpacity>
            }

            {this.state.pres2 == false ?
              <TouchableOpacity onPress={() => this.setState({ pres2: true,
               pres1: false, pres3: false,set:'CNFDEVKTY100' })}>
                <View style={styles.Touch}>
                  <Text style={{ fontSize: 18, marginTop: 20,  marginLeft: 10 }}>
                    COUPON CODE RS.100 OFF</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.setState({ pres2: false })}>
                <View style={styles.Touch1}>
                  <Text style={{
                    fontSize: 18, marginTop: 20, marginLeft: 10,
                    color: 'red'
                  }}>COUPON CODE RS.100 OFF</Text>
                  <Image source={require('./ICON/correct.png')} style={styles.circle} />
                </View>
              </TouchableOpacity>
            }

            {this.state.pres3 == false ?
              <TouchableOpacity onPress={() => this.setState({ pres3: true,
               pres1: false, pres2: false,set:'CNFDEVKTY50' })}>
                <View style={styles.Touch}>
                  <Text style={{ fontSize: 18, marginTop: 20,  marginLeft: 10 }}>
                    COUPON CODE RS.50 OFF</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.setState({ pres3: false })}>
                <View style={styles.Touch1}>
                  <Text style={{
                    fontSize: 18, marginTop: 20, marginLeft: 10,
                    color: 'red'
                  }}>COUPON CODE RS.50 OFF</Text>
                  <Image source={require('./ICON/correct.png')} style={styles.circle} />
                </View>
              </TouchableOpacity>
            }




         </ScrollView>
            <View style={{ width: 370, height: 40, backgroundColor: 'red', marginTop: 20,
             borderRadius: 10, marginLeft: 20 }}>
              <TouchableOpacity onPress={() => this.setState({ showMe: false })}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', marginTop: 5 }} > Done </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
          {/* </View> */}


        </Modal>

        {/* <View style={{ flex: 1 }}> */}
       

          <View style={{ borderWidth: 0.7, height: 50, backgroundColor: 'lightgrey' ,marginTop:50,
          flexDirection:'row',justifyContent:'space-between'}}>
           <View style={styles.button}>
            <TouchableOpacity onPress={() => this.setState({ showMe: true })} style={{height:25,width:190}}>
              <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white',marginLeft:7 }}>Your promocode </Text>
           </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.setState({ set:"" })} style={{height:25,width:60}}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red',marginTop:15 }}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderWidth: 0.7, height: 50, marginTop: 1 }}>
          <Text style={{ fontSize: 35, marginTop: 2, }}> {this.state.set}</Text>
          </View>


       

        {/* </View> */}

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
    backgroundColor: 'white',
    width: '100%',
    height: 370,
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
    borderColor: 'white'
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
  },
  button:{
    width:190,
    height:35,
    backgroundColor:'#1a1aff',
    margin:6,
    borderRadius:10
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