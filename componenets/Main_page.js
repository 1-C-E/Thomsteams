import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Image, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView,} from 'react-native';
import styled from 'styled-components';
import Header_1 from "./Header_1";
import Navigation from "../navigate";
import Navigate from "../navigate";

export default function Main_page({navigation}) {
    return (
        <SafeAreaView>

            <StatusBar></StatusBar>
            <ScrollView>

                <ImageBackground source={require('../assets/img-main-page/gradient_2.png')}
                                 style={{paddingHorizontal: 6}}
                                 imageStyle={{borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
            <Head>
                <Thoms> thoms </Thoms>

                <Navbar>
                    <TouchableOpacity onPress={() => navigation.navigate("Basket")}
                                    style={{marginLeft: 16}}>
                        <Image source={require('../assets/img-upper-navbar/basket_white.png')}
                            style={{width: 21, height: 21, marginLeft: 'auto', marginRight: 'auto'}}/>
                        <Nav_element> Корзина </Nav_element>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Favorites")}
                                    style={{marginLeft: 16}}>
                        <Image source={require('../assets/img-upper-navbar/favorites_white.png')}
                            style={{width: 23, height: 21, marginLeft: 'auto', marginRight: 'auto'}}/>
                        <Nav_element> Избранное </Nav_element>
                    </TouchableOpacity>
                </Navbar>
            </Head>
                    <Input type="text" placeholder="Введите запрос"/>

                    <Articles_block>
                        <TouchableOpacity onPress={() => navigation.navigate("Article_1")}>
                            <Image source={require('../assets/img-main-page/article_1.png')}
                                   style={styles.article_image}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Article_2")}>
                            <Image source={require('../assets/img-main-page/article_2.png')}
                                   style={styles.article_image}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Article_3")}>
                            <Image source={require('../assets/img-main-page/article_3.png')}
                                   style={styles.article_image}/>
                        </TouchableOpacity>

                    </Articles_block>
                </ImageBackground>

                <FlexBox>
                    <FlexCont>
                        <TouchableOpacity onPress={() => navigation.navigate("Product_page_1")}
                                          style={{padding: 5}}>
                            <Image source={require('../assets/img-main-page/computer_table.png')}
                                   style={styles.furniture}/>
                            <Name> Стол компьютерный УНО-75 белый </Name>
                            <Price> 7 599₽ </Price>
                        </TouchableOpacity>
                    </FlexCont>

                    <FlexCont>
                        <TouchableOpacity onPress={() => navigation.navigate("Product_page_2")}
                                          style={{padding: 5}}>
                            <Image source={require('../assets/img-main-page/floor_cabinet.png')}
                                   style={styles.furniture}/>
                            <Name> Шкаф напольный белый
                                30*170*150 </Name>
                            <Price> 10 999₽ </Price>
                        </TouchableOpacity>
                    </FlexCont>

                    <Break/>

                    <FlexCont>
                        <TouchableOpacity onPress={() => navigation.navigate("Product_page_3")}
                                          style={{padding: 5}}>
                            <Image source={require('../assets/img-main-page/wardrobe.png')}
                                   style={styles.furniture}/>
                            <Name>
                                Шкаф для одежды FUN-5
                                100*210*55
                            </Name>
                            <Price> 2 990₽ </Price>
                        </TouchableOpacity>
                    </FlexCont>

                    <FlexCont>
                        <TouchableOpacity onPress={() => navigation.navigate("Product_page_4")}
                                          style={{padding: 5}}>
                            <Image source={require('../assets/img-main-page/armchair.jpg')}
                                   style={styles.furniture}/>
                            <Name> Кресло кожанное премиум </Name>
                            <Price> 19 149₽ </Price>
                        </TouchableOpacity>
                    </FlexCont>

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
`

const Lower_Nav = styled.View`
  width: 350px;
  height: 50px;
  border: 1px solid #CCC;
  border-radius: 14px;
  background: #FFF;
  backdrop-filter: blur(12px);
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  flex-direction: row
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