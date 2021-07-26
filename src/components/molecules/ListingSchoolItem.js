import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {colors} from "react-native-elements";
import {color, neutral, spacing} from "../../styles/const";
import {Link} from "wouter";
import {globalStyle} from "../../styles/global";

export default function ListingSchoolItem(props) {

    const Container = styled.View`
  border-top-width: 1px;
  border-top-color: ${neutral.grey};
  padding:  ${spacing[5]} ${spacing[4]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

    const LeftBlock = styled.View`
  `;

    const CheckCircle = styled.View`
  border: 1px solid ${neutral.grey};
  width: 20px;
  height: 20px;
      background: ${props.isSelected ? `${color.primary}` : 'transparent'};
  border-radius: 50%;
`;

    return (
        <TouchableOpacity onPress={() => props.setSelectedId(props.id)}>
            <Container >
                <LeftBlock>
                    <Link href={'/schools/'+props.id}>
                        <Text style={[globalStyle.subtitle, {marginBottom: spacing[3]}]} >{props.name}</Text>
                    </Link>
                    <Text style={globalStyle.text}>{props.address}</Text>
                    <Text style={globalStyle.text}>{props.city}, {props.postal_code}</Text>
                </LeftBlock>
                <CheckCircle/>
            </Container>
        </TouchableOpacity>
    )
}
