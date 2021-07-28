import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { Route } from "wouter";
import SearchSchools from "./src/pages/SearchSchools.js";
import SingleSchool from "./src/pages/SingleSchool.js";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import SingleDispenser from "./src/pages/SingleDispenser";

export default function App() {
    let [fontsLoaded] = useFonts({
        'Moderat': require('./src/styles/fonts/Moderat-Regular.ttf'),
        'Moderat Medium': require('./src/styles/fonts/Moderat-Medium.ttf'),
        'Moderat Bold': require('./src/styles/fonts/Moderat-Bold.ttf'),
        'Moderat Extended': require('./src/styles/fonts/Moderat-Extended-Bold.ttf'),
    });
if(!fontsLoaded) {
    return <AppLoading/>
} else {
    return (
        <Container>
            <Route path="/" component={SearchSchools}/>
            <Route path="/schools/:name" component={SingleSchool}/>
            <Route path="/dispenser/:id" component={SingleDispenser}/>
            <StatusBar style="auto" />
        </Container>
    );
}
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;
