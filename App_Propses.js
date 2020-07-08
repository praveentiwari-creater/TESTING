import React,{useState,useEffect} from 'react';
import {Text,View,Button} from 'react-native';
import Propses from './Propses';



function App(){
const [data,setData]=useState(0);
useEffect(()=>{

  console.log(data)
  setData(5)
  return()=>{
    setData(11)
  }
  },[])
        return(
            <View style={{backgroundColor:'green'}}>
              <Propses/>
  <Text>ppppp</Text>
              <Text>aaaaa</Text>
        <Text style={{fontSize:60}}>{data}</Text>
         
           <Text>aaaaa</Text>
           <Button title='done' onPress={()=>setData(9)}/>
            </View>
        )
    
}
export default App;