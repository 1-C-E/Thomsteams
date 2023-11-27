import React from "react";
import {View, Image, ImageBackground, TouchableOpacity, Text, ScrollView} from 'react-native';
import styled from 'styled-components'
import Header_2 from "../../componenets/Header_2";

export default function Product_page_3({navigation}) {
    return (
        <View>
            <Header_2/>
            <ScrollView>
                <ImageBackground source={require('../../assets/img-main-page/wardrobe.png')}
                                 style={{marginTop: 10, height: 350}}
                                 imageStyle={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}/>

                <Product_information>
                    <Product_name>
                        Шкаф для одежды FUN-5
                        100*210*55
                    </Product_name>

                    <Feedback_block>
                        <Stars>
                            <Image source={require('../../assets/img-product-pages/star_yellow.png')}/>
                            <Image source={require('../../assets/img-product-pages/star_yellow.png')}/>
                            <Image source={require('../../assets/img-product-pages/star_yellow.png')}/>
                            <Image source={require('../../assets/img-product-pages/star_yellow.png')}/>
                            <Image source={require('../../assets/img-product-pages/star_yellow.png')}/>
                        </Stars>
                        <Reviews> 3 отзывов </Reviews>
                        <Questions> 5 вопросов </Questions>
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

                            <Price> 7 856 рублей </Price>

                            <Devilery> Доставим 7 декабря </Devilery>
                        </View>

                        <TouchableOpacity style={{marginTop: 10}}>

                            <ImageBackground source={require('../../assets/img-product-pages/place_an_order.png')}
                                             imageStyle={{borderRadius: 10, height: 40}}>

                                <Place_an_order> Оформить заказ </Place_an_order>

                            </ImageBackground>

                        </TouchableOpacity>
                    </Offer_block>

                    <View style={{flexDirection: 'row', marginTop: 12}}>
                        <Text style={{fontSize: 22, fontWeight: 600}}> Описание </Text>
                        <Text style={{fontSize: 22, fontWeight: 600, color: '#CCC'}}> Характеристики </Text>
                    </View>

                    <Text style={{marginTop: 16, height: 'auto'}}>
                        Представляем вашему вниманию стильный и практичный шкаф для одежды, который станет отличным решением для хранения ваших вещей и украшения интерьера. Этот шкаф идеально подойдет для любой комнаты, будь то спальня, детская или прихожая.

                        Особенности продукта:
                        Прочность и долговечность - изготовлен из качественных материалов и имеет надежную конструкцию, которая гарантирует долговечность и стабильность.
                        Стильный дизайн - современный внешний вид и минималистичная форма, которые идеально впишутся в любой интерьер.
                        Вместимость - большое количество полок и отделений для хранения всей вашей одежды, а также аксессуаров и обуви.
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