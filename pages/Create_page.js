import React from "react";
import {TouchableOpacity, View, Alert} from "react-native";
import styled from 'styled-components'
import { Header_1 } from '../componenets/Header'
import { ViroScene, ViroText } from "@viro-community/react-viro";

export default function Create_Page_1() {
    const Alertpress = () => Alert.alert("Внимание!", 'Эта страница пока не доступна для запуска из приложения, мы покажем принцип работы из другого apk файла')
    return (
        <View>

            <Header_1 theme = {true} />

            <TouchableOpacity onPress={Alertpress}>
                <Boxes>
                    <Nadpis> Генерация интерьера </Nadpis>
                </Boxes>
            </TouchableOpacity>

            <TouchableOpacity onPress={Alertpress}>
                <Boxes>
                    <Nadpis> Песочница </Nadpis>
                </Boxes>
            </TouchableOpacity>

            <TouchableOpacity onPress={Alertpress}>
                <Boxes_cool>
                    <Nadpis> Попробовать в AR </Nadpis>
                </Boxes_cool>
            </TouchableOpacity>

        </View>
    )
}

const Boxes = styled.View`
  margin: 20px 0 0 5px;
  width: 350px;
  height: 88px;
  border-radius: 14px;
  border: 1.5px;
  background: #FFF;
  align-items: center;
  border-color: #17C8FF;
  align-self: center;
`;

const Boxes_cool = styled.View`
  margin: 20px 0 0 5px;
  width: 350px;
  height: 88px;
  border-radius: 14px;
  border: 1.5px #B6D3FF;
  background: #FFF;
  backdrop-filter: blur(12px);
  align-items: center;
  align-self: center;
`;

const Nadpis = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  top: 38%;
`;