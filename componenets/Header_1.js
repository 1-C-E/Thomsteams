import React from "react";
import {Image, TouchableOpacity} from "react-native";
import styled from 'styled-components'

export default function Header_1() {
    return (
        <Head>
            <Thoms>thoms</Thoms>

            <Navbar>
                <TouchableOpacity>
                    <Image source={require('../assets/basket_white.png')}
                           style={{width: 20, height: 19, marginLeft: 'auto', marginRight: 'auto'}}/>
                    <Nav_element>корзина</Nav_element>
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: 16}}>
                    <Image source={require('../assets/favorites_white.png')}
                           style={{width: 21, height: 19, marginLeft: 'auto', marginRight: 'auto'}}/>
                    <Nav_element>избранное</Nav_element>
                </TouchableOpacity>
            </Navbar>
        </Head>
    );
}

const Head = styled.View`
  flex-direction: row;
  margin: 20px 14px 100px 14px;
`;

const Thoms = styled.Text`
  color: #fff;
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
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`;