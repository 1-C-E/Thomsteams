import styled from 'styled-components';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {url} from '../dbUrl';
import {useDispatch} from 'react-redux';
import {fetchSelectedFurniture} from '../redux/slices/selectedFurniture';

const FlexContView = styled.View`
  width: 150px;
  height: 180px;
  border-radius: 14px;
  border: 1.5px #b6d3ff;
  background: #fff;
  margin-top: 10px;
`;
const Price = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;
const Name = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: black;
`;
const styles = StyleSheet.create({
  furniture: {
    width: 'auto',
    height: 110,
    borderRadius: 12,
  },
});

export const FurnitureBox = ({
  name,
  price,
  imgsrc,
  navigation,
  furnitureId,
  description,
  additionalImages,
}) => {
  const dispatch = useDispatch();
  return (
    <FlexContView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Product_page', {furnitureId: furnitureId});
          dispatch(fetchSelectedFurniture(furnitureId));
        }}
        style={{padding: 5}}>
        <Image
          source={
            imgsrc == '1'
              ? ''
              : {uri: url + '/uploads/' + furnitureId + '/' + imgsrc}
          }
          style={styles.furniture}
        />
        <Name> {name} </Name>
        <Price> {price} </Price>
      </TouchableOpacity>
    </FlexContView>
  );
};
