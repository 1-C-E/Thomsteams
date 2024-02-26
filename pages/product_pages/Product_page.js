import React from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import styled from 'styled-components'
import { Header_1 } from '../../componenets/Header'
import { useDispatch, useSelector } from "react-redux";
import { fetchFurnitureExtra } from "../../redux/slices/furnitureExtra";
import { url } from "../../dbUrl";
import { accountStatus, fetchAccountUpdate } from "../../redux/slices/account";
import axios from "axios";
import { fetchSelectedFurniture } from "../../redux/slices/selectedFurniture";
import { Viro3DObject, ViroAmbientLight, ViroScene } from "@viro-community/react-viro";
import { useState } from "react";

const {width} = Dimensions.get("window")
const height = width * 100 / 100

export default function Product_page({navigation, route}) {
    
    const {furnitureId} = route.params

    var allFavorites = []
    var basketItems = []
    var acID = null
    const dispatch = useDispatch()
    const isAuth = useSelector(accountStatus) == "loaded"
    const furnitureExtra = useSelector((state) => state.furnitureExtra.furnitureExtra)
    const curFurniture = useSelector((state) => state.selectedFurniture.items)
    const isFurnitureLoaded = useSelector((state) => state.selectedFurniture.status)
    allFavorites = useSelector((state) => state.account.favorites)
    isInFavorites = allFavorites.includes(furnitureId)
    basketItems = useSelector((state) => state.account.basket)
    acID = useSelector((state) => state.account.accountID)
    loginToken = useSelector((state) => state.account.loginToken)
    const updateFavorites = () => {
      if(acID != null && allFavorites != null)
      {
        allFavorites = allFavorites.slice()
        isInFavorites ? allFavorites.pop(furnitureId) : allFavorites.push(furnitureId)
        dispatch(fetchAccountUpdate([acID, {favorites: allFavorites}, loginToken]))
      }
    }
    const updateBasket = () => {
      if(acID != null && basketItems != null)
      {
        basketItems = basketItems.slice()
        basketItems.push(furnitureId)
        dispatch(fetchAccountUpdate([acID, {basket: basketItems}, loginToken]))
      }
    }

    /*React.useEffect(() => {
      dispatch(fetchFurnitureExtra(furnitureId))
    }, [])*/
    const [status, setStatus] = useState(true);
    return (
        <View>
          <Header_1 theme={true}/>
          {
            curFurniture != null ?
            
            <ScrollView>
              <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={true} style={{width}}>
                <Image 
                  src={url + "/uploads/" + curFurniture._id + "/"  + curFurniture.imageUrl}
                  style={{width, height}}
                  imageStyle={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
                  key = {1}
                />
                {
                  curFurniture.additionalImages.map((u, i) => (
                    <Image 
                      src={url + "/uploads/" + curFurniture._id + "/"  + u}
                      style={{width, height}}
                      imageStyle={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
                      key = {i+1}
                    />
                  ))
                }
              </ScrollView>
                <Product_information>
                    <Product_name> {curFurniture.name} 
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
                        <TouchableOpacity onPress={() => navigation.navigate("AR_Scene", {modelUrl: url + "/uploads/" + curFurniture._id + "/" + curFurniture.dModelUrl})}>

                            <Camera>
                                <Image source={require('../../assets/img-product-pages/camera.png')}
                                       style={{width: 30, height: 30, marginLeft: 'auto'}}/>
                                <Text style={{fontSize: 22, fontWeight: 500, marginRight: 'auto', color: "black"}}> Опробовать </Text>
                            </Camera>

                        </TouchableOpacity>
                    </View>
                    <Offer_block>
                        <View style={{flexDirection: 'row'}}>
                            <Price> {curFurniture.price + "₽"} </Price>
                            <Devilery> Доставим 4 декабря </Devilery>
                        </View>
                        {
                          isAuth ?  <TouchableOpacity style={{marginTop: 10}} onPress={() => {
                            updateBasket()
                          }}>

                          <ImageBackground source={require('../../assets/img-product-pages/place_an_order.png')}
                                           imageStyle={{borderRadius: 10, height: 40}}>

                                  <Place_an_order> Добавить в корзину </Place_an_order>

                              </ImageBackground>

                          </TouchableOpacity>
                          : null
                        }
                       
                        {
                          isAuth ? <TouchableOpacity style={{marginTop: 20}} onPress = {() => {
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
                      <TouchableOpacity onPress = {() => setStatus(true)}>
                          <Text style={{fontSize: 22, fontWeight: 600, color: status ? "black" : '#CCC'}}> Описание </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => setStatus(false)}>
                          <Text style={{fontSize: 22, fontWeight: 600, color: status ? '#CCC' : "black"}}> Характеристики </Text>
                        </TouchableOpacity>
                    </View>
                       {status ? 
                        <Text style={{marginTop: 16, height: 'auto'}}>{curFurniture.description}</Text>
                        :
                        curFurniture.additionalInfo.map((element, index) => (
                            <Opis key = {index}>
                              <Text style = {{fontSize: 16}}>{element.name}</Text>
                              <Text style = {{fontSize: 16}}>{element.value}</Text>
                            </Opis>
                        ))
                       } 
                </Product_information>
            </ScrollView>
            : null
          } 
        </View>
    )
}
const Opis = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Podik = styled.View`
  width: auto;
  height: 1px;
  border-color: gra
`;

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
  color: black;
`;

const Reviews = styled.Text`
  color: #A4A4A4;
  font-size: 10px;
  font-weight: 800;
  margin: 0 0 0 7px;
  color: black
`;

const Questions = styled.Text`
  color: #A4A4A4;
  font-size: 10px;
  font-weight: 800;
  margin: 0 0 0 117px;
  color: black;
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
  color: black;
`;

const Devilery = styled.Text`
  margin: 16px 0 0 12px;
  color: #A4A4A4;
  font-size: 10px;
  font-weight: 800;
  color: black;
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
