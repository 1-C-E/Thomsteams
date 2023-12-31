import React, {useState} from 'react'
import {Text, View, FlatList, ImageBackground} from 'react-native';
import styled from 'styled-components';
import Header_2 from "../componenets/Header_2";
import Basket_component from "../componenets/Basket_component";

export default function Basket_page() {
    
    const [listOfItems, setListOfItems] = useState([
        {text: 'стул', index: 1},
        {text: 'шкаф', index: 1},
        {text: 'стол', index: 1},
        {text: 'кресло', index: 1},
    ])

    return (
        <View>

            <ImageBackground source={require('../assets/img-upper-navbar/basket-gradient.png')}>
                <Text style={{textAlign: 'center', marginTop: 100, fontSize: 35}}> Корзина </Text>

                <FlatList data={listOfItems} renderItem={({item}) => (
                   <Basket_component el={item}/>
                )}/>
            </ImageBackground>
        </View>
    );
}
