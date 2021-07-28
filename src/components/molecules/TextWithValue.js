import React from 'react';
import {StyleSheet, Text} from "react-native";
import styled from "styled-components/native";
import {border_radius, box_shadow, color,lineHeight, letterSpacing, fontSize, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";

export default function TextWithValue({text, value}) {

    const Container = styled.View`
      padding: ${spacing[1]};
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
`;
    const TextValue = styled.Text`
      padding: 0 ${spacing[3]} 0 0;
      line-height: ${lineHeight[2]};
`;
    const TextCategory = styled.Text`
      padding: 0;
      color: ${neutral.black_op_80};
      font-size: ${fontSize[5]};
      letter-spacing: ${letterSpacing.neg_3};
      font-family: 'Moderat'
`;


    return (
        <Container>
            <TextValue style={globalStyle.text_big_highlighted}>
                {value}
            </TextValue>
            <TextCategory>
                {text}
            </TextCategory>
        </Container>
    )
}
