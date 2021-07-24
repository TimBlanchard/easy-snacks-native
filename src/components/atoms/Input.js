import React from 'react';
import {TextInput} from "react-native";
import styled from "styled-components/native";
import {border_radius, color} from "../../styles/const";

export default function Input(props) {

    return (
        <TxtInput {...props}
        />
    )
}

const TxtInput = styled.TextInput`
  border: ${props => props.secondary ? "none" : `1px solid ${color.primary}`};
  border-radius: ${border_radius[1]};
  width: 100%;
`;



