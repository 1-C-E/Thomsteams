import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations
} from '@viro-community/react-viro';


const InitialScene = (props) =>{
     let data = props.sceneNavigator.viroAppProps;
     let istaburet = data.object == "taburet"
     console.log(data.object )
    return(
    <ViroARScene>
        <ViroAmbientLight color = "#ffff"/>
        { istaburet?
            <Viro3DObject
            source={require("../assets/3d/stul.obj")}
            resources={[require("../assets/3d/stul.mtl")]}
            position={[0,0,-5]}
            scale={[0.5,0.5,0.5]}
            rotation={[-45,50,40]}
            type="OBJ"
            />
            :
            <Viro3DObject
            source={require("../assets/3d/tv.obj")}
            resources={[require("../assets/3d/tv.mtl")]}
            position={[0,-50,-5]}
            scale={[5,5,5]}
            rotation={[-1,80,40]}
            type="OBJ"
            />

        }
            
    </ViroARScene>


    );
}


export default AR_Scene = () => {
    const [object, setObject] = useState("taburet");
    return(
        <View style = {styles.mainView}>
            <ViroARSceneNavigator
            initialScene={{
                scene: InitialScene,  
            }}
            viroAppProps={{"object":object}}
            styles = {{flex:1}}/>
                <View style={styles.controlsView}>
                    <TouchableOpacity onPress={()=> setObject("taburet")}>
                        <Text style={styles.txt}>Display taburet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> setObject("tv")}>
                        <Text style={styles.txt}> Dis na morgena</Text>
                    </TouchableOpacity>

                </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainView: {
        flex:1
    },

    controlsView: {       
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    txt:{
        margin: 5,
        backgroundColor: 'gray',
        padding: 10,
        fontWeight: 'bold',
    },
});
