import React from "react";
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components'
import Create_Page  from "./Create_page";
import Navigate from "../navigate";

export default function BottomNav({navigation}) {
    return (
        <Bot>
            <Lower_Nav>
                <TouchableOpacity style={{paddingTop: 7}}>
                    <Image source={require('../assets/home.png')} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop: 7}}>
                    <Image source={require('../assets/plus.png')} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop: 7}}>
                    <Image source={require('../assets/neuronet.png')} style={{width: 30, height: 30}}/>
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
    
    position: absolute;
    top:180%;
    left: 1.5%
`;

