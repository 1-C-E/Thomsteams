import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main_page from "./componenets/Main_page";
import Product_page from "./componenets/FullScreenProduct";
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