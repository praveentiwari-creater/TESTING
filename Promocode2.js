import React from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Animated, Dimensions, ScrollView, Clipboard, Button,
  PanResponder, Modal, Alert
} from 'react-native';

console.disableYellowBox = true;
export default class Promocode2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false,
      set: '',
      borderwidth: null,
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

          <Animated.View style={styles.modalView} >
            <Text style={{
              textAlign: 'center', fontSize: 30, marginBottom: 10, marginTop: 10,
              color: '#804000', fontWeight: 'bold'
            }}>This is Promocode</Text>
            <ScrollView>

              <View>
                <Text style={{ fontSize: 18, marginTop: 20, marginLeft: 10, fontWeight: "bold" }}>
                  COUPON CODE RS.150 OFF</Text>
                <View style={styles.Touch}>
                  <Text>Within this you will get Rs.150 caseback</Text>
                  <TouchableOpacity onPress={() => this.setState({ set: 'CNFDEVKTY150', borderwidth: 2 })}>
                    <View style={styles.box}>
                      <Text style={{
                        fontSize: 18, fontWeight: "bold", color: '#3399ff',
                        marginLeft: 15, marginTop: 5
                      }}>Apply</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>
                  COUPON CODE RS.100 OFF
                   </Text>
                <View style={styles.Touch}>
                  <Text>Within this you will get Rs.100 caseback</Text>
                  <TouchableOpacity onPress={() => this.setState({ set: 'CNFDEVKTY100', borderwidth: 2 })}>
                    <View style={styles.box}>
                      <Text style={{
                        fontSize: 18, fontWeight: "bold", color: '#3399ff',
                        marginLeft: 15, marginTop: 5
                      }}>Apply</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, marginTop: 20, marginLeft: 10, fontWeight: "bold" }}>
                  COUPON CODE RS.50 OFF</Text>
                <View style={styles.Touch}>
                  <Text>Within this you will get Rs.50 caseback</Text>
                  <TouchableOpacity onPress={() => this.setState({ set: 'CNFDEVKTY50', borderwidth: 2 })}>
                    <View style={styles.box}>
                      <Text style={{
                        fontSize: 18, fontWeight: "bold", color: '#3399ff',
                        marginLeft: 15, marginTop: 5
                      }}>Apply</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, marginTop: 20, marginLeft: 10, fontWeight: "bold" }}>
                  COUPON CODE RS.20 OFF</Text>
                <View style={styles.Touch}>
                  <Text>Within this you will get Rs.20 caseback</Text>
                  <TouchableOpacity onPress={() => this.setState({ set: 'CNFDEVKTY20', borderwidth: 2 })}>
                    <View style={styles.box}>
                      <Text style={{
                        fontSize: 18, fontWeight: "bold", color: '#3399ff',
                        marginLeft: 15, marginTop: 5
                      }}>Apply</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, marginTop: 20, marginLeft: 10, fontWeight: "bold" }}>
                  COUPON CODE RS.10 OFF</Text>
                <View style={styles.Touch}>
                  <Text>Within this you will get Rs.10 caseback</Text>
                  <TouchableOpacity onPress={() => this.setState({ set: 'CNFDEVKTY10', borderwidth: 2 })}>
                    <View style={styles.box}>
                      <Text style={{
                        fontSize: 18, fontWeight: "bold", color: '#3399ff',
                        marginLeft: 15, marginTop: 5
                      }}>Apply</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>

            <View style={{
              width: 370, height: 40, backgroundColor: 'red', marginTop: 20, borderRadius: 10, marginLeft: 20
            }}>
              <TouchableOpacity onPress={() => this.setState({ showMe: false })}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', marginTop: 5 }} > Done </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

        </Modal>

        <View style={{
          borderWidth: 0.7, height: 50, backgroundColor: 'lightgrey', marginTop: 50,
          flexDirection: 'row', justifyContent: 'space-between'
        }}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => this.setState({ showMe: true })} style={{ height: 25, width: 190 }}>
              <Text style={{ fontSize: 23, fontWeight: 'bold', color: 'white', marginLeft: 7 }}>Your promocode </Text>
          
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.setState({ set: "", borderwidth: null })}
            style={{ height: 25, width: 60 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', marginTop: 15 }}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 50, marginTop: 1 }}>
          <View style={{ borderWidth: this.state.borderwidth, borderRadius: 6, width: 300, height: 60, borderStyle: 'dashed' }}>
            <Text style={{ fontSize: 35, marginTop: 2, }}> {this.state.set}</Text>
          </View>
        </View>

      </View>
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
    borderBottomWidth: .5,
    height: 60,
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  box: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    marginRight: 10,
    borderColor: '#3399ff'
  },
  button: {
    width: 190,
    height: 35,
    backgroundColor: '#1a1aff',
    margin: 6,
    borderRadius: 10,

  }
});
