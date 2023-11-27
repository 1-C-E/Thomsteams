import React from 'react';
import styled from 'styled-components';
import Header_2 from "../../componenets/Header_2";
import {ScrollView} from 'react-native-gesture-handler';

export default function Article_page_3() {
    return (
        <ScrollView>
            <Header_2/>

            <Center>
                <Main_text> Мансарда в скандинавском стиле </Main_text>
            </Center>
            <Date_text> 28 июня 2022 331 прочитал </Date_text>
            <Info_text> Место: Гётеборг, Швеция </Info_text>
            <Info_text> Площадь: 36 м2 </Info_text>
            <Info_text> Источник: АН Stadshem </Info_text>

            <Center>
                <Main_text> Описание </Main_text>
                <Text_box>
                    <State_text> Небольшое светлое и уютное пространство в скандинавском стиле, которое одновременно
                        служит гостиной, столовой, кухней и спальней. Грамотный подход к функциональному зонированию
                        этой мансарды придал ей особый шарм и атмосферность. А по наполнению все довольно просто, но со
                        вкусом.
                    </State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_3/photo_1.jpg')}/>

                <State_phot source={require('../../assets/state_photo/State_3/photo_2.jpg')}/>

                <State_phot source={require('../../assets/state_photo/State_3/photo_3.jpg')}/>

                <State_phot source={require('../../assets/state_photo/State_3/photo_4.jpg')}/>

                <State_phot source={require('../../assets/state_photo/State_3/photo_5.jpg')}/>
            </Center>
        </ScrollView>
    );
}


const State_phot = styled.Image`
  width: 400px;
  height: 300px;
  margin-bottom: 7px;
`;

const State_text = styled.Text`
  margin-left: 10px;
  font-size: 16px;
`;

const Main_text = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const Date_text = styled.Text`
  margin-left: 10px;
  color: gray;
`;

const Info_text = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
`;

const Center = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const Text_box = styled.View`
  width: 350px;
  height: auto;
  margin-bottom: 7px;
`;