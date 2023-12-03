import React from "react";
import 'react-native-gesture-handler';
import Navigation from "./navigate";
import MyStack from "./BottomNavigate";
import Navigate from "./navigate";
import { Provider } from "react-redux";
import store from "./redux/store"

export default function App() {
    
    return (
        <Provider store={store}>
            <MyStack />
        </Provider>
    )
}



