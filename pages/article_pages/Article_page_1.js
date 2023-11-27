import React from 'react';
import styled from 'styled-components';
import Header_2 from "../../componenets/Header_2";
import {ScrollView} from 'react-native-gesture-handler';

export default function Article_page_1() {
    return (
        <ScrollView>
            <Header_2/>

            <Center>
                <Main_text> Интерьеры из фильма «Лофт» (The Loft, 2013) </Main_text>
            </Center>
            <Date_text> 9 июля 2022 215 прочитали </Date_text>
            <Info_text> Страна: Бельгия, США </Info_text>
            <Info_text> В ролях: Карл Урбан, Джеймс Марсден, Вентворт Миллер, Эрик Стоунстрит, Маттиас Шонартс </Info_text>
            <Info_text> Рейтинг: Кинопоиск – 6,78; IMDb – 6,3 </Info_text>

            <Center>
                <Main_text> Описание</Main_text>
                <Text_box>
                    <State_text> Пятеро женатых старых друзей совместно снимают респектабельный лофт для своих
                        развлечений на стороне. И все идет хорошо, пока однажды они не находят в квартире труп девушки.
                        Отличный образец криминального детектива, сюжет которого строится на низменных основных
                        инстинктах, присущих всем главным героям.
                    </State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_1/photo_1.jpg')}/>
                <Text_box>
                    <State_text> Здание, которое мы видим в начале фильма, реально существует, это "930 Poydras" в Новом
                        Орлеане. Однако съемочной бригаде не удалось договорится о съемках в нем, все интерьерные сцены
                        были сняты в бельгийской студии недалеко от Брюсселя.
                    </State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_1/photo_2.jpg')}/>
                <Text_box>
                    <State_text>В 2008 году был снят оригинальный бельгийский фильм «Лофт», а спустя несколько лет
                        появился этот голливудский ремейк. В бельгийском «Лофте» также играл Маттиас Шонартс (роль
                        Филипа) и был тот же режиссер.
                    </State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_1/photo_3.jpg')}/>
                <Text_box>
                    <State_text>Сам лофт по задумке создателей должен быть максимально открытым, чтобы герои фильма из
                        любой точки квартиры могли видеть убитую девушку на кровати.</State_text>
                </Text_box>
                <State_phot source={require('../../assets/state_photo/State_1/photo_4.jpg')}/>
                <Text_box>
                    <State_text>
                        Фильм обязателен к просмотру любителям современных интерьеров, закрученных сюжетов и
                        человеческих пороков.
                    </State_text>

                    <Date_text> 9 июля 2022 215 прочитали </Date_text>
                    <Info_text> Страна: Бельгия, США </Info_text>
                    <Info_text> В ролях: Карл Урбан, Джеймс Марсден, Вентворт Миллер, Эрик Стоунстрит, Маттиас
                        Шонартс
                    </Info_text>
                    <Info_text> Рейтинг: Кинопоиск – 6,78; IMDb – 6,3 </Info_text>
                    <Center>
                        <Main_text> Описание </Main_text>
                        <Text_box>
                            <State_text>Пятеро женатых старых друзей совместно снимают респектабельный лофт для своих
                                развлечений на стороне. И все идет хорошо, пока однажды они не находят в квартире труп
                                девушки.
                                Отличный образец криминального детектива, сюжет которого строится на низменных основных
                                инстинктах, присущих всем главным героям.
                            </State_text>
                        </Text_box>
                        <State_phot source={require('../../assets/state_photo/State_1/photo_1.jpg')}/>
                        <Text_box>
                            <State_text> Здание, которое мы видим в начале фильма, реально существует, это "930 Poydras"
                                в Новом
                                Орлеане. Однако съемочной бригаде не удалось договорится о съемках в нем, все
                                интерьерные сцены
                                были сняты в бельгийской студии недалеко от Брюсселя.
                            </State_text>
                        </Text_box>
                        <State_phot source={require('../../assets/state_photo/State_1/photo_2.jpg')}/>
                        <Text_box>
                            <State_text>В 2008 году был снят оригинальный бельгийский фильм «Лофт», а спустя несколько
                                лет
                                появился этот голливудский ремейк. В бельгийском «Лофте» также играл Маттиас Шонартс
                                (роль
                                Филипа) и был тот же режиссер.
                            </State_text>
                        </Text_box>
                        <State_phot source={require('../../assets/state_photo/State_1/photo_3.jpg')}/>
                        <Text_box>
                            <State_text>Сам лофт по задумке создателей должен быть максимально открытым, чтобы герои
                                фильма из
                                любой точки квартиры могли видеть убитую девушку на кровати.
                            </State_text>
                        </Text_box>
                        <State_phot source={require('../../assets/state_photo/State_1/photo_4.jpg')}/>
                        <Text_box>
                            <State_text>
                                Фильм обязателен к просмотру любителям современных интерьеров, закрученных сюжетов и
                                человеческих пороков.
                            </State_text>

                        </Text_box>
                    </Center>
                </Text_box>
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