import React from "react";
import {StyleSheet, Image, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, View, Text} from 'react-native';
import styled from "styled-components";
import {url} from "../dbUrl"
import { useDispatch } from "react-redux";
import { fetchSelectedFurniture } from "../redux/slices/selectedFurniture";


export const Favorites_component = ({name, price, imgsrc, navigation, furnitureId, count}) => {
    const dispatch = useDispatch()
    return(
              <View>
                <Block>
                  <TouchableOpacity onPress={() => {
                    navigation.navigate("Product_page", {furnitureId: furnitureId})
                    dispatch(fetchSelectedFurniture(furnitureId))
                  }}>
                    <Info>
                      <Img source={imgsrc == "1" ? '' : {uri: url + "/uploads/" + furnitureId + "/"  + imgsrc}}/>
                      <View>
                        <Name> {name} </Name>
                        <Price> {price + "₽"}  </Price>
                      </View>
                      <Numerous> {"Количество товара: " + count} </Numerous>
                    </Info>
                  </TouchableOpacity>
                </Block>
        
              </View>
    );
}

const Block = styled.View`
  height: 100px;
  width: auto;
  margin-top: 5px;
  padding: 12px;
  border: 1px #A4A4A4;
  border-radius: 20px;
  background-color: #ffffff;
  margin-left: 5px;
  margin-right: 5px;
`

const Price = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin_left: 10px; 
  margin_top: 35px
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
`;

const Info = styled.View`
  flex-direction: row;
  margin-bottom: 10px; 
  flex-wrap: wrap;
`;

const Numerous = styled.Text`
  color: black;
  margin-left: 30px;
  margin-top: 52px;
  font-weight: 600;
  font-size: 14px;
`;