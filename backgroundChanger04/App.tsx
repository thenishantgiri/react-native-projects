import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [bgColor, setBgColor] = useState('#586c5c');

  const changeBackground = () => {
    const hexValues = '0123456789ABCDEF';
    let hex = '#';

    for (let i = 0; i < 6; i++) {
      hex += hexValues[Math.floor(Math.random() * 16)];
    }
    setBgColor(hex);
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity onPress={changeBackground}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    backgroundColor: 'steelblue',
    borderRadius: 150 / 2,
  },
  btnText: {
    fontSize: 24,
    color: '#ffffff',
  },
});
