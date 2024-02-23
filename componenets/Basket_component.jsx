import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {url} from '../dbUrl';
import {fetchSelectedFurniture} from '../redux/slices/selectedFurniture';
import {useDispatch, useSelector} from 'react-redux';

export const Basket_component = ({
  name,
  price,
  imgsrc,
  navigation,
  furnitureId,
  count,
}) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Block>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Product_page', {furnitureId: furnitureId});
            dispatch(fetchSelectedFurniture(furnitureId));
          }}>
          <Info>
            <Img
              source={
                imgsrc == '1'
                  ? ''
                  : {uri: url + '/uploads/' + furnitureId + '/' + imgsrc}
              }
            />
            <View>
              <Name> {name} </Name>
              <Price> {price + '₽'} </Price>
            </View>
            <Numerous> {'Количество товара: ' + count} </Numerous>
          </Info>
        </TouchableOpacity>
      </Block>
    </View>
  );
};

const Block = styled.View`
  height: 150px;
  width: auto;
  margin-top: 5px;
  padding: 12px;
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
  margin_left: 10px;
  margin_top: 35px;
`;
const Name = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: black;
  margin-left: 10px;
`;

const Img = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Numerous = styled.Text`
  color: black;
  text-align: right;
  margin-top: 52px;
  font-weight: 600;
  font-size: 14px;
`;

const Plus = styled.View``;

const Minus = styled.View``;
