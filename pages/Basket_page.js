import React, {useState} from 'react'
import {Text, View, FlatList, ImageBackground, ScrollView} from 'react-native';
import styled from 'styled-components';
import { Header_1 } from '../componenets/Header';
import {Basket_component} from "../componenets/Basket_component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFurniture } from '../redux/slices/furniture';

export default function Basket_page({navigation}) {
    
    const furniture = useSelector((state) => state.furniture.furniture)
    const isFurnitureLoading = furniture.status == 'loading'

    const basketData = useSelector((state) => state.basket.basket.items)
    const dataStatus = useSelector((state) => state.basket.basket.status)
    const isDataLoaded = dataStatus == "loaded"

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
                    <Text style={{textAlign: 'center', marginTop: 20, fontSize: 28, fontWeight: 600, color: 'black'}}> {
                        basketData.length == 1 ? basketData.length + " Товар"
                        : (basketData.length == 2 || basketData.length == 3 || basketData.length == 4 ? basketData.length + " Товара"
                        : basketData.length + " Товаров")
                        }</Text>
                </Head>

            {
                  isDataLoaded ? basketData.map((obj, index) =>
                    (
                      <Basket_component
                        key={obj._id}
                        count={obj.count}
                        imgsrc={obj.imageUrl}
                        name={obj.name}
                        price={obj.price}
                        furnitureId={obj._id}
                        navigation={navigation}>
                      </Basket_component>
                    )
                  ) : null
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
