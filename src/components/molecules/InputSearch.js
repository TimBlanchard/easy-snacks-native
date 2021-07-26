import React from 'react';
import {StyleSheet} from "react-native";
import styled from "styled-components/native";
import {border_radius, box_shadow, color, neutral, spacing} from "../../styles/const";
import { Icon } from 'react-native-elements'

export default function InputSearch(props) {

    const Container = styled.View`
  width: 100%;
  border: ${ props.secondary ? "none" : `1px solid ${color.primary}`};
      background: ${neutral.white};
  box-shadow: ${props.secondary ? box_shadow[1] : "none"};
  padding: ${spacing[4]} ${spacing[5]};
  border-radius: ${border_radius[3]};
  flex-direction: row;
  align-items: center;
`;

    const Input = styled.TextInput`
  width: 100%;
  color: ${neutral.grey_01};
  `;

    const styles = StyleSheet.create({
        icon: {
            marginRight: spacing[3]
        },
    })


    return (
        <Container>
            <Icon style={styles.icon} name="search" size={28} color={props.secondary ? neutral.grey_01 : color.primary}/>
            <Input placeholder={props.placeholder} placeholderTextColor={neutral.grey_01} />
        </Container>
    )
}
