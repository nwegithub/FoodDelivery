import React  from "react";
import { View,Text } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Home, Restaurant ,OrderDelivery} from "./screens";
import Tabs from './navigation/tabs'


export {Home,Restaurant,OrderDelivery} from './screens'

const stack = createNativeStackNavigator()

const App = () =>{
  return(
    <NavigationContainer>
      <stack.Navigator
      screenOptions ={{
        headerShown : false
      }}

      initialRouteName ={"Home"}
      >
          <stack.Screen name= "Home" component ={Tabs}/>
          <stack.Screen name= "Restaurant" component={Restaurant}/>
          <stack.Screen name= "OrderDelivery" component={OrderDelivery}/>

      </stack.Navigator>
    </NavigationContainer>

    
  )
}



export default App