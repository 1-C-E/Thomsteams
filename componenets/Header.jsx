import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoriteFurniture} from '../redux/slices/favoriteFurniture';
import axios from 'axios';
import {url} from '../dbUrl';
import {fetchBasket} from '../redux/slices/basket';
export const Header_1 = ({theme}) => {
  return (
    <View style={{width: 'auto', height: 100}}>
      {theme ? <Header_dark /> : <Header_light />}
    </View>
  );
};

function Header_dark() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const acID = useSelector(state => state.account.accountID);
  const getFavorites = async () => {
    const isAuth = acID != null ? true : false;
    if (isAuth) {
      navigation.navigate('Favorites_page');
      dispatch(fetchFavoriteFurniture(acID));
    }
  };
  const getBasket = async () => {
    const isAuth = acID != null ? true : false;
    if (isAuth) {
      navigation.navigate('Basket_page');
      dispatch(fetchBasket(acID));
    }
  };
  return (
    <Head style={{marginTop: 15}}>
      <Thoms> thoms </Thoms>

      <Navbar>
        <TouchableOpacity onPress={() => getBasket()} style={{marginLeft: 16}}>
          <Image
            source={require('../assets/img-upper-navbar/basket_black.png')}
            style={{
              width: 21,
              height: 21,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <Nav_element_black> Корзина </Nav_element_black>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => getFavorites()}
          style={{marginLeft: 16}}>
          <Image
            source={require('../assets/img-upper-navbar/favorites_black.png')}
            style={{
              width: 23,
              height: 21,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <Nav_element_black> Избранное </Nav_element_black>
        </TouchableOpacity>
      </Navbar>
    </Head>
  );
}

function Header_light() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const acID = useSelector(state => state.account.accountID);
  const getFavorites = async () => {
    const isAuth = acID != null ? true : false;
    if (isAuth) {
      navigation.navigate('Favorites_page');
      dispatch(fetchFavoriteFurniture(acID));
    }
  };
  const getBasket = async () => {
    const isAuth = acID != null ? true : false;
    if (isAuth) {
      navigation.navigate('Basket_page');
      dispatch(fetchBasket(acID));
    }
  };
  return (
    <Head style={{marginTop: 15}}>
      <Thomsteams> thoms </Thomsteams>

      <Navbar>
        <TouchableOpacity onPress={() => getBasket()} style={{marginLeft: 16}}>
          <Image
            source={require('../assets/img-upper-navbar/basket_white.png')}
            style={{
              width: 21,
              height: 21,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <Nav_element> Корзина </Nav_element>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => getFavorites()}
          style={{marginLeft: 16}}>
          <Image
            source={require('../assets/img-upper-navbar/favorites_white.png')}
            style={{
              width: 23,
              height: 21,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <Nav_element> Избранное </Nav_element>
        </TouchableOpacity>
      </Navbar>
    </Head>
  );
}

const Head = styled.View`
  flex-direction: row;
  margin: 20px 14px 50px 14px;
`;

const Thomsteams = styled.Text`
  color: #fff;
  font-size: 34px;
  font-weight: 600;
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
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`;

const Nav_element_black = styled.Text`
  margin-right: auto;
  margin-left: auto;
  color: black;
  font-size: 10px;
  font-weight: 600;
`;
