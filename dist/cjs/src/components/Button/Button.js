"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ label, onPress, }) => {
    return (react_1.default.createElement(react_native_1.Pressable, { style: style.baseButton, onPress: onPress },
        react_1.default.createElement(react_native_1.Text, null, label)));
};
exports.default = Button;
const style = react_native_1.StyleSheet.create({
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