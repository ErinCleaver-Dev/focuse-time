import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/Focus'
import { Colors, alignment } from './src/utils/formating'
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);


  return (
    <View style={styles.container}>
      {
      focusSubject ? 
      <Text> Here is where the timer will be</Text> : 
      <Text>
        <Focus addSubject={setFocusSubject}/>
      </Text>
      } 
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: alignment.center,
    backgroundColor: Colors.darkBlue,
  },
});
