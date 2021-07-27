import React from 'react';
import {StyleSheet, Text} from "react-native";
import styled from "styled-components/native";
import {border_radius, box_shadow, color, letterSpacing, fontSize, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";

export default function TextWithValue({text, value}) {

    const Container = styled.View`
      padding: ${spacing[3]};
`;
    const TextValue = styled.Text`
      padding: ${spacing[3]};
`;
    const TextCategory = styled.Text`
      padding: ${spacing[3]};
`;


    return (
        <Container>
            <TextValue>
                {value}
            </TextValue>
            <TextCategory style={globalStyle.subtitle}>
                {text}
            </TextCategory>
        </Container>
    )
}
