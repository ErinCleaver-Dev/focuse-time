import React from 'react';
import {View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../components/RoundedButton'
export const Focus = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleComponent}>
                <Text style={styles.title}> What would you like to focus on? </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textBox}/>
                    <RoundedButton size={50} title={"+"}/>
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
    inputContainer: {
        paddingTop: 20,
        flexDirection: 'row'
    },
    textBox : {
        flex: 1,
        borderRadius: 10,
        marginRight: 20
    }
})