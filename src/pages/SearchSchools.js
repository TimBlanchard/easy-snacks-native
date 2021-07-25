import React from 'react';
import InputSearch from "../components/molecules/InputSearch.js";
import styled from "styled-components/native";
import {globalStyle} from "../styles/global";
import Title from "../components/atoms/Title";
import ListingSchools from "../components/organisms/ListingSchools";


export default function SearchSchools() {

    return (
        <Container>
            <Wrapper style={globalStyle.wrapper_full}>
                <Title text={'Trouvez votre établissement'} center />
                <InputSearch secondary placeholder="Nom d'établissement, de ville..." />
                <InputSearch placeholder="Nom d'établissement, de ville..." />
                <ListingSchools/>
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.View`
`;

const Container = styled.View`
    width: 100%;
`;
