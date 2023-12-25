import React from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import styled from 'styled-components'
import Header_2 from "../../componenets/Header_2";
import { useDispatch, useSelector } from "react-redux";
import { fetchFurnitureExtra } from "../../redux/slices/furnitureExtra";
import { url } from "../../dbUrl";
import { accountStatus, fetchAccountUpdate } from "../../redux/slices/account";
import axios from "axios";

const {width} = Dimensions.get("window")
const height = width * 100 / 100

export default function Product_page({navigation, route}) {
    
    const { name, price, furnitureId, imageUrl, description, additionalImages } = route.params

    var allFavorites = []
    var acID = null
    const dispatch = useDispatch()
    const isAuth = useSelector(accountStatus) == "loaded"
    const furnitureExtra = useSelector((state) => state.furnitureExtra.furnitureExtra)

    const isFurnitureLoading = furnitureExtra.status == 'loading'

    allFavorites = useSelector((state) => state.account.favorites)
    isInFavorites = allFavorites.includes(furnitureId)
    console.log(isInFavorites)
    acID = useSelector((state) => state.account.accountID)
    loginToken = useSelector((state) => state.account.loginToken)
    console.log(loginToken)
    const updateFavorites = () => {
      if(acID != null && allFavorites != null)
      {
        allFavorites = allFavorites.slice()
        isInFavorites ? allFavorites.pop(furnitureId) : allFavorites.push(furnitureId)
        dispatch(fetchAccountUpdate([acID, {favorites: allFavorites}, loginToken]))
      }
    }

    /*React.useEffect(() => {
      dispatch(fetchFurnitureExtra(furnitureId))
    }, [])*/

    return (
        <View>
            <Header_2/>
            <ScrollView>
              <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={true} style={{width}}>
                <Image 
                  src={url + "/uploads/" + imageUrl}
                  style={{width, height}}
                  imageStyle={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
                  key = {1}
                />
                {
                  additionalImages.map((u, i) => (
                    <Image 
                      src={url + "/uploads/" + u}
                      style={{width, height}}
                      imageStyle={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
                      key = {i+1}
                    />
                  ))
                }
              </ScrollView>
            
                <Product_information>
                    <Product_name> {name} 
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
                            <Price> {price} </Price>
                            <Devilery> Доставим 4 декабря </Devilery>
                        </View>

                        <TouchableOpacity style={{marginTop: 10}}>

                            <ImageBackground source={require('../../assets/img-product-pages/place_an_order.png')}
                                             imageStyle={{borderRadius: 10, height: 40}}>

                                <Place_an_order> Оформить заказ </Place_an_order>

                            </ImageBackground>

                        </TouchableOpacity>
                        {
                          isAuth ? <TouchableOpacity style={{marginTop: 10}} onPress = {() => {
                            updateFavorites()
                          }}>

                          <ImageBackground source={require('../../assets/img-product-pages/place_an_order.png')}
                                           imageStyle={{borderRadius: 10, height: 40}}>

                              {
                                isInFavorites
                                ? <Place_an_order> Удалить из избранного </Place_an_order>
                                : <Place_an_order> Добавить в избранное </Place_an_order>
                              }
                              

                          </ImageBackground>

                        </TouchableOpacity> : null
                        }
                        
                    </Offer_block>

                    <View style={{flexDirection: 'row', marginTop: 12}}>
                        <Text style={{fontSize: 22, fontWeight: 600}}> Описание </Text>
                        <Text style={{fontSize: 22, fontWeight: 600, color: '#CCC'}}> Характеристики </Text>
                    </View>
                    {isFurnitureLoading ? 
                    <Text style={{marginTop: 16, height: 'auto'}}> Кресло мягкое премиум - это элегантное и удобное кресло, идеальное для оформления офиса или домашнего кабинета. Изготовленное из высококачественных материалов, оно обеспечивает комфорт и поддержку в течение всего рабочего дня. Регулируемая высота и угол наклона спинки позволяют настроить кресло под свои индивидуальные потребности, а мягкие подлокотники и устойчивое пятилучиевое основание с колесиками обеспечивают удобство использования. Стильный дизайн и премиум качество материалов делают это кресло идеальным выбором для тех, кто ценит комфорт и элегантность в своем рабочем пространстве.
                    </Text> : (
                      <Text style={{marginTop: 16, height: 'auto'}}>{description}</Text>
                    )

                    }
                    
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
  height: 170px;
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