import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styled from 'styled-components';
import {url} from '../dbUrl';
import {fetchSelectedFurniture} from '../redux/slices/selectedFurniture';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAccountUpdate} from '../redux/slices/account';
import {fetchBasket} from '../redux/slices/basket';

export const Basket_component = ({
  name,
  price,
  imgsrc,
  navigation,
  furnitureId,
  count,
}) => {
  const dispatch = useDispatch();
  basketItems = useSelector(state => state.account.basket);
  acID = useSelector(state => state.account.accountID);
  loginToken = useSelector(state => state.account.loginToken);
  return (
    <View>
      <Block>
        <Info1>
          <Info>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Product_page', {furnitureId: furnitureId});
                dispatch(fetchSelectedFurniture(furnitureId));
              }}>
              <Img
                source={
                  imgsrc == '1'
                    ? ''
                    : {uri: url + '/uploads/' + furnitureId + '/' + imgsrc}
                }
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Product_page', {
                    furnitureId: furnitureId,
                  });
                  dispatch(fetchSelectedFurniture(furnitureId));
                }}>
                <Name> {name} </Name>
              </TouchableOpacity>
              <Numerous> {'Количество товара: ' + count} </Numerous>
              <Price> {price + '₽'} </Price>
            </View>
          </Info>
          <Knopka
            onPress={() => {
              const filteredItems = basketItems.filter(x => x != furnitureId);
              dispatch(
                fetchAccountUpdate([acID, {basket: filteredItems}, loginToken]),
              );
              dispatch(fetchBasket(acID));
            }}>
            <Krest>X</Krest>
          </Knopka>
        </Info1>
        <Navbar>
          <Kupit>
            <Text style={{color: 'black', textAlign: 'center'}}>Купить</Text>
          </Kupit>
          <Rasp>
            <TouchableOpacity
              onPress={() => {
                basketItems = basketItems.slice();
                basketItems.pop(furnitureId);
                dispatch(
                  fetchAccountUpdate([acID, {basket: basketItems}, loginToken]),
                );
                dispatch(fetchBasket(acID));
              }}>
              <BoxMinus>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 600,
                  }}>
                  {' '}
                  -{' '}
                </Text>
              </BoxMinus>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                basketItems = basketItems.slice();
                basketItems.push(furnitureId);
                dispatch(
                  fetchAccountUpdate([acID, {basket: basketItems}, loginToken]),
                );
                dispatch(fetchBasket(acID));
              }}>
              <BoxPlus>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 600,
                  }}>
                  {' '}
                  +{' '}
                </Text>
              </BoxPlus>
            </TouchableOpacity>
          </Rasp>
        </Navbar>
      </Block>
    </View>
  );
};

const Block = styled.View`
  height: 185px;
  width: auto;
  margin-top: 5px;
  border: 1px #a4a4a4;
  border-radius: 20px;
  background-color: #ffffff;
  margin-left: 5px;
  margin-right: 5px;
`;

const Price = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin_right: auto;
  margin_top: 10px;
`;
const Name = styled.Text`
  width: 190px;
  height: 70px;
  font-size: 14px;
  font-weight: 600;
  color: black;
  margin-right: auto;
`;

const Img = styled.Image`
  height: 110px;
  width: 110px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  padding: 12px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Numerous = styled.Text`
  color: black;
  margin-top: auto;
  font-weight: 600;
  font-size: 14px;
`;

const Krest = styled.Text`
  font-size: 24;

  margin-right: auto;
`;

const Info1 = styled.View`
  flex-direction: row;
`;

const Knopka = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

const BoxMinus = styled.View`
  width: 35px;
  height: 32px;
  border: 1px #a4a4a4;
  border-radius: 10px;
`;
const BoxPlus = styled.View`
  width: 35px;
  height: 32px;
  border: 1px #a4a4a4;
  border-radius: 10px;
`;

const Navbar = styled.View`
  width: auto;
  height: 35px;
  background-color: #ffffff;
  border-radius: 20px;
  flex-direction: row;
`;

const Rasp = styled.View`
  width: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: 10px;
  justify-content: space-around;
`;

const Kupit = styled.View`
  width: 100px;
  height: 32px;
  background-color: lightgreen;
  margin-left: 15px;
  border-radius: 10px;
  justify-content: center;
`;
