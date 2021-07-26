import React, {useEffect} from 'react';
import styled from "styled-components/native";
import { fontSize, letterSpacing, neutral} from "../../styles/const";

export default function Title({large, center, text, ...rest}) {

    const Txt = styled.Text`
  font-family: ${large ? 'Moderat Extended' : 'Moderat Bold'};
  font-size: ${large ? fontSize[10] : fontSize[8]};
  color: ${neutral.black};
  letter-spacing: ${letterSpacing.neg_4};
  text-align: ${center ? "center" : "inherit"};
`;

    return (
        <Txt {...rest}>
            {text}
        </Txt>
    )
}



