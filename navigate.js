import React from "react";
import Bottom_menu from './componenets/Bottom_menu';
import Main_page from "./componenets/Main_page";

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main_page"
                component={Main_page}
                options={{title: 'Главная страница'}}/>
            <Stack.Screen
                name="Bottom_menu"
                component={Bottom_menu}
                options={{title: 'Нижнее меню'}}/>


        </Stack.Navigator>
    </NavigationContainer>;
}