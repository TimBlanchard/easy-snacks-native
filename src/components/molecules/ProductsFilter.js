import React from 'react';
import styled from "styled-components/native";
import {color, fontSize, letterSpacing, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";
import {Link} from "wouter";
import Button from "../atoms/Button";

export default function ProductsFilter(props) {

    const Container = styled.View`
      padding: ${spacing[5]};
      flex-direction: row;
      overflow: auto;
`;

    return (
        <Container>
            <Button secondary style={{marginLeft: spacing[3]}} text='Tous les produits' />
            <Button secondary style={{marginLeft: spacing[3]}} text='Snacks' />
            <Button secondary style={{marginLeft: spacing[3]}} text='Boissons' />
        </Container>
    )
}



