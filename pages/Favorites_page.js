
import styled from 'styled-components';
import Header_2 from "../componenets/Header_2";
import { useDispatch, useSelector } from 'react-redux';
import { accountStatus } from '../redux/slices/account';
import { fetchFavoriteFurniture } from '../redux/slices/favoriteFurniture';
import {Text, View, FlatList, ImageBackground, ScrollView} from 'react-native';
import { Header_1 } from '../componenets/Header';
import { Favorites_component } from '../componenets/Favorites_component';
import React from 'react';

export default function Favorites_pages ({navigation}) {
    const favoritesData = useSelector((state) => state.favoriteFurniture.favoriteFurniture.items)
    const dataStatus = useSelector((state) => state.favoriteFurniture.favoriteFurniture.status)
    const isDataLoaded = dataStatus == "loaded"
    console.log(favoritesData)
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
                    <Text style={{textAlign: 'center', marginTop: 20, marginLeft: 15, fontSize: 28, fontWeight: 600, color: 'black'}}> Избранное </Text>
                    <Text style={{textAlign: 'center', marginTop: 20, fontSize: 28, marginRight: 15, fontWeight: 600, color: 'black'}}> {
                        favoritesData.length == 1 ? favoritesData.length + " Товар"
                        : (favoritesData.length == 2 || favoritesData.length == 3 || favoritesData.length == 4 ? favoritesData.length + " Товара"
                        : favoritesData.length + " Товаров")
                        }</Text>
                </Head>

            {
                  isDataLoaded ? favoritesData.map((obj, index) =>
                    (
                      <Favorites_component
                        key={obj._id}
                        count={obj.count}
                        imgsrc={obj.imageUrl}
                        name={obj.name}
                        price={obj.price}
                        furnitureId={obj._id}
                        navigation={navigation}>
                      </Favorites_component>
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

