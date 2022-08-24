import React from "react";
import {View,Text,TouchableOpacity,Image} from "react-native"
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Svg,{Path} from "react-native-svg";

import { Home, OrderDelivery, Restaurant } from "../screens";
import { COLORS, icons,FONTS,SIZE } from "../constants";

const Tab = createBottomTabNavigator()


const TabBarCustomButton = ({accessibilityState, children, onPress}) =>{

    var isSelected = accessibilityState.selected

    if(isSelected){
        return(

            <View style={{flex:1, alignItems: 'center'}}>
                <View style={{flexDirection:'row',position: 'absolute', top:0}}>
                    <View style={{flex:1,backgroundColor:'white'}}>
                    </View>
                     <Svg
                     width={75}
                     height={61}
                     viewBox="0 0 75 61"
                     >

                        <Path
                        />

                     </Svg>
                     <View style={{flex:1, backgroundColor:'white'}}></View>

                </View>

                <TouchableOpacity
                    style={{
                        top:-22.5,
                        justifyContent:'center',
                        alignItems:'center',
                        width:50,
                        height:50,
                        borderRadius: 25,
                        backgroundColor:'white'
                    }}
                    onPress={onPress}
                >
                    {children}

                </TouchableOpacity>
            </View>
            
        )
    }else{
        return(
            <TouchableOpacity
                 style={{
                    flex:1,
                    height:60,
                    backgroundColor:'white'
                 }}
                 activeOpacity={1}
                 onPress={onPress}
            >
                {children}
            </TouchableOpacity>

            
        )
    }
}


const CustomTabBar = (props) =>{
    return(
        <View>
            <View 
            style={{
                position: 'absolute',
                bottom:0,
                left:0,
                right:0,
                height:30,
                backgroundColor:'white'
            }}
            >

            </View>
            <BottomTabBar {...props.props}/>
        </View>
    )
}

const Tabs = () =>{
    return(
        <Tab.Navigator
       
        screenOptions={
            {
                "tabBarShowLabel": false,
                "tabBarStyle": [
                  {
                    "display": "flex"
                    
                  },
                  null
                ],
                style:{
                    backgroundColor : "transparent",
                    borderTopWidth :0,
                    elevation:0
                }
                 
              }    
        }

        tabBar= {(props) =>(
            <CustomTabBar
            props ={props}
            />
        )}
        >

            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon : ( { focused}) => (
                    <Image
                        source={icons.spoon}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor: focused ? 'red' : 'blue'
                        }}
                    />
                ),
                tabBarButton : (props) => (
                    <TabBarCustomButton
                    {...props}
                    />
                )
            }}
            />


        <Tab.Screen
            name="search"
            component={Home}
            options={{
                tabBarIcon : ( { focused}) => (
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                           

                            tintColor: focused ? 'red' : 'blue'
                        }}
                    />
                ),
                tabBarButton : (props) => (
                    <TabBarCustomButton
                    {...props}
                    />
                )
            }}
            />


        <Tab.Screen
            name="heart"
            component={Home}
            options={{
                tabBarIcon : ( { focused}) => (
                    <Image
                        source={icons.heart}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor: focused ? 'red' : 'blue'
                        }}
                    />
                ),
                tabBarButton : (props) => (
                    <TabBarCustomButton
                    {...props}
                    />
                )
                
            }}
            />


<Tab.Screen
            name="user"
            component={Home}
            options={{
                tabBarIcon : ( { focused}) => (
                    <Image
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor: focused ? 'red' : 'blue'
                        }}
                    />
                ),

                tabBarButton : (props) => (
                    <TabBarCustomButton
                    {...props}
                    />
                )
            }}
            />

            

            
        </Tab.Navigator>
    )
}

export default Tabs