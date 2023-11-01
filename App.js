import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';


export default function App() {
  return (
    <View style={styles.main_container}>
      <Container_1>
        <Thoms>thoms</Thoms>
        <Navbar>корзина</Navbar>
        <Navbar>профиль</Navbar>
        <Navbar>подбор</Navbar>
      </Container_1>
      <Text style={styles.input}>Введите запрос</Text>
    </View>
  );
}

const Thoms = styled.Text`
flex: 1;
color: #fff;
font-size: 34px;
font-weight: 600;
`
const Navbar = styled.Text`
margin: 14px 10px 0 0;
color: #fff;
font-size: 10px;
font-weight: 600;
`

const Container_1 = styled.View`
flex-direction: row;
margin: 20px 12px 44px 14px;
`
const Button = styled.Text`
background-color: #fff;
border-radius: 10px;
`
const styles = StyleSheet.create({
  main_container: {
    flex: 0.5,
    backgroundColor: '#9FDACE',
  },

/*   container_1: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 30,
    marginRight: 20,
  }, */

/*   thoms: {
    flex: 1,
    color: '#fff',
    fontSize: 34,
    fontWeight: "600",
  }, */

  /* navbar: {
    color: '#fff',
    fontSize: 10,
    fontWeight: "600",
  }, */

  input: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 14,
    paddingVertical: 10,
    color: '#fff',
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: '#fff',
  }
});

