import React from "react";
import {Text} from "react-native";
import styled from "styled-components";

export default function Basket_component({el}) {
    return (
        <Block>
            <Text> {el.text}</Text>
        </Block>
    )
}

const Block = styled.View`
  padding: 12px;
  border: 1px #C6C6C6;
  border-radius: 20px;
`