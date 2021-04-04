import React from 'react';
import {View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

export const Focus = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleComponent}>
                <Text style={styles.title}> What would you like to focus on? </Text>
                <View style={styles.textInput}>
                    <TextInput />
                </View>
            </View>
        </View>
    )
}

export default Focus

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleComponent: {
        flex: 0.5,
        padding: 16,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    },
    textInput: {
        paddingTop: 20
    }
})