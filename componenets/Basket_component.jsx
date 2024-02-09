import React from "react";
import {StyleSheet, Image, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, View, Text} from 'react-native';
import styled from "styled-components";
import {url} from "../dbUrl"

export const Basket_component = ({name, price, imgsrc, navigation, furnitureId, description, additionalImages}) => {
    return (
      <View>
        <Block>
          <TouchableOpacity onPress={() => navigation.navigate("Product_page", {
            furnitureId: furnitureId,
            name: name,
            price: price,
            imageUrl: imgsrc,
            description: description,
            additionalImages: additionalImages
          })}>
            <Info>
              <Img source={imgsrc == "1" ? '' : {uri: url + "/uploads/" + furnitureId + "/"  + imgsrc}}/>
              <View>
                <Name> "Стол компьютерный УНО-75 белый" </Name>
                <Price> {price}  </Price>
              </View>
            </Info>
          </TouchableOpacity>
        </Block>

      </View>
    )
}


const Block = styled.View`
  height: 100px;
  width: 350px;
  margin-top: 5px;
  padding: 12px;
  border: 1px #A4A4A4;
  border-radius: 20px;
  background-color: #ffffff;
  margin-left: 5px

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