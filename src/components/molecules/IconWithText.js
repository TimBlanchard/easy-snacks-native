import React from 'react';
import {StyleSheet, Image} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import {border_radius, box_shadow, color, letterSpacing, fontSize, neutral, spacing} from "../../styles/const";

export default function IconWithText(props) {

    const Container = styled.View`
        flex-direction: row;
      align-items: center;
      padding: ${props.no_padding ? 0 : spacing[3]};
      justify-content: center;
  
`;

    const Txt = styled.Text`
    color: ${props.textColor ? props.textColor : neutral.black};
      font-size: ${ props.size_small ? fontSize[3] : fontSize[5]};
      letter-spacing: ${letterSpacing.neg_3};
      margin-right: ${props => props.value ? spacing[2] : 0 };
      font-family: ${props => props.value ? 'Moderat Bold' : 'Moderat' };
  `;

    const styles = StyleSheet.create({
        icon: {
            width: 12,
            height: 12,
            marginRight: spacing[2],
            resizeMode: 'stretch'
        },
    })


    return (
        <Container>
            <Image style={styles.icon} source={require(`../../../assets/${props.iconName}.png`)} />
            {
                props.value &&
                <Txt value>{props.value}</Txt>
            }
            <Txt>{props.text}</Txt>
        </Container>
    )
}
