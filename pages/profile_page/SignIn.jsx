import React from "react";
import { useState } from "react";
import {Image, ImageBackground, TouchableOpacity, View, ScrollView, Text, StyleSheet, Alert} from "react-native";
import styled from "styled-components";
import { accountStatus, fetchAccountRegister } from "../../redux/slices/account";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Неверный email').required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
    phone: Yup.string().required('Обязательное поле'),
    name: Yup.string().required('Обязательное поле')
})

export default function SignIn({navigation}){
    const isAuth = useSelector(accountStatus)
    dispatch = useDispatch()
    const onSubmit = (values) => {
        dispatch(fetchAccountRegister(values))
    }

    console.log("account status: " + isAuth)

    if(isAuth == "loaded")
    {
        navigation.navigate("NotLogedIn")
    }

    return(
        <ScrollView>
        <Formik
        initialValues={{email:'', password:'', phone: '', name: ''}}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={SignupSchema}
        >
        {props => (
            <Center>
            <Log_Text>Зарегистрируйте аккаунт сейчас!</Log_Text>
            <Input type="text" placeholder="Введите e-mail" onChangeText={props.handleChange('email')} value={props.values.email}/>
            { props.errors.email ? (<Validation_Text>{props.errors.email}</Validation_Text>) : null }
            <Input type="text" placeholder="Введите имя" onChangeText={props.handleChange('name')} value={props.values.name}/>
            { props.errors.name ? (<Validation_Text>{props.errors.name}</Validation_Text>) : null }
            <Input type="text" placeholder="Введите номер телефона" onChangeText={props.handleChange('phone')} value={props.values.phone}/>
            { props.errors.phone ? (<Validation_Text>{props.errors.phone}</Validation_Text>) : null }
            <Input type="text" placeholder="Введите пароль" secureTextEntry={true} onChangeText={props.handleChange('password')} value={props.values.password}/>
            { props.errors.password ? (<Validation_Text>{props.errors.password}</Validation_Text>) : null }
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
                                }}> Зарегистрироваться </Text>
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
    color: black;
`;

const Validation_Text = styled.Text`
    color: red;
    
`