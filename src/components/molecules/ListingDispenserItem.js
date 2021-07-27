import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {colors} from "react-native-elements";
import {color, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";
import IconWithBlock from "./IconWithBlock";

export default function ListingDispenserItem({id, products}) {

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

    const RightBlock = styled.View`
  `;


    useEffect(()=>{
        console.log(products, 'test');

    },[products])


    return (
        <TouchableOpacity>
            <Container>
                <LeftBlock>
                    <IconWithBlock iconName="dispenser" />
                    <Text style={[globalStyle.subtitle, {marginBottom: spacing[3]}]} >{id}</Text>
                </LeftBlock>
                <RightBlock>
                    <IconWithBlock iconName="dispenser" />
                </RightBlock>
            </Container>
        </TouchableOpacity>
    )
}
