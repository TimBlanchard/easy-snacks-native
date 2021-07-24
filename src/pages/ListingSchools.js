import React from 'react';
import InputSearch from "../components/molecules/InputSearch.js";
import styled from "styled-components/native";
import {spacing} from "../styles/const";
import {globalStyle} from "../styles/global";


export default function ListingSchool() {

    return (
        <Container style={globalStyle.container}>
            <Title>
                Trouver votre établissement
            </Title>
            <InputSearch secondary placeholder="Nom d'établissement, de ville..." />
            <InputSearch placeholder="Nom d'établissement, de ville..." />
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
  padding: ${spacing[5]}
`;

const Title = styled.Text`
  font-family: 'Moderat';
`;
