import React, {useEffect} from 'react';
import styled from "styled-components/native";
import {color, fontSize, letterSpacing, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";
import {Link} from "wouter";
import Button from "../atoms/Button";
import schoolsData from "../../helpers/schoolsData";
import {getSchoolDetails} from "../../services/network";
import {FlatList, Text} from "react-native";

export default function ProductsFilter(props) {

    const Container = styled.View`
      padding: ${spacing[5]};
      flex-direction: row;
      overflow: scroll;
`;
    const List = styled.FlatList`
        overflow: hidden;
`;

    const getCategoryName = (idCategory) => {
        return props.allCategories.find(cat => cat.id === idCategory).name
    }

    useEffect(()=>{
        console.log(props.categories, 'wow');
    },[])

    return (
        <Container>
            <Button text='Tous les produits' secondary active />
            <List
                style={{ overflow: "visible" }}
                data={props.categories}
                keyExtractor={item => item.toString()}
                horizontal
                renderItem={({item}) =>
                    <Button
                        key={item.toString()}
                        text={getCategoryName(item)}
                        secondary
                        style={{marginLeft: spacing[3]}}
                    />}
            />
        </Container>
    )
}



