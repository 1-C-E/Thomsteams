import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components'



export default function BottomNav() {
    return (
        <Bot>
            <Lower_Nav>
                <TouchableOpacity>
                    <Image source = {{uri: 'https://www.figma.com/file/ZUL15Vv0p7B39QaGwJzo3J/Thomsteams?type=design&node-id=99-10139&mode=dev'}}/>
                </TouchableOpacity>
            </Lower_Nav>
        </Bot>
    );
}

const Lower_Nav = styled.View`
  width: 350px;
  height: 50px;

  border-radius: 14px;
  border: 1px solid #CCC;
  background: #FFF;
  backdrop-filter: blur(12px);
  
  justify-content: space-between;
  
  margin-left: auto;
  margin-right: auto;
  
`;

const Bot = styled.View`
  bottom: -370%;
`;