import React, {useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import BottomNav from "./Bottom_menu";
import Store from "./store";



export default function Main_page({navigation}) {
    return (
      
        <SafeAreaView style={{ paddingTop: 5}}>
            <StatusBar></StatusBar>
            <Container_1>
                <Thoms>thoms</Thoms>

                <View style={{ paddingTop: 10, justifyContent: 'center'}}>
                    <Image source={require('./../assets/basket.png')}
                           style={{width: 19, height: 19}}/>
                    <Navbar>корзина</Navbar>
                </View>

                <View style={{ paddingTop: 10, justifyContent: 'center'}}>
                    <Image source={require('./../assets/profile.png')}
                           style={{width: 19, height: 19}}/>
                    <Navbar>профиль</Navbar>
                </View>

                <View style={{ paddingTop: 10, justifyContent: 'center'}}>
                    <Image source={require('./../assets/selection.png')}
                           style={{width: 19, height: 19}}/>
                    <Navbar>подбор</Navbar>
                </View>


            </Container_1 >
            <Input>Введите запрос</Input>
            <Container_2 style = {styles.picture}>
                <Image source={require('./../assets/article_1.png')}
                       style={{width: 81, height: 117}}/>

                <Image source={require('./../assets/article_2.png')}
                       style={{width: 81, height: 117}}/>

                <Image source={require('./../assets/article_3.png')}
                       style={{width: 81, height: 117}}/>
            </Container_2>
          
            <FlexBox>
      
              <FlexCont>
                <TouchableOpacity onPress={ () => navigation.navigate("Product_page")}>
                  <Image source = {require('./../assets/divan.jpg')} style={{width: 168, height: 95, borderRadius: 13}}/>
                  <Price>14999₽</Price>
                  <Name>Диван кожанный черный</Name>
                </TouchableOpacity>
              </FlexCont>
              
              <FlexCont>
                <TouchableOpacity onPress={ () => navigation.navigate("Product_page")}>
                  <Image source = {require('./../assets/stol.jpg')} style={{width: 168, height: 95, borderRadius: 13, justifyContent: "space-around"}}/>
                  <Price>10999₽</Price>
                  <Name>Стол натуральное дерево</Name>
                </TouchableOpacity>
              </FlexCont>
              <Break/>
              <FlexCont>
                <TouchableOpacity onPress={ () => navigation.navigate("Product_page")}>
                  <Image source = {require('./../assets/krovat.jpg')} style={{width: 168, height: 95, borderRadius: 13}}/>
                  <Price>55499₽</Price>
                  <Name>Кровать двуспальная дуб</Name>
                </TouchableOpacity>
              </FlexCont>
              
              <FlexCont>
                <TouchableOpacity onPress={ () => navigation.navigate("Product_page")}>
                  <Image source = {require('./../assets/kreslo.jpg')} style={{width: 168, height: 95, borderRadius: 13}}/>
                  <Price>19149₽</Price>
                  <Name>Кресло кожанное премиум</Name>
                </TouchableOpacity>
              </FlexCont>
            </FlexBox>    
            <BottomNav> </BottomNav>
          
        </SafeAreaView>
      
    );
}

const styles = StyleSheet.create({
  picture:{
    justifyContent: 'space-around',
  },

});

const Container_2 = styled.View`
flex-direction: row;
  margin: 20px 12px 44px 14px;
  
`;



const Thoms = styled.Text`
  flex: 1;
  color: black;
  font-size: 34px;
  font-weight: 600;

`
const Navbar = styled.Text`
  margin: 0 10px 0 0;
  color: black;
  font-size: 10px;
  font-weight: 600;
`

const Container_1 = styled.View`
  flex-direction: row;
  margin: 20px 12px 44px 14px;
`
const Button = styled.Text`
  background-color: black;
  border-radius: 10px;
`
const Input = styled.Text`
  margin: 44px 20px 0 20px;
  padding: 10px 0 10px 14px;
  color: black;
  border-width: 1.5px;
  border-radius: 15px;
  border-color: grey;
`

const Price = styled.Text`
  position: absolute;
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding-top: 128px;
  padding-left: 10px;
`;
const Name=styled.Text`
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