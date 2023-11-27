import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Main_page from "./pages/Main_page";

import Article_page_1 from "./pages/article_pages/Article_page_1";
import Article_page_2 from "./pages/article_pages/Article_page_2";
import Article_page_3 from "./pages/article_pages/Article_page_3";

import Product_page_1 from "./pages/product_pages/Product_page_1";
import Product_page_2 from "./pages/product_pages/Product_page_2";
import Product_page_3 from "./pages/product_pages/Product_page_3";
import Product_page_4 from "./pages/product_pages/Product_page_4";
import Basket_page from "./pages/Basket_page";
import Favorites_page from "./pages/Favorites_page";
import Camera_1 from "./componenets/Camera";

const Stack = createStackNavigator();

const First_Product_page = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main_page"
                component={Main_page}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Product_page_1"
                component={Product_page_1}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Product_page_2"
                component={Product_page_2}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Product_page_3"
                component={Product_page_3}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Product_page_4"
                component={Product_page_4}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Camera"
                component={Camera_1}
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

        </Stack.Navigator>
    )
}

export {First_Product_page}