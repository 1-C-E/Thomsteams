import * as React from "react";
import {Image, TouchableOpacity} from "react-native";

import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteFurniture } from "../redux/slices/favoriteFurniture";
import axios from "axios";
import { url } from "../dbUrl";
export const Header_1 = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const acID = useSelector((state) => state.account.accountID)
    const getFavorites = async () => {
      const isAuth = acID != null ? true : false
      if(isAuth)
      {
          navigation.navigate("Favorites_page")
          dispatch(fetchFavoriteFurniture(acID))
      }
    }
    return (
        <Head style={{marginTop:30}}>
            <Thoms> thoms </Thoms>

            <Navbar>
                <TouchableOpacity onPress={() => navigation.navigate("Basket_page")}
                                  style={{marginLeft: 16}}>
                    <Image source={require('../assets/img-upper-navbar/basket_white.png')}
                           style={{width: 21, height: 21, marginLeft: 'auto', marginRight: 'auto'}}/>
                    <Nav_element> Корзина </Nav_element>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => getFavorites()}
                                  style={{marginLeft: 16}}>
                    <Image source={require('../assets/img-upper-navbar/favorites_white.png')}
                           style={{width: 23, height: 21, marginLeft: 'auto', marginRight: 'auto'}}/>
                    <Nav_element> Избранное </Nav_element>
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