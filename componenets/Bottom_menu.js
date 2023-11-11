import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components'

export default function BottomNav() {
    return (
        <Bot>
            <Lower_Nav>
                <TouchableOpacity style={{ paddingTop: 7}}>
                    <Image source = {require('./../assets/3d_space.png')} style={{width: 30, height: 30}}  />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingTop: 7}}>
                    <Image source = {require('../assets/plus.png')} style={{width: 30, height: 30}} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingTop: 7}}>
                    <Image source = {require('./../assets/5.png')} style={{width: 30, height: 30}} />
                </TouchableOpacity>
            </Lower_Nav>
        </Bot>
    );
}

const Lower_Nav = styled.View`
  width: 350px;
  height: 50px;
  border: 1px solid #CCC;
  border-radius: 14px;
  background: #FFF;
  backdrop-filter: blur(12px);
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  flex-direction: row
`;

const Bot = styled.View`
    top: 1%;
`;

