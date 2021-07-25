import React from 'react';
import styled from "styled-components/native";
import { fontSize, letterSpacing, neutral} from "../../styles/const";

export default function Title(props) {

    const Txt = styled.Text`
  font-family: 'Moderat Bold';
  font-size: ${fontSize[8]};
  color: ${neutral.black};
  letter-spacing: ${letterSpacing.neg_4};
  text-align: ${props.center ? "center" : "inherit"}
`;

    return (
        <Txt>
            {props.text}
        </Txt>
    )
}



