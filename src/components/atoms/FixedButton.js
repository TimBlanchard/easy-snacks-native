import React from 'react';
import styled from "styled-components/native";
import {color, fontSize, letterSpacing, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";

export default function FixedButton(props) {

    const ButtonContainer = styled.TouchableOpacity`
      position: fixed;
      bottom:0;
      width: 100%;
      left:0;
      padding: ${spacing[5]};
      text-align: center;
      background-color: ${color.primary};
`;

    const ButtonText = styled.Text`
      color: white;

`;

    return (
        <ButtonContainer>
            <ButtonText style={globalStyle.text_white}>{props.text}</ButtonText>
        </ButtonContainer>
    )
}

/*const Btn = styled.Button`
  font-family: ${props => props.large ? 'Moderat Extended' : 'Moderat Bold'};
      color: white;
      position: absolute;
      bottom:0;
      left:0;
      text-transform: capitalize;
      background-color: ${color.primary}!important;
`;*/



