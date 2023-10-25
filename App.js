import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import {image} from "./assets/background.png"

// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function App() {
  return (
    <View style={styles.container}>
       {/* <View style={styles.overlayView} /> */}
    <ImageBackground blurRadius={5} source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity:0.7,
    
  },
//   overlayView: {
//     height: "100%",
//     width: "100%",
//     position: 'absolute',
//     opacity:0.2,
//     backgroundColor: 'rgba(0, 204, 0, 0.5)',

// }

});
