import React from "react";
import 'react-native-gesture-handler';
import MyStack from "./BottomNavigate";
import { Provider } from "react-redux";
import store from "./redux/store"


export default function App() {
    return (

        <Provider store={store}>
           <MyStack />
        </Provider>
    )
}



