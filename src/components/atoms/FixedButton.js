import React from 'react';
import styled from "styled-components/native";
import {color, fontSize, letterSpacing, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";
import {Link} from "wouter";

export default function FixedButton({text, link, disabled, ...rest}) {

    const ButtonContainer = styled.TouchableOpacity`
      position: fixed;
      bottom:0;
      width: 100%;
      left:0;
      padding: ${spacing[5]};
      text-align: center;
      background-color: ${disabled ? color.disabled : color.primary};
`;

    const ButtonText = styled.Text`
      color: white;

`;

    return (
        <ButtonContainer {...rest}>
            <Link href={disabled ? '/' : link}>
                <ButtonText style={globalStyle.text_white}>{text}</ButtonText>
            </Link>
        </ButtonContainer>
    )
}



