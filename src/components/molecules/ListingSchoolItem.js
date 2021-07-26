import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {colors} from "react-native-elements";
import {color, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";

export default function ListingSchoolItem(props) {

    const Container = styled.View`
  border-top-width: 1px;
  border-top-color: ${neutral.grey};
  padding:  ${spacing[5]} ${spacing[5]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

    const LeftBlock = styled.View`
  `;

    const CheckCircle = styled.View`
  border: 1px solid ${neutral.grey};
  width: 23px;
  height: 23px;
      background: ${props.isSelected ? `${color.primary}` : 'transparent'};
  border-radius: 50%;
      position: relative;
      flex-direction: row;
      align-items: center;
      justify-content: center;
`;
    const Arrow = styled.Image`
        position: relative;
        width:14px;
      height: 10px;
`;
    const onPress = () => {
        props.isSelected ? props.setSelectedId(null) : props.setSelectedId(props.id);
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Container >
                <LeftBlock>
                        <Text style={[props.isSelected ? globalStyle.subtitle_highlighted : globalStyle.subtitle, {marginBottom: spacing[3]}]} >{props.name}</Text>
                    <Text style={props.isSelected ? globalStyle.text_highlighted : globalStyle.text}>{props.address}</Text>
                    <Text style={props.isSelected ? globalStyle.text_highlighted : globalStyle.text}>{props.city}, {props.postal_code}</Text>
                </LeftBlock>
                <CheckCircle>
                    <Arrow source={require('../../../assets/check-arrow.png')}/>
                </CheckCircle>
            </Container>
        </TouchableOpacity>
    )
}
