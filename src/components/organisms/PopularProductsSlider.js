import React, {useEffect} from 'react';
import styled from "styled-components/native";
import {color, fontSize, letterSpacing, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";
import {Link} from "wouter";
import Button from "../atoms/Button";
import schoolsData from "../../helpers/schoolsData";
import {getSchoolDetails} from "../../services/network";
import Title from "../atoms/Title";
import ListingSchoolItem from "../molecules/ListingSchoolItem";
import {FlatList, Text} from "react-native";

export default function PopularProductsSlider({products}) {

    const Container = styled.View`
      padding: ${spacing[5]};
      flex-direction: row;
      overflow: auto;
`;

    return (
        <Container>
            <Title text='Produits populaires'/>
            <FlatList
                data={products}
                keyExtractor={item => item.toString()}
                renderItem={({item}) =>
                    <Text
                        key={item.toString()}
                    >{item}</Text>}
            />
        </Container>
    )
}



