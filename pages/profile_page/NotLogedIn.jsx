import React from "react";
import {ImageBackground, TouchableOpacity, Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from 'styled-components';

export const NotLogedIn = ({navigation}) => {
    return (
        <ScrollView>
        <Center>
                <Welcome>Добро пожаловать,</Welcome>
                <Welcome>рады вас видеть!</Welcome>
                <Buttons>
                <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                                <ImageBackground source={require('../../assets/img-profile/place_an_order_2.png')}
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

                            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                                <ImageBackground source={require('../../assets/img-profile/place_an_order_2.png')}
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
            </ScrollView>
    );
}


const Welcome = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: black;
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