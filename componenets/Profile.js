import React from "react";
import {Image, ImageBackground, TouchableOpacity, View,  ScrollView} from "react-native";
import styled from 'styled-components';
import Header from "./Header_2";


export default function Profile_() {
    return (
        <ScrollView>
            <Header/>
            <Photo></Photo>
        </ScrollView>
    )
}

const Photo = styled.View`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    border: 1.5px #B6D3FF;
    background: #FFF;
    backdrop-filter: blur(12px);
`;

const Profile = styled.Text`
  font-size: 34px;
  font-weight: 600;
`;