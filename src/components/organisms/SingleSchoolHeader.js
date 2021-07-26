import React from 'react';
import {View, Text, FlatList, StyleSheet} from "react-native";
import styled from "styled-components/native";
import {border_radius, color, spacing} from "../../styles/const";
import schoolsData from "../../helpers/schoolsData";
import ListingSchoolItem from "../molecules/ListingSchoolItem";
import Title from "../atoms/Title";
import InputSearch from "../molecules/InputSearch";
import IconWithText from "../molecules/IconWithText";


export default function SingleSchoolHeader(props) {

    return (
        <Container>
            <IconWithText text='Etablissement' iconName='localisation' textColor={color.primary} size_small/>
            <IconWithText text='Etablissement' iconName='localisation-black' value={8}/>
            <Title text={props.name} large center />
            <InputSearch secondary placeholder="Rechercher un produit ou une catégorie" />
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
  padding: ${spacing[5]}
  background: ${color.secondary};
`;
