import React from 'react'
import {View} from "react-native";
import {Text} from "react-native-web";
import {useRoute} from "wouter";

export default function SingleSchool() {
    const [match, params] = useRoute("/schools/:id");
    return (
        <View className="main-app single-school">
            <Text>Single school</Text>
            <Text>{params.id}</Text>
        </View>
    )
}
