import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {StyleSheet, Image, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView,} from 'react-native';
import styled from 'styled-components';
import { FurnitureBox } from '../componenets/FlexCont';
import { fetchFurniture, fetchFurnitureSearch } from '../redux/slices/furniture';
import { Header_1 } from '../componenets/Header'
import { fetchFavoriteFurniture } from '../redux/slices/favoriteFurniture';


export default function Main_page({navigation}) {
  
    const dbTest = true
    const dispatch = useDispatch()
    const furniture = useSelector((state) => state.furniture.furniture)

    const isFurnitureLoading = furniture.status == 'loading'

    React.useEffect(() => {
      dispatch(fetchFurniture())
    }, [])

    return (
        <SafeAreaView>

            <ScrollView>

                <ImageBackground source={require('../assets/img-main-page/gradient_2.png')}
                                 style={{paddingHorizontal: 6}}
                                 imageStyle={{borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
                    <Header_1 theme = {false} />
                    <Input type="text" placeholder="Введите запрос" onChangeText = {(text) => {
                      text == "" ? dispatch(fetchFurniture()) : dispatch(fetchFurnitureSearch({searchText: text}))
                    }}/>

                    <Articles_block>
                        <TouchableOpacity onPress={() => navigation.navigate("Article_page_1")}>
                            <Image source={require('../assets/state_photo/State_1/photo_1.jpg')}
                                   style={styles.article_image}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Article_page_2")}>
                            <Image source={require('../assets/state_photo/State_2/photo_1.jpg')}
                                   style={styles.article_image}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Article_page_3")}>
                            <Image source={require('../assets/state_photo/State_3/photo_1.jpg')}
                                   style={styles.article_image}/>
                        </TouchableOpacity>

                    </Articles_block>
                </ImageBackground>

                <FlexBox>
             
                {
                  dbTest ? (isFurnitureLoading ? null : furniture.items.map((obj, index) =>
                    (
                      <FurnitureBox
                      key = {obj._id}
                      name = {obj.name}
                      price = {obj.price + "₽"}
                      imgsrc = {obj.imageUrl}
                      navigation={navigation}
                      furnitureId={obj._id}
                      />
                    )
                  )) : (<FurnitureBox name = "Стол компьютерный УНО-75 белый" imgsrc = {require("../assets/img-main-page/computer_table.png")} price = "7 599₽" navigation={navigation} navigation_page="Product_page_1" />)
                }
                </FlexBox>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    article_image: {
        width: 81,
        height: 115,
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 15
    },

    furniture: {
        width: 'auto',
        height: 90,
        borderRadius: 12,
    }
});

const FlexBox = styled.View`
  margin: 20px 0 16px 0;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Articles_block = styled.View`
  flex-direction: row;
  margin: 20px 12px 0 14px;
  padding: 0 2% 25px 2%;
  justify-content: space-between;
  width: auto;
`;

const Input = styled.TextInput`
  margin: -10px 20px 0 20px;
  padding: 6px 0 6px 14px;
  width: auto;
  color: #fff;
  border-width: 1.5px;
  border-radius: 15px;
  border-color: #fff;
`;

const FlexCont = styled.View`
  margin: 0 0 10px 0;
  width: 150px;
  height: 160px;
  border-radius: 14px;
  border: 1.5px #B6D3FF;
  background: #FFF;
`;

const Name = styled.Text`
  font-size: 13px;
  font-weight: 500;
`;

const Price = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const Break = styled.View`
  flex-basis: 100%;
  height: 17px;
`;

const Head = styled.View`
  flex-direction: row;
  margin: 20px 14px 100px 14px;
`;

const Thoms = styled.Text`
  color: #fff;
  font-size: 34px;
  font-weight: 600;
`;

const Navbar = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-top: 12px;

`;

const Nav_element = styled.Text`
  margin-right: auto;
  margin-left: auto;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
`;