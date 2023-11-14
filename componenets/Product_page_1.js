import React from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components'
import Header_2 from "./Header_2";

export default function Product_page_1({navigation}) {
    return (
        <View>
            <Header_2/>
            <ScrollView>
                <ImageBackground source={require('./../assets/computer_table.png')}
                                 style={{marginTop: 10, height: 350}}
                                 imageStyle={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}/>

                <Product_information>
                    <Product_name>Стол компьютерный уно-75
                        30*125*225 белый
                    </Product_name>

                    <Feedback_block>
                        <Stars>
                            <Image source={require('./../assets/star_yellow.png')}/>
                            <Image source={require('./../assets/start_gray.png')}/>
                            <Image source={require('./../assets/start_gray.png')}/>
                            <Image source={require('./../assets/start_gray.png')}/>
                            <Image source={require('./../assets/start_gray.png')}/>
                        </Stars>
                        <Reviews>215 отзывов</Reviews>
                        <Questions>78 вопросов</Questions>
                    </Feedback_block>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                            <Camera>
                                <Image source={require('./../assets/camera.png')} style={{width: 40, height: 40}}/>
                                <Text style={{fontSize: 30, fontWeight: 500}}> Опробовать</Text>
                            </Camera>

                        </TouchableOpacity>
                    </View>

                    <Offer_block>
                        <View style={{flexDirection: 'row'}}>
                            <Price>7 856 рублей</Price>
                            <Devilery>Доставим 15 ноября</Devilery>
                        </View>

                        <TouchableOpacity style={{marginTop: 10}}>
                            <ImageBackground source={require('./../assets/place_an_order.png')}
                                             imageStyle={{borderRadius: 10}}>
                                <Place_an_order></Place_an_order>
                            </ImageBackground>
                        </TouchableOpacity>
                    </Offer_block>

                    {/*<Text style ={{fontSize: 30}}>Ты заставлял меня сосать, но я тебе не сосала</Text>*/}
                </Product_information>
            </ScrollView>
        </View>
    );
}

const Product_information = styled.View`
  margin: 10px 20px 0 20px;
`;

const Feedback_block = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;

const Stars = styled.View`
  flex-direction: row;
`;

const Product_name = styled.Text`
  font-size: 21px;
  font-weight: 600;
`;

const Reviews = styled.Text`
  color: #A4A4A4;
  font-size: 10px;
  font-weight: 800;
  margin: 0 0 0 7px;
`;

const Questions = styled.Text`
  color: #A4A4A4;
  font-size: 10px;
  font-weight: 800;
  margin: 0 0 0 117px;
`;

const Offer_block = styled.View`
  margin-top: 10px;
  padding: 20px;
  background-color: #E2E2E2;
  height: 120px;
  width: auto;
  border-radius: 20px;
`;

const Price = styled.Text`
  font-size: 25px;
  font-weight: 600;
`;

const Devilery = styled.Text`
  margin: 16px 0 0 12px;
  color: #A4A4A4;
  font-size: 10px;
  font-weight: 800;
`;

const Place_an_order = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  width: 310px;
  height: 40px;
  border-radius: 10px;
`;

const Camera = styled.View`

  margin-top: 10px;
  padding: 15px;
  background-color: #E2E2E2;
  height: 70px;
  width: auto;
  border-radius: 20px;
  flex-direction: row;
`;