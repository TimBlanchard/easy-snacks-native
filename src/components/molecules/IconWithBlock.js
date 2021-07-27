import React from 'react';
import {StyleSheet, Image} from "react-native";
import styled from "styled-components/native";
import {border_radius, box_shadow, color, letterSpacing, fontSize, neutral, spacing} from "../../styles/const";

export default function IconWithBlock(props) {

    const Container = styled.View`
        flex-direction: row;
      align-items: center;
      background: ${color.secondary};
      border-radius: ${border_radius[2]};
      padding: ${spacing[3]};
      justify-content: center;
  
`;

    const styles = StyleSheet.create({
        icon: {
            width: 18,
            height: 21,
            marginRight: spacing[2],
            resizeMode: 'stretch'
        },
    })


    return (
        <Container>
            <Image style={styles.icon} source={require(`../../../assets/${props.iconName}.png`)} />
        </Container>
    )
}
