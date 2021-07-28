import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {colors} from "react-native-elements";
import {border_radius, color, neutral, spacing} from "../../styles/const";
import {globalStyle} from "../../styles/global";
import IconWithBlock from "./IconWithBlock";
import TextWithValue from "./TextWithValue";
import {getProductsCategories, getProductsNumberOfCategory} from "../../helpers/functions";

export default function ListingDispenserItem({id, products, allCategories}) {

    const [dispenserCategories, setDispenserCategories] = useState([]);

    const Container = styled.View`
  padding:  ${spacing[5]} ${spacing[5]};
`;
    const Card = styled.TouchableOpacity`
      border: 1px solid ${neutral.grey};
      padding:  ${spacing[5]} ${spacing[6]};
      flex-direction: row;
      border-radius: ${border_radius[3]};
      align-items: center;
      justify-content: space-between;
    `;
    const TextsContainer = styled.View`
      flex-direction: column;
      margin-left: ${spacing[4]};
    `;

    const LeftBlock = styled.View`
      flex-direction: row;
      align-items: center;
  `;

    const RightBlock = styled.View`
  `;

    useEffect(()=>{
        setDispenserCategories(getProductsCategories(products));
    },[products])


    useEffect(()=>{
        console.log(products, 'test');

    },[products])

    const getCategoryName = (idCategory) => {
        return allCategories.find(cat => cat.id === idCategory).name
    }

    // Generate random value waiting api to have localisation feature
    const randomDistance = (min, max) => Math.floor(Math.random() * (max - min)) + min;


    return (
        <Container>
            <Card>
                <LeftBlock>
                    <IconWithBlock iconName="dispenser" />
                    <TextsContainer>
                        <Text style={[globalStyle.text_big, {marginBottom: spacing[2]}]} >{randomDistance(10, 800)}m</Text>
                        <Text style={globalStyle.text_tiny} >#{id}</Text>
                    </TextsContainer>
                </LeftBlock>
                <RightBlock>
                    <FlatList
                        data={dispenserCategories}
                        extraData={products}
                        keyExtractor={(item, index) => index}
                        renderItem={({item}) =>
                            <TextWithValue
                                key={item.toString()}
                                id={item}
                                value={getProductsNumberOfCategory(item, products)}
                                text={getCategoryName(item)}
                            />}
                    />
                </RightBlock>
            </Card>
        </Container>
    )
}
