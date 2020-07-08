import React from 'react';
import { ScrollView, Dimensions, View ,Text} from 'react-native';
import HTML from 'react-native-render-html';

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
      <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
   <hr> 
   <bluecircle> name</bluecircle>
   
   
   <h1>This HTML snippet is now rendered with native components !</h1>
   <h2>Enjoy a webview-free and blazing fast application</h2>
     <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
   <em style="textAlign: center;">Look at how happy this native cat is</em>
  <hr> 
  <bluecircle> name</bluecircle>

`;
renderers: {
  hr: () => <View style={{ width: '100%', height: 1, backgroundColor: 'red' }} />
  bluecircle: () => <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'blue' }} />
}
////////////////

let story = '<p> smallcaps  </p><h1> heading  </h1><div> Tecorb </div><p> stuff </p>';
let story1= story.replace(/<(p|span|div|h1)>([^<]*)<\/(p|span|div|h1)>/ig,
    (fullmatch, startag,content,endtag) =>  `${content}` )

///////////////

export default class App extends React.Component {
    render () {
        return (
          <View  style={{ flex: 1 }}>
            <ScrollView>
              
        <Text style={{fontSize:25}}> {story1} </Text>

                {/* <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} /> */}

            </ScrollView>
            </View>
        );
    }
}

// let story = '<p>smallcaps</p><h1>heading</h1><div>div</div><p>stuff</p>';
// let story1= story.replace(/<(p|span|div|h1)>([^<]*)<\/(p|span|div|h1)>/ig,
//     (fullmatch, startag,content,endtag) =>  `<${startag}>${content.toUpperCase()}</${endtag}>` )