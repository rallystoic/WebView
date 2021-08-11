/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
    Button
} from 'react-native';
import Video from 'react-native-video';
import GetData  from './getData';
import { InAppBrowser } from 'react-native-inappbrowser-reborn'


const App = () => {

  async function  openLink() {
    try {
      const url = 'https://demo.elastic.co/app/dashboards#/view/welcome_dashboard?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:\'Main%20landing%20page%20for%20Elastic%20Demo%20Gallery;%20a%20good%20reset%20point%20if%20you%20get%20lost.\',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:\'\'),tags:!(),timeRestore:!f,title:\'Welcome%20Dashboard\',viewMode:view)'
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right'
          },
          headers: {
            'my-custom-header': 'my custom header value'
          }
        })
        Alert.alert(JSON.stringify(result))
      }
      else Linking.openURL(url)
    } catch (error) {
      Alert.alert(error.message)
    }
  }





     return (
         <View>
         <Text>Hello World!</Text>
         <Button
           onPress={openLink}
           title="kibana"
           color="#841584"
           accessibilityLabel="click to login"
         />
         <Button
           onPress={openLink}
           title="zoomcharts"
           color="#841584"
           accessibilityLabel="click to login"
         />
         
         </View>
           )
}


// const App = () => {
//      return (
//          <View>
// <Video
// source={{ uri: 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8' }}
// style={{ width: 300, height: 300 }}
// controls={true}
//  />
//          </View>
//            )
// }

var styles = StyleSheet.create({
      backgroundVideo: {
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
});


export default App;
