import React from "react";
import {Image, TouchableOpacity} from "react-native";
import styled from 'styled-components'

export default function Header({navigation}) {
    return (
        <Head>
            <Thoms>thoms</Thoms>

            <Navbar>
                <TouchableOpacity style={{marginLeft: 16}}>
                    <Image source={require('../assets/basket_black.png')}
                           style={{width: 25, height: 25, marginLeft: 'auto', marginRight: 'auto'}}/>
                    <Nav_element>Корзина</Nav_element>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: 16}}>
                    <Image source={require('../assets/favorites_black.png')}
                           style={{width: 25, height: 25, marginLeft: 'auto', marginRight: 'auto'}}/>
                    <Nav_element>Избранное</Nav_element>
                </TouchableOpacity>
            </Navbar>
        </Head>
    );
}

const Head = styled.View`
  flex-direction: row;
  margin: 20px 14px 0 14px;
  
`;

const Thoms = styled.Text`
  color: black;
  font-size: 34px;
  font-weight: 600;
  
`;

const Navbar = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-top: 12px;
  
`;

const Nav_element = styled.Text`
  margin-right: auto;
  margin-left: auto;
  color: black;
  font-size: 10px;
  font-weight: 600;
`;