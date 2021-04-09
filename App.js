import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus'
import { Timer } from './src/features/timer/Timer'
import { colors, alignment, spacing } from './src/utils/formatting'
export default function App() {
  const [focusSubject, setFocusSubject] = useState("gardening");


  return (
    <View style={styles.container}>
      {
      focusSubject ? 
      <Timer focusSubject={focusSubject}/> 
      : 
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
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    alignItems: alignment.center,
    backgroundColor: colors.darkBlue,
  },
});
