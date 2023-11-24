
import React from 'react'
import {Text, View} from 'react-native';
import styled from 'styled-components';
import Header_2 from "./Header_2";

export default function Basket () {
    return (
        <View>
            <Header_2/>
            <Text style={{textAlign: 'center', marginTop: 100, fontSize: 35}}> Корзина </Text>
        </View>
    );
}