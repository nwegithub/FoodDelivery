import React from "react";
import {View,Text} from "react-native"
import MapView from "react-native-maps";




const OrderDelivery = () =>{

    function renderMap(){
        return(
            <View>
               
               <MapView
                style={{flex:1}}
               />
                
            </View>
        )
    }

    return(
        <View
            style={{flex:1,}}
        >
            {
                renderMap()
            }
            
        </View>
    )
}

export default OrderDelivery