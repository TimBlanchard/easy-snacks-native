import React, {useEffect, useState} from 'react'
import {View} from "react-native";
import {Text} from "react-native-web";
import {useRoute} from "wouter";
import SingleSchoolHeader from "../components/organisms/SingleSchoolHeader";
import {getAllCategories, getSchoolDetails, getSchoolDispensers} from "../services/network";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {color} from "../styles/const";
import Title from "../components/atoms/Title";
import ProductsFilter from "../components/molecules/ProductsFilter";
import PopularProductsSlider from "../components/organisms/PopularProductsSlider";
import schoolsData from "../helpers/schoolsData";
import {productsCategoriesData, productsData} from "../helpers/productsData";
import {getDispensersProducts, getProductCategories, getProductsCategories} from "../helpers/functions";
import ListingDispensers from "../components/organisms/ListingDispensers";

export default function SingleSchool() {
    const [match, params] = useRoute("/schools/:id");
    const [schoolDetails, setSchoolDetails] = useState([]);
    const [dispensers, setDispensers] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [productsCategories, setProductsCategories] = useState([]);

    //FETCH DATA FROM API
    const fetchApiData = () => {
        //GET SCHOOL DETAILS FROM API
        getSchoolDetails(params.id).then(data => {
            setSchoolDetails(data);
        });
        //GET SCHOOL DISPENSERS FROM API
        getSchoolDispensers(params.id).then(data => {
            setDispensers(data);
        });
        //GET CATEGORIES INFO
        getAllCategories().then(data => {
            setAllCategories(data);
        });
    }

    // GET ALL TYPES OF PRODUCT OF THE SCHOOL
    const setSchoolProducts = () => {
        if(dispensers){
            return setProducts(getDispensersProducts(dispensers));
        } else {
            return;
        }
    }


    useEffect(() => {
        fetchApiData();
    }, []);


    useEffect(()=>{
        setSchoolProducts();
    },[dispensers])

    useEffect(()=>{
        setProductsCategories(getProductsCategories(products));
    },[products])

    useEffect(()=>{
        console.log(allCategories, 'wesh')
    },[allCategories])





    return (
        <>
            {
                schoolDetails[0] ?
                    <Container>
                        <SingleSchoolHeader name={schoolDetails[0].name}/>
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
