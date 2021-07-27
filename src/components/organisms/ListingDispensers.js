import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from "react-native";
import styled from "styled-components/native";
import {border_radius, color, spacing} from "../../styles/const";
import ListingSchoolItem from "../molecules/ListingSchoolItem";
import FixedButton from "../atoms/FixedButton";
import {getSchoolDetails, getSchoolsFromApiAsync} from "../../services/network";
import ListingDispenserItem from "../molecules/ListingDispenserItem";
import Title from "../atoms/Title";


export default function ListingDispensers({dispensers, allCategories}) {

    const ContainerTitle = styled.View`
      padding: ${spacing[2]} ${spacing[5]};
      overflow: auto;
`;

    return (
        <Container>
            <ContainerTitle>
                <Title text='Distributeurs à proximité'/>
            </ContainerTitle>

            <FlatList
                data={dispensers}
                keyExtractor={(item, index) => index}
                extraData={allCategories}
                renderItem={({item}) =>
                    <ListingDispenserItem
                        key={item.id.toString()}
                        id={item.id}
                        allCategories={allCategories}
                        products={item.products}
                    />}
            />
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
  margin-top: ${spacing[5]};
`;
