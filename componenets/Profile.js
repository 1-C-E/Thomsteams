import {StyleSheet, Text, View, Image} from 'react-native';
import styled from 'styled-components';

export default function App() {
    return (
        <Container style={styles.main_container}>
            <Profile/>
        </Container>
    )
}

const Container = styled.View``

const Profile = styled.Text`
  font-size: 34px;
  font-weight: 600;
`