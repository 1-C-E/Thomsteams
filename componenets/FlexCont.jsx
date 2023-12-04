import styled from 'styled-components';
import {StyleSheet, Image, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView,} from 'react-native';
import Navigation from "../navigate";

const FlexContView = styled.View`
  width: 150px;
  height: 160px;
  border-radius: 14px;
  border: 1.5px #B6D3FF;
  background: #FFF;
`;
const Price = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;
const Name = styled.Text`
  font-size: 13px;
  font-weight: 500;
`;
const styles = StyleSheet.create({
    furniture: {
        width: 'auto',
        height: 90,
        borderRadius: 12,
    }
});

export const FurnitureBox = ({name, price, imgsrc, navigation, navigation_page}) =>
{
    return(
    <FlexContView>
        <TouchableOpacity onPress={() => navigation.navigate(navigation_page)}
                        style={{padding: 5}}>
            <Image source={imgsrc}
                style={styles.furniture}/>
            <Name> {name} </Name>
            <Price> {price} </Price>
        </TouchableOpacity>
    </FlexContView>
    );
}