import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

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
        width: 543,
        height: 75,
        backgroundColor: '#2020B6',
        elevation: 500,
        // TODO: add drop-shadow for ios devices
        // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    },
    buttonText: {
        color: '#F9F4F5',
        fontSize: 36,
        fontWeight: "500",
        textAlign: "center",
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
        width: 245,
        height: 65,
        backgroundColor: '#2020B6',
        // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    },
    buttonText: {
        color: '#F9F4F5',
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
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
        width: 675,
        height: 90,
        backgroundColor: '#2020B6',
        // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    },
    buttonText: {
        color: '#F9F4F5',
        fontSize: 50,
        fontWeight: "500",
        textAlign: "center",
    }
})