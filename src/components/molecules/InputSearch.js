import React from 'react';
import {View} from "react-native";
import Input from "../atoms/Input.js";

export default function InputSearch() {

    return (
        <View>
            <Input
                placeholder="Nom d'établissement, de ville..."
            />
        </View>
    )
}
