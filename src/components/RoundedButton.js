import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native'
import {colors, alignment} from '../utils/formatting'


export const RoundedButton = ({  style = { },
    textStyle = {}, size = 125, ...props }) => 
{
    return (
        <TouchableOpacity style={[
            styles(size).radius, 
            style
            ]} 
            onPress={props.onPress}>
            <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )   


}

export default RoundedButton

const styles = (size) => StyleSheet.create({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: alignment.center,
        justifyContent: alignment.center,
        borderColor: colors.white,
        borderWidth: 2
    },
    text: {
        color: Colors.white,
        fontSize: size/3
    }
})
