import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { fontSize, colors, spacing, alignment} from '../../utils/formatting'
export const  Timer = ({focusSubject}) => {
    return (
    <View style={styles.container}>
        <View styles={styles.information}>
            <Text style={styles.title}>Focusing on: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
        </View>
    </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    title: {
        color: colors.white,
        textAlign: alignment.center,
    },
    task: {
        color: colors.white,
        textAlign: alignment.center,
        fontWeight: 'bold',
    },
    information: {
        paddingTop: spacing.xxl,
    }

})
