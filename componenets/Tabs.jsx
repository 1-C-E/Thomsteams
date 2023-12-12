import React, { useState } from "react";
import {View, Text, Touchableopacity, Flatlist} from 'react-native'

function TabButton({ name, activeTab, onHandleSearchType }) {
    return (
        <Touchableopacity>
            <Text>{name}</Text>
        </Touchableopacity>
    );
}

const Tabs = ({tabs, activeTab, setActiveTab}) => {
    return (
        <View>
            <Flatlist
                data={tabs}
                renderItem={({ item }) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                )}/>
        </View>
    )
}
export default Tabs;