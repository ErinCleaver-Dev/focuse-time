import React, {useState} from 'react';
import {View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../../components/RoundedButton'
import {fontSize, spacing, Colors, alignment} from '../../utils/formatting'

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
        padding: spacing.md,
        justifyContent: alignment.center
    },
    title: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: fontSize.lg
    },
    inputContainer: {
        paddingTop: spacing.md,
        flexDirection: 'row',
        alignItems: alignment.center
    },
    textBox : {
        flex: 1,
        borderRadius: 10,
        marginRight: spacing.md
    }
})