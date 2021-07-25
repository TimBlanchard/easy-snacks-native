import React from 'react';
import {View, Text} from "react-native";
import styled from "styled-components/native";
import {border_radius, color} from "../../styles/const";

export default function ListingSchools(props) {

    return (
        <Container>
            <Text>Listing Schools</Text>
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
`;
