import React from 'react';
import styled from 'styled-components';
import Header_2 from "../../componenets/Header_2";
import {ScrollView} from 'react-native-gesture-handler';

export default function Article_page_2() {
    return (
        <ScrollView>
            <Header_2/>

            <Center>
                <Main_text> Элегантная контрастная квартира </Main_text>
            </Center>
            <Date_text> 4 июля 2022 455 прочитали </Date_text>
            <Info_text> Место: Париж, Франция </Info_text>
            <Info_text> Площадь: 400 м2 </Info_text>
            <Info_text> Авторы: Studio Asai </Info_text>

            <Center>
                <Main_text> Описание</Main_text>
                <Text_box>
                    <State_text>Изначально эта квартира в Париже была испорченна неудачным ремонтом и перепланировками.
                        К работе над ней был приглашен декоратор Антуан Симонан.</State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_2/photo_1.jpg')}/>
                <Text_box>
                    <State_text>
                        Одной из проблемных зон стала просторная прихожая, лишенная притока дневного света. Симонан не
                        побоялся использовать черно-зеленый цвет для окраски стен и потолка, превратив комнату в
                        драгоценную шкатулку с огромным состаренным зеркалом, бархатным диваном и каскадом хрустальных
                        светильников Baccarat. Когда перекрашиваешь все в темные цвета, привычные ориентиры теряются, а
                        предметы выступают на первый план и воспринимаются по-новому.
                    </State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_2/photo_2.jpg')}/>
                <Text_box>
                    <State_text>Классическая гостиная с мраморным камином окрашена в сливочный цвет, а пропорции комнаты
                        подчеркнуты лепными профилями, панелями и карнизами. Совмещенная кухня-столовая выглядит более
                        современной: здесь в центре внимания гарнитур с отделкой из бельгийского голубого известняка и
                        монолитный обеденный стол.
                    </State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_2/photo_3.jpg')}/>
                <Text_box>
                    <State_text>
                        Строгость и сдержанность архитектурного решения декоратор дополнил эклектичным подходом к выбору
                        предметов обстановки: здесь легко уживаются датские модернистские кресла, редкие коллекционные
                        вазы, африканская скульп­тура, современные минималистские светильники и стулья.</State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_2/photo_4.jpg')}/>
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

