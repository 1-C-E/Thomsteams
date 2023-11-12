import React from "react";
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components'

export default function Store_page({navigation}) {
    return (
        <FlexBox>

            <FlexCont>
                <TouchableOpacity onPress={() => navigation.navigate("Product_page")}>
                    <Image source={require('../assets/sofa.jpg')}
                           style={{width: 168, height: 95, borderRadius: 13}}/>
                    <Price>14999₽</Price>
                    <Name>Диван кожанный черный</Name>
                </TouchableOpacity>
            </FlexCont>

            <FlexCont>
                <TouchableOpacity onPress={() => navigation.navigate("Product_page")}>
                    <Image source={require('../assets/table.jpg')}
                           style={{width: 168, height: 95, borderRadius: 13, justifyContent: "space-around"}}/>
                    <Price>10999₽</Price>
                    <Name>Стол натуральное дерево</Name>
                </TouchableOpacity>
            </FlexCont>

            <Break/>

            <FlexCont>
                <TouchableOpacity onPress={() => navigation.navigate("Product_page")}>
                    <Image source={require('../assets/bed.jpg')}
                           style={{width: 168, height: 95, borderRadius: 13}}/>
                    <Price>55499₽</Price>
                    <Name>Кровать двуспальная дуб</Name>
                </TouchableOpacity>
            </FlexCont>

            <FlexCont>
                <TouchableOpacity onPress={() => navigation.navigate("Product_page")}>
                    <Image source={require('../assets/armchair.jpg')}
                           style={{width: 168, height: 95, borderRadius: 13}}/>
                    <Price>19149₽</Price>
                    <Name>Кресло кожанное премиум</Name>
                </TouchableOpacity>
            </FlexCont>

        </FlexBox>
    )
}

const Price = styled.Text`
  position: absolute;
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding-top: 128px;
  padding-left: 10px;
`;

const Name = styled.Text`
  position: absolute;
  color: black;
  font-size: 13px;
  padding-top: 95px;
  padding-left: 10px;
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