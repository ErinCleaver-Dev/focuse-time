import React, {useState} from 'react';
import {View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../components/RoundedButton'
export const Focus = ( { addSubject } ) => {
    const [tempItem, setTempItem] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.titleComponent}>
                <Text style={styles.title}> What would you like to focus on? </Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.textBox}
                    onSubmitEditing={
                        ({nativeEvent}) =>{
                        setTempItem(nativeEvent.text)
                        
                    }}
                    />
                    <RoundedButton 
                    size={50} 
                    title={"+"}
                    onPress={() => {addSubject(tempItem)}}
                    />
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
        flexDirection: 'row',
        alignItems: 'center'
    },
    textBox : {
        flex: 1,
        borderRadius: 10,
        marginRight: 20
    }
})