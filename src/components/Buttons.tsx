import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Platform } from "react-native";

export function MediumButton({ text , onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={mediumstyles.button}>
                <Text style={mediumstyles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
const mediumstyles = StyleSheet.create({
    button: {
        borderRadius: 20,
        borderWidth: 1,  
        borderColor: "#757575",
        paddingTop: 6,
        paddingBottom: 6,
        width: "66%",
        height: "47%",
        alignSelf:'center',
        backgroundColor: '#2020B6',
        ...Platform.select({
            ios: {
              shadowColor: '#000000',
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            },})
    },
    buttonText: {
        color: '#F9F4F5',
        fontSize: 36,
        fontWeight: "500",
        textAlign: "center",
        paddingVertical: "2%",

    }
})
export function SmallButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={smallstyles.button}>
                <Text style={smallstyles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
const smallstyles = StyleSheet.create({
    button: {
        borderRadius: 14,
        borderWidth: 1,  
        borderColor: "#757575",
        paddingTop: 6,
        paddingBottom: 6,
        width: "30%",
        height: "45%",
        backgroundColor: '#2020B6',
        ...Platform.select({
            ios: {
              shadowColor: '#000000',
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            },})
    },
    buttonText: {
        color: '#F9F4F5',
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        paddingVertical: "5%",
    }
})
export function LargeButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={largestyles.button}>
                <Text style={largestyles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
const largestyles = StyleSheet.create({
    button: {
        borderRadius: 15,
        borderWidth: 1,  
        borderColor: "#757575",
        paddingTop: 6,
        paddingBottom: 6,
        width: "83%",
        height: "55%" ,
        backgroundColor: '#2020B6',
        alignSelf: 'center',
        
        ...Platform.select({
            ios: {
              shadowColor: '#000000',
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            },})
    },
    buttonText: {
        color: '#F9F4F5',
        fontSize: 50,
        fontWeight: "500",
        textAlign: 'center',
        paddingVertical: "3%",
    }
})