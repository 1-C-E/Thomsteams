import React from "react";
import {Image, ImageBackground, TouchableOpacity, View,  ScrollView, Text, StyleSheet} from "react-native";
import styled from 'styled-components';
import Header from "./Header_2";


export default function Profile_() {
    return (
        <View style = {{backgroundColor: 'white'}}>
            <Header/>
            <ScrollView>
                
            <ImageBackground source={require('./../assets/pro_back.jpg')}
                                 style={{paddingHorizontal: 6}}
                                 imageStyle={{borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
           
            <Center>
                
                <Photo_1 style = {{marginTop:10}}>
                    <Image source={require('./../assets/prof_photo.png')} style= {{width: 147, height: 147}}/>
                </Photo_1>

                <Premium style = {{marginTop:10}}>
                    <Prof_Text>Премиум</Prof_Text>
                </Premium>

                <Name style = {{marginTop:10}}>Александр Наумов</Name>

            </Center>
            </ImageBackground>
            <Center>
            <Self_data style = {{marginTop:10}}>
                    <View style = {{flexDirection: 'row'}}>
                    <Text style = {{fontWeight: 600}}> alex.naumov1999@mail.ru</Text>
                    <Text style = {{paddingLeft: 70}}>изменить</Text>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 7}}>
                    <Text style = {{fontWeight: 600}}>+7 914-228-78-56 </Text>
                    <Text style = {{paddingLeft: 125}}>изменить</Text>
                    </View>
                </Self_data>

                <Status style = {{marginTop:10}}>
                    <Text style = {{fontWeight: 600}}>Подписка активна (PREMIUM на 2 месяца)</Text>
                    <View style = {{flexDirection: 'row'}}>
                        <Text style = {{fontWeight: 600, paddingTop: 10}}>Автосписание средств включено</Text>
                        <Text style = {{paddingLeft: 20, paddingTop: 10}}>изменить</Text>
                    </View>
                    <Image source = {require('./../assets/podpiska.png')} style = {{marginLeft: -6, marginTop: 20}}/>
                    <Text style = {{color: 'gray', fontSize: 10, textAlign: 'center' }}>Увеличенные лимиты, доступ к новым возможностям и приоритетная поддержка</Text>
                </Status>

                <Your_furniture style = {{marginTop:10}}>
                    <Text style = {{fontWeight: 600}}>Ваши модели (интерьер, мебель)</Text>
                    <View style = {{flexDirection: 'row', marginTop:10, justifyContent: 'space-between'}}>
                        <Image source={require('./../assets/armchair.jpg')} style = {styles.article_image}></Image>
                        <Image source={require('./../assets/armchair.jpg')} style = {styles.article_image}></Image>
                        <Image source={require('./../assets/armchair.jpg')} style = {styles.article_image}></Image>
                    </View>
                    

                </Your_furniture>
            </Center>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    article_image: {
        width: 100,
        height: 120,
        borderColor: '#B6D3FF',
        borderWidth: 2,
        borderRadius: 14
    },

    furniture: {
        width: 'auto',
        height: 90,
        borderRadius: 12,
    }
});



const  Break = styled.View`
    flex-basis: 2%;
    height: 1px;
`;

const Center = styled.View`
    margin-left: auto;
    margin-right: auto;

`;

const Premium = styled.View`
    background-color: #AFB7FF;
    width: 80px;
    height: 20px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    
`;

const Prof_Text = styled.Text`
    text-align: center;
    font-size: 14px;
    font-weight: 600;
`;

const Photo_1 = styled.View`
    height: 150px;
    border-radius: 75px;
    border: 1.5px #B6D3FF;
    background: #FFF;
    backdrop-filter: blur(12px);
    margin-left: auto;
    margin-right: auto;
`;

const Name = styled.Text`
    text-align: center;
    font-size: 24px;
    font-weight: 600;
`;

const Self_data = styled.View`
    background_color: #F2F2F2;
    width: 330px;
    height: 75px; 
    border-radius: 14px;
    padding: 14px 10px 14px 16px;
    
`;

const Status = styled.View`
    background_color: #F2F2F2;
    width: 330px;
    height: 150px; 
    border-radius: 14px;
    padding: 14px 10px 14px 16px;

`;

const Your_furniture = styled.View`
    background_color: #F2F2F2;
    width: 330px;
    height: 175px; 
    border-radius: 14px;
    padding: 14px 10px 14px 16px;

`;

const Story = styled.Image`


`;