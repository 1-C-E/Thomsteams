import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { accountStatus } from "../../redux/slices/account";
import { Logedin } from "./LogedIn";
import { NotLogedIn } from "./NotLogedIn";

export default function Profile({navigation}){
    const isAuth = useSelector(accountStatus)
    return(
        <View>
            {
                isAuth == "loaded" 
                ? <Logedin/> 
                : <NotLogedIn navigation={navigation}/>
            }
        </View>
        
    )
}



