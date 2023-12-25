import React from "react";
import {Image, ImageBackground, TouchableOpacity, View, ScrollView, Text, StyleSheet, Alert} from "react-native";
import styled from "styled-components";


export default function Log_in(){
    return(
        <Center>
            <Log_Text>Войдите в аккаунт</Log_Text>
            <Input type="text" placeholder="Введите e-mail"/>
            <Input type="text" placeholder="Введите пароль"/>
            <TouchableOpacity>
                            <ImageBackground source={require('../assets/img-profile/place_an_order_2.png')}
                                             imageStyle={{borderRadius: 10}}
                                             style={{marginTop: 14, width: "auto", height: 40}}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    marginTop: 6
                                }}> Войти </Text>
                            </ImageBackground>
                        </TouchableOpacity>
        </Center>
    );

}

const Input = styled.TextInput`
  margin: 10px 20px 0 20px;
  padding: 6px 0 6px 14px;
  width: 300px;
  color: #000000;
  border-width: 1.5px;
  border-radius: 15px;
  border-color:#B6D3FF;
  background-color: #fff
`;

const Center = styled.View`
    margin-left: auto;
    margin-right: auto;
   
    margin-top:80%;
`;

const Log_Text = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;
