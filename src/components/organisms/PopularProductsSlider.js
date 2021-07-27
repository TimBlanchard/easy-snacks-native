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
import {getCategoryName} from "../../helpers/functions";
import ProductCard from "../molecules/ProductCard";

export default function PopularProductsSlider({products}) {

    const ContainerTitle = styled.View`
      padding: ${spacing[2]} ${spacing[5]};
      overflow: auto;
`;
    const Container = styled.View`
      padding: ${spacing[5]};
      overflow: auto;
    `;
    const List = styled.FlatList`
        overflow: hidden;
`;

    useEffect(()=>{
        console.log(products, 'ee');
    },[products])

    return (
        <>
            <ContainerTitle>
                <Title text='Produits populaires'/>
            </ContainerTitle>
            <Container>
                <List
                    style={{ overflow: "visible" }}
                    data={products}
                    keyExtractor={(item, index) => index}
                    horizontal
                    renderItem={({item}) =>
                        <ProductCard
                            key={item.toString()}
                            id={item.id}
                            img={item.imgName}
                            text={item.name}
                            style={{marginLeft: spacing[3]}}
                        />}
                />
            </Container>
        </>
    )
}



