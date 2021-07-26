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

export default function SingleSchool() {
    const [match, params] = useRoute("/schools/:id");
    const [schoolDetails, setSchoolDetails] = useState([]);
    const [products, setProducts] = useState([]);

    //GET SCHOOL DETAILS FROM API
    const fetchSchoolsDetails = () => {
        getSchoolDetails(params.id).then(data => {
            setSchoolDetails(data);
        });
    }

    // GET ALL TYPES OF PRODUCT OF THE SCHOOL
    const getSchoolProducts = () => {
        if(schoolDetails.dispensers){
            let productsArray = [];
            schoolDetails.dispensers.forEach(
                element => element.productsId.forEach(
                    element => {
                        if (!productsArray.find(el => el === element))
                            productsArray.push(element)
                    }
                )
            );
            console.log(productsArray, 'hel')
            setProducts(productsArray);
            return productsArray;
        }
    }

    const getSchoolProductsCategories = () => {

    }


    useEffect(() => {
        fetchSchoolsDetails();
    }, []);

    useEffect(()=>{
        getSchoolProducts();
        getSchoolProductsCategories();
    },[schoolDetails])



    return (
        <Container>
            <SingleSchoolHeader name={schoolDetails.name}/>
            <ProductsFilter dispensers={params.id}/>
            <PopularProductsSlider products={products}/>
            <Title text='Distributeurs à proximité'/>
            <Text>Single school</Text>
            <Text>{params.id}</Text>
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
`;
