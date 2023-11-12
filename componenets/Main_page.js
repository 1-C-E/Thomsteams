import React, {useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Image, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native';
import styled from 'styled-components';
import Header_1 from "./Header_1";
import BottomNav from "./Bottom_menu";
import Store from "./store";

export default function Main_page({navigation}) {
    return (
        <SafeAreaView>

            <StatusBar></StatusBar>

            <ImageBackground source={require('./../assets/gradient_2.png')}
                             style={{paddingHorizontal: 6}}
                             imageStyle={{borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
                <Header_1/>
                <Input>Введите запрос</Input>

                <Articles_block style={{}}>
                    <Image source={require('./../assets/article_1.png')}
                           style={styles.article_image}/>

                    <Image source={require('./../assets/article_2.png')}
                           style={styles.article_image}/>

                    <Image source={require('./../assets/article_3.png')}
                           style={styles.article_image}/>
                </Articles_block>
            </ImageBackground>

            <FlexBox>
                <FlexCont>
                    <TouchableOpacity onPress={() => navigation.navigate("Product_page")}
                                      style={{padding: 5}}>
                        <Image source={require('../assets/computer_table.png')}
                               style={styles.furniture}/>
                        <Price>14999₽</Price>
                        <Name>Диван кожанный черный</Name>
                    </TouchableOpacity>
                </FlexCont>

                <FlexCont>
                    <TouchableOpacity onPress={() => navigation.navigate("Product_page")}
                                      style={{padding: 5}}>
                        <Image source={require('../assets/table.jpg')}
                               style={styles.furniture}/>
                        <Price>10999₽</Price>
                        <Name>Стол натуральное дерево</Name>
                    </TouchableOpacity>
                </FlexCont>

                <Break/>

                <FlexCont>
                    <TouchableOpacity onPress={() => navigation.navigate("Product_page")}
                                      style={{padding: 5}}>
                        <Image source={require('../assets/bed.jpg')}
                               style={styles.furniture}/>
                        <Price>55499₽</Price>
                        <Name>Кровать двуспальная дуб</Name>
                    </TouchableOpacity>
                </FlexCont>

                <FlexCont>
                    <TouchableOpacity onPress={() => navigation.navigate("Product_page")}
                                      style={{padding: 5}}>
                        <Image source={require('../assets/armchair.jpg')}
                               style={styles.furniture}/>
                        <Price>19149₽</Price>
                        <Name>Кресло кожанное премиум</Name>
                    </TouchableOpacity>
                </FlexCont>

            </FlexBox>

            <BottomNav/>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    article_image: {
        width: 81,
        height: 115,
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 15
    },

    furniture: {
        width: 'auto',
        height: 90,
        borderRadius: 12,
    }
});

const FlexBox = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Articles_block = styled.View`
  flex-direction: row;
  margin: 20px 12px 0 14px;
  padding: 0 2% 25px 2%;
  justify-content: space-between;
  width: auto;
`;

const Input = styled.TextInput`
  margin: 44px 20px 0 20px;
  padding: 6px 0 6px 14px;
  width: auto;
  color: #fff;
  border-width: 1.5px;
  border-radius: 15px;
  border-color: #fff;
`;

const FlexCont = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 14px;
  border: 1.5px #B6D3FF;
  background: #FFF;
  backdrop-filter: blur(12px);
`;

const Name = styled.Text`
  position: absolute;
  color: black;
  font-size: 13px;
  padding-top: 95px;
  padding-left: 10px;
  font-weight: 500;
`;

const Price = styled.Text`
  position: absolute;
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding-top: 128px;
  padding-left: 10px;
`;

const Break = styled.View`
  flex-basis: 100%;
  height: 17px;
`;

