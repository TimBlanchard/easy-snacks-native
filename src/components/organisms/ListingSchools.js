import React from 'react';
import {View, Text, FlatList} from "react-native";
import styled from "styled-components/native";
import {border_radius, color, spacing} from "../../styles/const";
import schoolsData from "../../helpers/schoolsData";
import ListingSchoolItem from "../molecules/ListingSchoolItem";


export default function ListingSchools(props) {

    return (
        <Container>
            <FlatList
                data={schoolsData}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) =>
                    <ListingSchoolItem
                        key={item.id.toString()}
                        id={item.id}
                        name={item.name}
                        address={item.address}
                        postal_code={item.postal_code}
                        city={item.city}
                    />}
            />
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
  margin-top: ${spacing[5]};
`;
