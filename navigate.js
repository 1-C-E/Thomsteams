import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Main_page from "./componenets/Main_page";
import Product_page_1 from "./componenets/Product_page_1";
import Product_page_2 from "./componenets/Product_page_2";
import Product_page_3 from "./componenets/Product_page_3";
import Product_page_4 from "./componenets/Product_page_4";
import Camera_1 from "./componenets/Camera";
import Article_1 from "./componenets/Article_1";
import Article_2 from "./componenets/Article_2";
import Article_3 from "./componenets/Article_3";
import Basket from "./componenets/Basket";
import Favorites from "./componenets/Favorites";
import Header_1 from "./componenets/Header_1";
import Header_2 from "./componenets/Header_2";

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
                name="Article_1"
                component={Article_1}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Article_2"
                component={Article_2}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Article_3"
                component={Article_3}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Basket"
                component={Basket}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}

export {First_Product_page}