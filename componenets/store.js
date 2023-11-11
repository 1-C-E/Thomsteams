import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components'

export default function Store (){
  return(
    <FlexBox>
      
      <FlexCont>
        <Image source = {require('./../assets/divan.jpg')} style={{width: 168, height: 95, borderRadius: 13}}/>
        <Price>14999₽</Price>
        <Name>Диван кожанный черный</Name>
      </FlexCont>
      
      <FlexCont>
        <Image source = {require('./../assets/stol.jpg')} style={{width: 168, height: 95, borderRadius: 13, justifyContent: "space-around"}}/>
        <Price>10999₽</Price>
        <Name>Стол натуральное дерево</Name>
      </FlexCont>
      <Break/>
      <FlexCont>
        <Image source = {require('./../assets/krovat.jpg')} style={{width: 168, height: 95, borderRadius: 13}}/>
        <Price>55499₽</Price>
        <Name>Кровать двуспальная дуб</Name>
      </FlexCont>
      
      <FlexCont>
        <Image source = {require('./../assets/kreslo.jpg')} style={{width: 168, height: 95, borderRadius: 13}}/>
        <Price>19149₽</Price>
        <Name>Кресло кожанное премиум</Name>
      </FlexCont>
      
    </FlexBox>    
  )
}
const Price = styled.Text`
  position: absolute;
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding-top: 128;
  padding-left: 10;
`;
const Name=styled.Text`
  position: absolute;
  color: black;
  font-size: 14px;
  padding-top: 95;
  padding-left: 10;
  font-weight: 500;

`;


const FlexBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap

`;

const Break = styled.View`
  flex-basis: 100%;
  height: 17px;
`;

const FlexCont = styled.View`
  width: 170px;
  height: 150px;
  border-radius: 14px;
  border: 1px solid #B6D3FF;
  background: #FFF;
  backdrop-filter: blur(12px);
`;