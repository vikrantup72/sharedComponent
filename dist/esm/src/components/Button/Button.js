import React from "react";
import { StyleSheet, Text, Pressable, } from "react-native";
const Button = ({ label, onPress, }) => {
    return (React.createElement(Pressable, { style: style.baseButton, onPress: onPress },
        React.createElement(Text, null, label)));
};
export default Button;
const style = StyleSheet.create({
    baseButton: {
        height: 52,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        backgroundColor: '#efefef',
        padding: 16
    },
});
//# sourceMappingURL=Button.js.map