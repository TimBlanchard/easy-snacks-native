import React, {useEffect, useState} from 'react'
import {View} from "react-native";
import {Text} from "react-native-web";
import {useRoute} from "wouter";
import SingleSchoolHeader from "../components/organisms/SingleSchoolHeader";
import {getSchoolDetails} from "../services/network";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {color} from "../styles/const";
import Title from "../components/atoms/Title";
import ProductsFilter from "../components/molecules/ProductsFilter";
import PopularProductsSlider from "../components/organisms/PopularProductsSlider";
import schoolsData from "../helpers/schoolsData";
import {productsCategoriesData, productsData} from "../helpers/productsData";
import {getDispensersProducts, getProductCategories, getProductsCategories} from "../helpers/functions";

export default function SingleSchool() {
    const [match, params] = useRoute("/schools/:id");
    const [schoolDetails, setSchoolDetails] = useState([]);
    const [productsId, setProductsId] = useState([]);
    const [productsCategories, setProductsCategories] = useState([]);

    //GET SCHOOL DETAILS FROM API
    const fetchSchoolsDetails = () => {
        getSchoolDetails(params.id).then(data => {
            setSchoolDetails(data);
        });
    }

    // GET ALL TYPES OF PRODUCT OF THE SCHOOL
    const setSchoolProducts = () => {
        if(schoolDetails.dispensers){
            return setProductsId(getDispensersProducts(schoolDetails.dispensers));
        } else {
            return;
        }
    }


    useEffect(() => {
        fetchSchoolsDetails();
    }, []);

    useEffect(()=>{
        setSchoolProducts();
    },[schoolDetails])

    useEffect(()=>{
        setProductsCategories(getProductsCategories(productsId));
    },[productsId])



    return (
        <Container>
            <SingleSchoolHeader name={schoolDetails.name}/>
            {
                productsCategories.length > 0 &&
                <ProductsFilter categories={productsCategories}/>
            }
            {
                productsId.length > 0 &&
                <PopularProductsSlider products={productsId}/>
            }
            <Title text='Distributeurs à proximité'/>
            <Text>Single school</Text>
            <Text>{params.id}</Text>
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
`;
