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
import {getDispensersProducts, getProductCategories} from "../helpers/functions";

export default function SingleSchool() {
    const [match, params] = useRoute("/schools/:id");
    const [schoolDetails, setSchoolDetails] = useState([]);
    const [productsId, setProductsId] = useState([]);

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

    const getSchoolProductsCategories = () => {
        if(productsId){
            let categories = [];
            productsId.forEach(
                    element => {
                        console.log(element, 'element');
                        if (productsCategoriesData.find(x => x.id === element.id))
                            categories.push(element)
                    }
            );
            console.log(categories);
            return categories;
        }
    }

    const setProductsData = () => {
        
    }


    useEffect(() => {
        fetchSchoolsDetails();
    }, []);

    useEffect(()=>{
        setSchoolProducts();
        getSchoolProductsCategories();
    },[schoolDetails])

    useEffect(()=>{
        getSchoolProductsCategories();
        console.log(getProductCategories(2), 'product Id');
    },[productsId])



    return (
        <Container>
            <SingleSchoolHeader name={schoolDetails.name}/>
            <ProductsFilter dispensers={params.id}/>
            <PopularProductsSlider products={productsId}/>
            <Title text='Distributeurs à proximité'/>
            <Text>Single school</Text>
            <Text>{params.id}</Text>
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
`;
