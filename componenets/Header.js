import React from "react";
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import styled from 'styled-components'

export default function Header() {
    return (
        <Head>
            <Thoms>thoms</Thoms>

            <View>
                <Image source={require('../assets/basket_white.png')}
                       style={{width: 19, height: 19}}/>
                <Nav_element>корзина</Nav_element>
            </View>

            <View>
                <Image source={require('../assets/profile_white.png')}
                       style={{width: 19, height: 19}}/>
                <Nav_element>избранное</Nav_element>
            </View>
        </Head>
    );
}

const Head = styled.View`
  flex-direction: row;
  margin: 20px 14px 0 14px;
`;
const Thoms = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 34px;
  font-weight: 600;
`;
const Nav_element = styled.Text`
  margin: 0 10px 0 0;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`;