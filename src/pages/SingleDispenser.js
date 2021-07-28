import React, {useEffect, useState} from 'react'
import {View} from "react-native";
import {Text} from "react-native-web";
import {useRoute} from "wouter";
import SingleSchoolHeader from "../components/organisms/SingleSchoolHeader";
import {getAllCategories, getDispenserDetails, getSchoolDetails, getSchoolDispensers} from "../services/network";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {color} from "../styles/const";
import Title from "../components/atoms/Title";
import ProductsFilter from "../components/molecules/ProductsFilter";
import PopularProductsSlider from "../components/organisms/PopularProductsSlider";
import schoolsData from "../helpers/schoolsData";
import {productsCategoriesData, productsData} from "../helpers/productsData";
import {getDispensersProducts, getProductCategories, getProductsCategories} from "../helpers/functions";
import ListingDispensers from "../components/organisms/ListingDispensers";

export default function SingleDispenser() {
    const [match, params] = useRoute("/dispenser/:id");
    const [dispenserDetails, setDispenserDetails] = useState([]);

    //FETCH DATA FROM API
    const fetchApiData = () => {
        //GET SCHOOL DETAILS FROM API
        getDispenserDetails(params.id).then(data => {
            setDispenserDetails(data);
        });
    }

    useEffect(() => {
        fetchApiData();
    }, []);

    useEffect(() => {
        console.log(dispenserDetails, 'di')
    }, [dispenserDetails]);





    return (
        <>
            {
                dispenserDetails[0] ?
                    <Container>
                        <SingleSchoolHeader name={dispenserDetails[0].name}/>
                        {
                            productsCategories.length > 0 &&
                            <ProductsFilter allCategories={allCategories} categories={productsCategories}/>
                        }
                        {
                            products.length > 0 &&
                            <PopularProductsSlider products={products}/>
                        }
                        <ListingDispensers allCategories={allCategories} dispensers={dispensers} />
                    </Container> : 'loading data'
            }
        </>
    )
}

const Container = styled.View `
  width: 100%;
`;
