import React from "react";
import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import styled from 'styled-components';
import Main_page from "./componenets/Main_page";

export default function App() {
    return (
        <Container>
            <Main_page/>
        </Container>
    );
}

const Container = styled.View``

