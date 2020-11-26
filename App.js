import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,0,216)');

  const changeBG = () => {
    const color = `rgb(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    setRandomColor(color);
  };

  const resetBG = () => {
    setRandomColor('rgb(0,0,0)');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBG}>
          <Text style={[styles.text, {marginVertical: 20}]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    backgroundColor: '#BB2123',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    textTransform: 'uppercase',
  },
});
