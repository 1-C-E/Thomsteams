import {Text, View} from 'react-native';
import styled from 'styled-components';
import Header_2 from "../componenets/Header_2";
import { useDispatch, useSelector } from 'react-redux';
import { accountStatus } from '../redux/slices/account';
import { fetchFavoriteFurniture } from '../redux/slices/favoriteFurniture';
import React from 'react';

export default function Favorites_pages () {
    const favoritesData = useSelector((state) => state.favoriteFurniture.favoriteFurniture.items)
    const dataStatus = useSelector((state) => state.favoriteFurniture.favoriteFurniture.status)
    const isDataLoaded = dataStatus == "loaded"
    console.log(favoritesData)
    return (
        <View>
            <Text style={{textAlign: 'center', marginTop: 100, fontSize: 35}}> Избранное </Text>
            {
                isDataLoaded ? <Text>Loaded</Text> : <Text>Loading</Text>
            }
        </View>
    );
}