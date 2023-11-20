import React from "react";
import {Image, TouchableOpacity, View, LinearGradient} from "react-native";
import {StatusBar} from 'expo-status-bar';
import styled from 'styled-components'
import BottomNav from "./Bottom_menu";
import Header from "./Header_2";

export default function Create_Page_1({navigation}){
    return(
        <View>
            <StatusBar></StatusBar>
            <Header/>

            <Boxes>
                <Nadpis>Генерация интерьера по фотографии</Nadpis>
            </Boxes>

            <Boxes>
                <Nadpis>Нейросеть Thomsteams</Nadpis>
            </Boxes>
            <Boxes>
                <Nadpis>Песочница</Nadpis>
            </Boxes>

            <BottomNav/>
        </View>
    )
}


const Boxes = styled.View`
margin: 20px 0 0 5px ;
width: 350px;
height: 88px;
border-radius: 14px;
border: 1.5px #D3D3D3;
background: #FFF;
backdrop-filter: blur(12px);
align-items: center;
border-color: #17C8FF;

`;

const Nadpis = styled.Text`

    color: black;
    font-size: 16px;
    font-weight: bold;
    top: 38%;
`;