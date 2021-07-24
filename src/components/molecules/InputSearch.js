import React from 'react';
import {View} from "react-native";
import Input from "../atoms/Input.js";
import styled from "styled-components/native";
import {border_radius, color} from "../../styles/const";

export default function InputSearch(props) {

    return (
        <Container>
            <Input
                {...props}
            />
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
`;
