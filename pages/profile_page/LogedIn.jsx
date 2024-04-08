import React from "react";
import {Image, ImageBackground, TouchableOpacity, View, ScrollView, Text, StyleSheet, Alert} from "react-native";
import styled from 'styled-components';
import { Header_1 } from '../../componenets/Header'
import { useSelector } from "react-redux";

export const Logedin = () => {
    const thx = () => Alert.alert("Огромное спасибо!", "Мы рады, что смогли вас заинтересовать в продлении подписки, но пока мы не можем взымать финансы")
    const user = useSelector((state) => state.account)
    console.log(user)
    return (
        <View style={{backgroundColor: 'white'}}>
            <Header_1 theme = {true} />
            <ScrollView>
                <Center>

                    <ImageBackground source={require('../../assets/img-profile/pro_back.jpg')}
                                     style={{paddingHorizontal: 6}}
                                     imageStyle={{borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>


                        <Photo_1 style={{marginTop: 10}}>
                            <Image source={require('../../assets/img-profile/ava.png')}
                                   style={{width: 147, height: 147, borderRadius: 75}}/>
                        </Photo_1>

                        <Premium>
                            <Prof_Text> Премиум </Prof_Text>
                        </Premium>

                        <Name style={{marginTop: 10}}> {user.name} </Name>

                    </ImageBackground>

                    <Profile_block style={{marginTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text_in_prof_block> {user.email} </Text_in_prof_block>
                            <To_change> изменить </To_change>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 7}}>
                            <Text_in_prof_block> {user.phone} </Text_in_prof_block>
                            <To_change> изменить </To_change>
                        </View>
                    </Profile_block>

                    <Profile_block style={{marginTop: 10}}>
                        <Text_in_prof_block> Подписка активна (PREMIUM на 2 месяца) </Text_in_prof_block>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Text_in_prof_block> Автосписание средств включено </Text_in_prof_block>
                            <To_change> изменить </To_change>
                        </View>

                        <TouchableOpacity onPress={thx}>
                            <ImageBackground source={require('../../assets/img-profile/place_an_order_2.png')}
                                             imageStyle={{borderRadius: 10}}
                                             style={{marginTop: 14, width: 'auto', height: 40}}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    marginTop: 6
                                }}> Продлить подписку </Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <Text style={{marginTop: 8, color: 'gray', fontSize: 10, textAlign: 'center'}}>
                            Увеличенные лимиты, доступ к
                            новым возможностям и приоритетная поддержка
                        </Text>
                    </Profile_block>

                    <Profile_block style={{marginTop: 10}}>
                        <Text style={{fontWeight: 600, color: "black"}}> Ваши модели (интерьер, мебель) </Text>

                        <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>

                            <TouchableOpacity>
                                <Image source={require('../../assets/img-main-page/armchair.jpg')}
                                       style={styles.article_image}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={require('../../assets/img-main-page/computer_table.png')}
                                       style={styles.article_image}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <Image source={require('../../assets/img-main-page/bed.jpg')}

                                       style={styles.article_image}></Image>
                            </TouchableOpacity>
                        </View>

                    </Profile_block>
                </Center>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    article_image: {
        width: 95,
        height: 120,
        borderColor: '#B6D3FF',
        borderWidth: 2,
        borderRadius: 14
    },

    furniture: {
        width: 'auto',
        height: 90,
        borderRadius: 12,
    }
});

const Center = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

const Premium = styled.View`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #AFB7FF;
  width: 80px;
  height: 27px;
  border-radius: 15px;
`;

const Prof_Text = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

const Photo_1 = styled.View`
  margin-left: auto;
  margin-right: auto;
  height: 150px;
  border-radius: 75px;
  border: 1.5px #B6D3FF;
  background: #FFF;
`;

const Name = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: black;
`;

const Profile_block = styled.View`
  background-color: #F2F2F2;
  width: 330px;
  border-radius: 14px;
  padding: 14px 16px 14px 16px;
`;

const Text_in_prof_block = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color:black;
`;

const To_change = styled.Text`
  margin-left: auto;
  font-size: 12px;
  font-weight: 500;
  color:black;
`;
