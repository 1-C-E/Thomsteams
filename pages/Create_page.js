import React from "react";
import {TouchableOpacity, View, Alert} from "react-native";
import styled from 'styled-components'
import Header from "../componenets/Header_2";

export default function Create_Page_1({navigation}) {
    const Alertpress = () => Alert.alert("Внимание!", 'Эта страница пока не доступна для запуска из приложения, мы покажем принцип работы из другого apk файла')
    return (
        <View>

            <Header/>

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
                    <Nadpis> Нейросеть Thomsteams </Nadpis>
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
`;

const Nadpis = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  top: 38%;
`;