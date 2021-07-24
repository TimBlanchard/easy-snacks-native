import React from 'react';
import {TextInput} from "react-native";

export default function Input({placeholder}) {

    return (
        <TextInput
            className="input"
            placeholder={placeholder}
        />
    )
}
