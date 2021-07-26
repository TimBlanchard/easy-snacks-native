import React, {useEffect, useState} from 'react'
import {View} from "react-native";
import {Text} from "react-native-web";
import {useRoute} from "wouter";
import SingleSchoolHeader from "../components/organisms/SingleSchoolHeader";
import {getSchoolDetails} from "../services/network";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {color} from "../styles/const";

export default function SingleSchool() {
    const [match, params] = useRoute("/schools/:id");
    const [schoolDetails, setSchoolDetails] = useState([])

    //GET SCHOOL DETAILS FROM API
    const fetchSchoolsDetails = () => {
        getSchoolDetails(params.id).then(data => {
            setSchoolDetails(data);
        });
    }
    useEffect(() => {
        fetchSchoolsDetails();
    }, []);



    return (
        <Container>
            <SingleSchoolHeader name={schoolDetails.name}/>
            <Text>Single school</Text>
            <Text>{params.id}</Text>
        </Container>
    )
}

const Container = styled.View`
  width: 100%;
`;
