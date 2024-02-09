import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Main_page from "./pages/Main_page";

import Article_page_1 from "./pages/article_pages/Article_page_1";
import Article_page_2 from "./pages/article_pages/Article_page_2";
import Article_page_3 from "./pages/article_pages/Article_page_3";
import Product_page from "./pages/product_pages/Product_page";
import Basket_page from "./pages/Basket_page";
import Favorites_page from "./pages/Favorites_page";
import AR_Scene from "./componenets/Viro_1";

import LogIn from "./pages/profile_page/LogIn";
import SignIn from "./pages/profile_page/SignIn";
import Profile from "./pages/profile_page/Profile";

const Stack = createStackNavigator();

export function First_Product_page(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main_page"
                component={Main_page}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Product_page"
                component={Product_page}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Article_page_1"
                component={Article_page_1}
                options={{headerShown: false}}/>
                
            <Stack.Screen
                name="Article_page_2"
                component={Article_page_2}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Article_page_3"
                component={Article_page_3}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Basket_page"
                component={Basket_page}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Favorites_page"
                component={Favorites_page}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="AR_Scene"
                component={AR_Scene}
                options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}
export function Profile_Page() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NotLogedIn"
                component={Profile}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}

