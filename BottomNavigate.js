import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Main_page from './componenets/Main_page';
import Profile_ from './componenets/Profile';
import Create_Page_1 from './componenets/Create_page';

import { First_Product_page } from './navigate';

const Main_Name = "Магазин";
const User = "Профиль";
const Create = "Создать";


const Stack = createBottomTabNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Main_Name} screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let rn = route.name;
                if (rn === Main_Name){
                    return <Image source = {require('./assets/neuronet.png')}/>
                }
                else if (rn === User ){
                    return <Image source = {require('./assets/user.png')} style={{width: 30, height: 30}}/>
                }
                else if (rn === Create ){
                    return <Image source = {require('./assets/plus.png')} style={{width: 30, height: 30}}/>
                }
            }
      })}>
            <Stack.Screen options={{headerShown: false}}
                         name = {Main_Name} component={First_Product_page}
                         />  
            <Stack.Screen options={{headerShown: false}}
                         name = {Create} component={Create_Page_1}/>
            <Stack.Screen options={{headerShown: false}}
                         name = {User} component={Profile_}/>        
        </Stack.Navigator>
    </NavigationContainer>
  );
}