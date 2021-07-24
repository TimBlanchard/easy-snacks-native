import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { Route } from "wouter";
import ListingSchool from "./src/pages/ListingSchools.js";
import SingleSchool from "./src/pages/SingleSchool.js";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    let [fontsLoaded] = useFonts({
        'Moderat': require('./src/styles/fonts/Moderat-Regular.ttf'),
        'Moderat Medium': require('./src/styles/fonts/Moderat-Medium.ttf'),
        'Moderat Bold': require('./src/styles/fonts/Moderat-Bold.ttf'),
    });
if(!fontsLoaded) {
    return <AppLoading/>
} else {
    return (
        <Container>
            <Route path="/" component={ListingSchool}/>
            <Route path="/schools/:name" component={SingleSchool}/>
            <StatusBar style="auto" />
        </Container>
    );
}
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
