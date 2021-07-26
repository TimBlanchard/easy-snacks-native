import React from 'react';
import {View, Text, FlatList, StyleSheet} from "react-native";
import styled from "styled-components/native";
import {border_radius, color, spacing} from "../../styles/const";
import schoolsData from "../../helpers/schoolsData";
import ListingSchoolItem from "../molecules/ListingSchoolItem";
import Title from "../atoms/Title";
import InputSearch from "../molecules/InputSearch";


export default function SingleSchoolHeader(props) {

    return (
        <Container>
            <Title text={props.name} large />
            <InputSearch secondary placeholder="Rechercher un produit ou une catégorie" />
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
  background: ${color.secondary};
`;
