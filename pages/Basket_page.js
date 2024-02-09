import React, {useState} from 'react'
import {Text, View, FlatList, ImageBackground, ScrollView} from 'react-native';
import styled from 'styled-components';
import { Header_1 } from '../componenets/Header';
import {Basket_component} from "../componenets/Basket_component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFurniture } from '../redux/slices/furniture';

export default function Basket_page({navigation}) {
    
    const dbTest = true
    const dispatch = useDispatch()
    const furniture = useSelector((state) => state.furniture.furniture)
    const isFurnitureLoading = furniture.status == 'loading'

    React.useEffect(() => {
      dispatch(fetchFurniture())
    }, [])

    console.log(furniture.items.map((obj, index) => console.log(obj)))
    

    return (
      <ScrollView>
        <View>
             <Header_1 theme = {true} />
            <View style={{ flex: 1}}>
            <ImageBackground source={require('../assets/img-upper-navbar/basket-gradient.png')}
                              style={{flex: 1}}
                              resizeMode={'stretch'}
                             >
                <Head>
                    <Text style={{textAlign: 'center', marginTop: 20, fontSize: 28, fontWeight: 600, color: 'black'}}> Корзина </Text>
                    <Text style={{textAlign: 'center', marginTop: 20, fontSize: 28, fontWeight: 600, color: 'black'}}> {furniture.length + " Товаров"}</Text>
                </Head>

             


            {
                  dbTest ? (isFurnitureLoading ? null : furniture.items.map((obj, index) =>
                    (
                      <Basket_component
                        key = {obj._id}
                        name = {obj.name}
                        price = {obj.price + "₽"}
                        imgsrc = {obj.imageUrl}
                        navigation={navigation}
                        furnitureId={obj._id}
                        description={obj.description}
                        additionalImages={obj.additionalImages}>
                          
                      </Basket_component>
                    )
                  )) : (<Block name = "Стол компьютерный УНО-75 белый" imgsrc = {require("../assets/img-main-page/computer_table.png")} price = "7 599₽" navigation={navigation} navigation_page="Product_page_1" />)
                }

              </ImageBackground>
            </View>
        </View>
      </ScrollView>
    );
}




const Head = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:20px;
`;
