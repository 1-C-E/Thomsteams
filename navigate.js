import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main_page from "./componenets/Main_page";
import Product_page from "./componenets/Product_page_1";
import Store_page from "./componenets/store";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main_page"
                component={Main_page}
                options={{headerShown: false}}/>

            <Stack.Screen
                name="Product_page"
                component={Product_page}
                options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>;
}