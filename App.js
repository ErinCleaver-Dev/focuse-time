import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);


  return (
    <View style={styles.container}>
      <Text>{
      focusSubject ? 
      <Text> Here is where the timer will be</Text> : 
      <Text>
        Bulding input for subject
      </Text>
      }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
});
