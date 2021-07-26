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
            let productAr = [];
            schoolDetails.dispensers.forEach(
                element => element.productsId.forEach(
                    element => {
                        if (!productAr.find(el => el === element))
                        productAr.push(element)
                    }
                )
            );
            console.log(productAr, 'hel')
            return productAr;
        }
    }


    useEffect(() => {
        fetchSchoolsDetails();
    }, []);

    useEffect(()=>{
        getSchoolProducts();
    },[schoolDetails])



    return (
        <Container>
            <SingleSchoolHeader name={schoolDetails.name}/>
            <ProductsFilter dispensers={params.id}/>
            <Title text='Produits populaires'/>
            <Title text='Distributeurs à proximité'/>
            <Text>Single school</Text>
            <Text>{params.id}</Text>
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
`;
