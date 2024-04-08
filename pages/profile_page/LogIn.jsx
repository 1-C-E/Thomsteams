import React from "react";
import {ImageBackground, TouchableOpacity, Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { accountStatus, fetchAccountLogin } from "../../redux/slices/account";
import { Formik } from "formik";
import { ScrollView } from "react-native-gesture-handler";

export default function LogIn({navigation}){
    var isAuth = useSelector(accountStatus)
    dispatch = useDispatch()
    const onSubmit = (values) => {
        dispatch(fetchAccountLogin(values))
    }

    if(isAuth == "loaded")
    {
        navigation.navigate("NotLogedIn")
    }


    console.log("account status: " + isAuth)

    return(
        <ScrollView>
        <Formik
        initialValues={{email:'', password:''}}
        onSubmit={(values) => onSubmit(values)}
        >
        {(props) => (
            <Center>
            <Log_Text>Войдите в аккаунт</Log_Text>
            <Input type="text" placeholder="Введите e-mail" onChangeText={props.handleChange('email')} value={props.values.email}/>
            <Input type="text" placeholder="Введите пароль" secureTextEntry={true} onChangeText={props.handleChange('password')} value={props.values.password}/>
            { isAuth == "rejected" 
            ? <Text> Неверный логин или пароль</Text>
            : null}
            <TouchableOpacity onPress={props.handleSubmit}>
                            <ImageBackground source={require('../../assets/img-profile/place_an_order_2.png')}
                                             imageStyle={{borderRadius: 10}}
                                             style={{marginTop: 14, width: "auto", height: 40}}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    textAlign: 'center',
                                    marginTop: 6
                                }}> Войти </Text>
                            </ImageBackground>
                        </TouchableOpacity>
        </Center>
        )}
        </Formik>
        </ScrollView>
    );

}

const Input = styled.TextInput`
  margin: 10px 20px 0 20px;
  padding: 6px 0 6px 14px;
  width: 300px;
  color: #000000;
  border-width: 1.5px;
  border-radius: 15px;
  border-color:#B6D3FF;
  background-color: #fff
`;

const Center = styled.View`
    margin-left: auto;
    margin-right: auto;
   
    margin-top:80%;
`;

const Log_Text = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: black
`;
