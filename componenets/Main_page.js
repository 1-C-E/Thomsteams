import React from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import styled from 'styled-components';

export default function Main_page() {
    return (
        <Main_Container>
            <StatusBar></StatusBar>
            <Container_1>
                <Thoms>thoms</Thoms>

                <View>
                    <Image source={require('./../assets/basket.png')}
                           style={{width: 19, height: 19}}/>
                    <Navbar>корзина</Navbar>
                </View>

                <View>
                    <Image source={require('./../assets/profile.png')}
                           style={{width: 19, height: 19}}/>
                    <Navbar>профиль</Navbar>
                </View>

                <View>
                    <Image source={require('./../assets/selection.png')}
                           style={{width: 19, height: 19}}/>
                    <Navbar>подбор</Navbar>
                </View>


            </Container_1>
            <Input>Введите запрос</Input>
            <Container_1>
                <Image source={require('./../assets/article_1.png')}
                       style={{width: 81, height: 117}}/>

                <Image source={require('./../assets/article_2.png')}
                       style={{width: 81, height: 117}}/>

                <Image source={require('./../assets/article_3.png')}
                       style={{width: 81, height: 117}}/>
            </Container_1>
        </Main_Container>
    );
}

const Main_Container = styled.View`

  background-color: #9FDACE;

`

const Thoms = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 34px;
  font-weight: 600;

`
const Navbar = styled.Text`
  margin: 14px 10px 0 0;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`

const Container_1 = styled.View`
  flex-direction: row;
  margin: 20px 12px 44px 14px;
`
const Button = styled.Text`
  background-color: #fff;
  border-radius: 10px;
`
const Input = styled.Text`
  margin: 44px 20px 0 20px;
  padding: 10px 0 10px 14px;
  color: #fff;
  border-width: 1.5px;
  border-radius: 15px;
  border-color: #fff;
`
