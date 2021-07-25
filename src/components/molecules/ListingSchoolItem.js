import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {colors} from "react-native-elements";
import {neutral} from "../../styles/const";
import {Link} from "wouter";

export default function ListingSchoolItem(props) {
    return (
        <TouchableOpacity>
            <Container >
                <Link href={'/schools/'+props.id}>
                <Text>{props.name}</Text>
                </Link>
                <Text>{props.city}</Text>
            </Container>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 12,
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF'
    },
})

const Container = styled.View`
  border-top-width: 1px;
  border-top-color: ${neutral.grey};
`;
