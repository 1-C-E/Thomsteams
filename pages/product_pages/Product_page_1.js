import React from "react";
import { useCallback, useState } from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator, RefreshControl} from 'react-native';
import styled from 'styled-components'
import Header_2 from "../../componenets/Header_2";
import Basket_page from "../Basket_page";

const tabs = ["Description", "Characteristics"];
const Product_page_1 = ({navigation}) => {

    const [activeTab, setActiveTab] = useState(tabs[0]);

   /* const description_characteristics = () => {
        swith(activeTab)
        {
            case "Description":
                return (
                    <Basket_page/>
                );

        }
    };*/

    return (
        <View>
            <Header_2/>
            <ScrollView>
                <ImageBackground source={require('../../assets/img-main-page/computer_table.png')}
                                 style={{marginTop: 10, height: 350}}
                                 imageStyle={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}/>

                <Product_information>
                    <Product_name> Кресло мягкое оббитоеi
                    </Product_name>

                    <Feedback_block>
                        <Stars>
                            <Image source={require('../../assets/img-product-pages/star_yellow.png')}/>
                            <Image source={require('../../assets/img-product-pages/start_gray.png')}/>
                            <Image source={require('../../assets/img-product-pages/start_gray.png')}/>
                            <Image source={require('../../assets/img-product-pages/start_gray.png')}/>
                            <Image source={require('../../assets/img-product-pages/start_gray.png')}/>
                        </Stars>
                        <Reviews> 215 отзывов </Reviews>
                        <Questions> 78 вопросов </Questions>
                    </Feedback_block>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>

                            <Camera>
                                <Image source={require('../../assets/img-product-pages/camera.png')}
                                       style={{width: 30, height: 30, marginLeft: 'auto'}}/>
                                <Text style={{fontSize: 22, fontWeight: 500, marginRight: 'auto'}}> Опробовать </Text>
                            </Camera>

                        </TouchableOpacity>
                    </View>

                    <Offer_block>
                        <View style={{flexDirection: 'row'}}>
                            <Price> 7 599 рублей </Price>
                            <Devilery> Доставим 4 декабря </Devilery>
                        </View>

                        <TouchableOpacity style={{marginTop: 10}}>

                            <ImageBackground source={require('../../assets/img-product-pages/place_an_order.png')}
                                             imageStyle={{borderRadius: 10, height: 40}}>

                                <Place_an_order> Оформить заказ </Place_an_order>

                            </ImageBackground>

                        </TouchableOpacity>
                    </Offer_block>

                    <View style={{flexDirection: 'row', marginTop: 12}}
                          tabs={tabs}
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}/>
                   {/* {description_characteristics()}*/}

                    {/*<View style={{flexDirection: 'row', marginTop: 12}}>
                        <Text style={{fontSize: 22, fontWeight: 600}}> Описание </Text>
                        <Text style={{fontSize: 22, fontWeight: 600, color: '#CCC'}}> Характеристики </Text>
                    </View>*/}

                    <Text style={{marginTop: 16, height: 'auto'}}> Кресло мягкое премиум - это элегантное и удобное кресло, идеальное для оформления офиса или домашнего кабинета. Изготовленное из высококачественных материалов, оно обеспечивает комфорт и поддержку в течение всего рабочего дня. Регулируемая высота и угол наклона спинки позволяют настроить кресло под свои индивидуальные потребности, а мягкие подлокотники и устойчивое пятилучиевое основание с колесиками обеспечивают удобство использования. Стильный дизайн и премиум качество материалов делают это кресло идеальным выбором для тех, кто ценит комфорт и элегантность в своем рабочем пространстве.
                    </Text>
                </Product_information>
            </ScrollView>
        </View>
    );
}

const Product_information = styled.View`
  margin: 10px 20px 100px 20px;
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
  margin-top: 6px;
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const Camera = styled.View`
  padding-top: 10px;
  flex-direction: row;
  margin-top: 10px;
  background-color: #E2E2E2;
  height: 52px;
  border-radius: 20px;
`;

export default Product_page_1;