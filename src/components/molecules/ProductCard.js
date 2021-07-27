import React, {useEffect} from 'react';
import styled from "styled-components/native";
import {color, fontSize, letterSpacing, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";
import {Link} from "wouter";
import Button from "../atoms/Button";
import schoolsData from "../../helpers/schoolsData";
import {getSchoolDetails} from "../../services/network";
import {getCategoryName} from "../../helpers/functions";
import IconWithText from "./IconWithText";
import {Image, StyleSheet} from "react-native";

export default function ProductCard(props) {

    const Container = styled.View`
      padding: ${spacing[3]};
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 140px;
      margin-right: ${spacing[5]};
`;
    const Name = styled.Text`
`;

    const styles = StyleSheet.create({
        icon: {
            width: 60,
            height: 60,
            marginRight: spacing[2],
            resizeMode: 'stretch'
        },
    })

    useEffect(()=>{
        console.log(props.categories);
    },[])

    return (
        <Container style={globalStyle.box_default}>
            <Image style={styles.icon} source={require(`../../../assets/products/${props.img}.png`)} />
            <Name style={globalStyle.subtitle}>
                {props.text}
            </Name>
            <IconWithText text='Etablissement' iconName='localisation-black' value={8} no_padding/>
        </Container>
    )
}



