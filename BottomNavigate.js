import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Create_Page_1 from './pages/Create_page';
import {First_Product_page, Profile_Page} from './navigate';

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

                    if (rn === Main_Name) {
                        return <Image source={require('./assets/img-lower-navbar/home.png')}
                                    style={{width: 28, height: 28}}/>
                    } else if (rn === User) {
                        return <Image source={require('./assets/img-lower-navbar/user.png')}
                                    style={{width: 28, height: 28}}/>
                    } else if (rn === Create) {
                        return <Image source={require('./assets/img-lower-navbar/plus.png')}
                                    style={{width: 28, height: 28}}/>
                    }
                }
            })}>

                <Stack.Screen options={{headerShown: false}}
                            name={Main_Name} component={First_Product_page}/>

                <Stack.Screen options={{headerShown: false}}
                            name={Create} component={Create_Page_1}/>

                <Stack.Screen options={{headerShown: false}}
                              name={User} component={Profile_Page}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}