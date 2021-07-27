import React from 'react';
import styled from "styled-components/native";
import {border_radius, color, fontSize, letterSpacing, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";

export default function Button({text, secondary, ...rest}) {

    const ButtonContainer = styled.TouchableOpacity`
      left:0;
      padding: ${spacing[3]} ${spacing[5]};
      border-radius: ${border_radius[3]};
      text-align: center;
      border: 1px solid ${neutral.grey};
      background-color: ${secondary ? neutral.white : color.primary};
`;

    const ButtonText = styled.Text`
      color: ${secondary ? neutral.black : neutral.white};
      font-size: ${fontSize[5]};
      letter-spacing: ${letterSpacing.neg_4};
      font-family: 'Moderat';

`;

    return (
        <ButtonContainer {...rest}>
                <ButtonText>{text}</ButtonText>
        </ButtonContainer>
    )
}



