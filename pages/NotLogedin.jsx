import React from "react";
import {Image, ImageBackground, TouchableOpacity, View, ScrollView, Text, StyleSheet, Alert} from "react-native";
import styled from "styled-components";

export default function Not_Logedin(){

    return(
        <Center>
            <Welcome>Добро пожаловать,</Welcome>
            <Welcome>рады вас видеть!</Welcome>
            <Buttons>
            <TouchableOpacity>
                            <ImageBackground source={require('../assets/img-profile/place_an_order_2.png')}
                                             imageStyle={{borderRadius: 10}}
                                             style={{marginTop: 14, width: 'auto', height: 40}}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    marginTop: 6
                                }}> Войти </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/img-profile/place_an_order_2.png')}
                                             imageStyle={{borderRadius: 10}}
                                             style={{marginTop: 14, width: 'auto', height: 40}}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    marginTop: 6
                                }}> Зарегистрироваться </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Buttons>
        </Center>
    );
}



const Welcome = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;

const Buttons = styled.View`
 margin-bot: auto;
 margin-top: auto;
 
 justify-content: space-between;
`;

const Center = styled.View`
    margin-left: auto;
    margin-right: auto;
   
    margin-top:80%;
`;

