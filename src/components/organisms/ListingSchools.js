import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from "react-native";
import styled from "styled-components/native";
import {border_radius, color, spacing} from "../../styles/const";
import schoolsData from "../../helpers/schoolsData";
import ListingSchoolItem from "../molecules/ListingSchoolItem";
import FixedButton from "../atoms/FixedButton";


export default function ListingSchools(props) {

    const [selectedId, setSelectedId] = useState(null);

    return (
        <Container>
            <FlatList
                data={schoolsData}
                extraData={selectedId}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) =>
                    <ListingSchoolItem
                        key={item.id.toString()}
                        id={item.id}
                        name={item.name}
                        address={item.address}
                        postal_code={item.postal_code}
                        city={item.city}
                        isSelected={selectedId === item.id}
                        setSelectedId={setSelectedId}
                    />}
            />
            <FixedButton disabled={!selectedId} link={'/schools/'+selectedId} text="Confirmer" />
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
  margin-top: ${spacing[5]};
`;
