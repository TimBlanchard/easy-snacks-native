import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { Route } from "wouter";
import ListingSchool from "./src/pages/ListingSchools.js";
import SingleSchool from "./src/pages/SingleSchool.js";

export default function App() {
  return (
    <Container>
      <Route path="/" component={ListingSchool}/>
      <Route path="/schools/:name" component={SingleSchool}/>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
