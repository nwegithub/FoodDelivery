import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet, SafeAreaView,Image,Animated, TouchableOpacity,Dimensions} from "react-native"

const width= Dimensions.get('screen').width
const height= Dimensions.get('screen').height

import { icons } from "../constants";
import image from "../constants/image";

const Restaurant = ({navigation,route}) =>{

    
    const scrollX = new Animated.Value(0)
    const [restaurant, setRestaurant] = React.useState(null)
    const [currentLocation, setCurrentLocation] = React.useState(null)
    const [orderItem,setOrderItem] = React.useState([])

    React.useEffect( () =>{

        let {item,currentLocation} = route.params

        
        setRestaurant(item)
        setCurrentLocation(currentLocation)

})


    function editOrder(action,menuId,price){
        if(action == "+"){
            let orderList = orderItem.slice()
            let item = orderList.filter(a => a.menuId == menuId)

            if(item.length >0){
                let newQty = item[0].qty +1
                item[0].qty= newQty
                item[0].total = item[0].qty * price
            }else{
                const newItem = {
                    menuId : menuId,
                    qty:1,
                    price:price,
                    total:price
                }
                orderList.push(newItem)
            }
            setOrderItem(orderList)

        }else{

            let orderList = orderItem.slice()
            let item = orderList.filter(a => a.menuId == menuId)

               if(item.length>0) {
                if(item[0]?.qty >0){
                    let newQty = item[0].qty -1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
               }
               setOrderItem(orderList)
        }
    }

    function getOrderQty(menuId){
        let orderItems = orderItem.filter(a => a.menuId == menuId)

        if(orderItems.length>0){
            return orderItems[0].qty
        }
        return 0
    }


    //orderCount

    function getBasketItemCount (){
        let itemCount = orderItem.reduce((a,b) => a+ (b.qty || 0),0)

        return itemCount
    }

    function sumOrder (){
        let total = orderItem.reduce((a,b) => a+ (b.total || 0),0)
        return total.toFixed(2)
    }

    
    function renderHeader(){
        return(
            <View style={{
                flexDirection:'row', 
            }}>
                <TouchableOpacity
                    style={{width:50,paddingLeft:10}}
                    onPress={ () => navigation.goBack()}
                >
                    
                    <Image
                    source={icons.back_arrow}
                    resizeMode="contain"
                    style={{width:30,height:30,marginLeft:10
                    }}
                    />
    
                </TouchableOpacity>

                <View
                    style={{flex:1,justifyContent:'center',alignItems:'center'}}
                >
                    <View
                        style={{
                            height:40,
                            paddingHorizontal:30,
                            backgroundColor:'#b4c0d4',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:20
                        }}
                    >
                        <Text
                            style={{fontWeight:'bold',fontSize:16,color:'black'}}
                        >
                            {restaurant?.name}
                        </Text>
                    </View>

                    
                </View>

                <TouchableOpacity
                            style={{
                                width:50,
                                paddingRight:10,
                                justifyContent:'center'
                            }}
                    >
                        <Image
                             source={icons.list}
                             resizeMode="contain"
                             style={{
                                width:30,
                                height:30
                             }}
                        />

                    </TouchableOpacity>
    
            </View>
        )
       }

       function renderFoodInfo() {
        return(
            <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {nativeEvent:{
                            contentOffset:{x: scrollX}
                        }}
                       
                    ], {useNativeDriver: false})}
            >
                {
                    restaurant?.menu.map((item,index) =>(
                        <View
                            key={`menu-${index}`}
                            style={{alignItems:'center',
                            marginTop:15}}
                        >
                            <View style={{
                                height:height*0.35
                            }}>
                                <Image
                                source={item.photo}
                                resizeMode="cover"
                                style={{
                                    width:width,
                                    height:'100%'
                                }}
                                />

                <View
                                style={{
                                    position:'absolute',
                                    bottom:-20,
                                    width:width,
                                    height:50,
                                    justifyContent:'center',
                                    flexDirection:'row'
                                }}
                            >

                                <TouchableOpacity
                                    style={{
                                        width:50,
                                        backgroundColor:'white',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderTopLeftRadius:25,
                                        borderBottomLeftRadius:25
                                    }}

                                    onPress={() => editOrder("-", item.menuId, item.price)}
                                >

                                    <Text 
                                        style={{fontSize:20,fontWeight:'bold',color:'black'}}
                                    >-</Text>

                                </TouchableOpacity>
                                    <View
                                        style={{
                                            width:50,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            backgroundColor:'white'
                                        }}
                                    >
                                            <Text
                                                style={{fontSize:20}}
                                            >
                                                {getOrderQty(item.menuId)}
                                            </Text>
                                    </View>

                                    <TouchableOpacity
                                    style={{
                                        width:50,
                                        backgroundColor:'white',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderTopRightRadius:25,
                                        borderBottomRightRadius:25                                        
                                    }}

                                    onPress={() => editOrder("+", item.menuId, item.price)}
                                >

                                    <Text 
                                        style={{fontSize:20,fontWeight:'bold',color:'black'}}
                                    >+</Text>

                                </TouchableOpacity>
                                
                            </View>

                            <View
                                style={{
            
                                    alignItems:'center',
                                    width:width,
                                    paddingHorizontal:15,
                                    marginTop:25
                                }}
                            >
                                <Text
                                    style={{fontWeight:'bold',fontSize:22,color:'black'}}
                                >
                                    {item.name}-{item.price.toFixed(2)}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight:'bold',fontSize:16
                                    }}
                                >{item.description}</Text>
                            </View>

                            <View
                                style={{
                                    flexDirection:'row',marginTop:20,
                                    alignItems:'center',justifyContent:'center'
                                }}
                            >
                                <Image
                                    source={icons.fire}
                                    style={{
                                        width:40,
                                        height:40,
                                        marginRight:10
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize:18,fontWeight:'800'
                                    }}
                                >{item.calories.toFixed(2)}  cal</Text>
                            </View>
                       

                            </View>

                            
                            
                        </View>
                       


                    ))
                }
 
                            
            </Animated.ScrollView>
        )
       }


       function renderDots(){

        const dotPosition = Animated.divide(scrollX,width)
        return(
            <View
                style={{height:30}}
            >
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        height:20

                    }}
                >
                        {
                            restaurant?.menu.map((item,index) =>{

                                const opacity = dotPosition.interpolate({
                                    inputRange: [index-1, index, index+1],
                                    outputRange:[0.3,1,0.3],
                                    extrapolate:"clamp"

                                })

                                const dotSize = dotPosition.interpolate({
                                    inputRange: [index-1,index,index+1],
                                    outputRange:[10*0.8, 10, 10*0.8],
                                    extrapolate:"clamp"
                                })

                                const dotColor = dotPosition.interpolate({
                                    inputRange:[index-1,index,index+1],
                                    outputRange:['#a3908c','#a32c14','#a3908c',],
                                    extrapolate:"clamp"
                                })

                                return(
                                    <Animated.View
                                        key={`dot-${index}`}
                                        opacity={opacity}
                                            style={{
                                                borderRadius:20,
                                                marginHorizontal:6,
                                                width:dotSize,
                                                height:dotSize,
                                                backgroundColor:dotColor
                                            }}
                                    >
                                    </Animated.View>
                                )

                            })
                        }
                </View>
            </View>
        )
       }

       function renderOrder() {
        return(
            <View>
                {
                    renderDots()
                }

                <View
                    style={{
                        backgroundColor:'white',
                        borderTopLeftRadius:40,
                        borderTopRightRadius:40,
                    }}
                >
                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            paddingVertical:20,
                            paddingHorizontal:30,
                            borderBottomColor:'#b5b0b0',
                           
                        }}
                    >
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>{getBasketItemCount()}Items in Cart</Text>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>${sumOrder()}</Text>

                    </View>

                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            paddingVertical:20,
                            paddingHorizontal:30,
                            
                        }}
                    >
                         <View
                            style={{flexDirection:'row'}}
                         >
                            <Image
                                source={icons.pin}
                                resizeMode="contain"
                                style={{
                                    width:30,
                                    height:30,
                                    tintColor:'black',
                                    marginRight:5
                                }}
                            />
                            <Text
                                style={{fontSize:16,fontWeight:'bold',color:'black'}}
                            >Location</Text>

                         </View>

                         <View
                            style={{flexDirection:'row'}}
                         >
                            <Image
                                source={icons.card}
                                resizeMode="contain"
                                style={{
                                    width:30,
                                    height:30,
                                    tintColor:'black',
                                    marginRight:5
                                }}
                            />
                            <Text
                                style={{fontSize:16,fontWeight:'bold',color:'black',marginLeft:5}}
                            >8888</Text>

                         </View>

                    </View>
                            
                           <View
                            style={{
                                marginBottom:10,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                           > 
                            <TouchableOpacity 
                                style={{
                                    width:width*0.9,
                                    
                                    justifyContent:'center',
                                    alignItems:'center',
                                    backgroundColor:'#e85046',
                                    borderRadius:20
                                }}

                                onPress={ () => navigation.navigate("OrderDelivery",
                                            {
                                                restaurant:restaurant,
                                                currentLocation:currentLocation
                                            })}
                            >
                                <Text
                                    style={{textAlign:'center',
                                            fontSize:20,
                                            fontWeight:'bold',
                                            color:'white',
                                            paddingVertical:10}}
                                >
                                    Order
                                </Text>
                            </TouchableOpacity>
                            </View>
                </View>
            </View>
        )
       }

    return(
       <SafeAreaView style={{
        flex:1,backgroundColor:'#dee0e0'
       }}>
            {
                renderHeader()
               
            }
            {
                renderFoodInfo()
            }
            {
                renderOrder()
            }

       </SafeAreaView>
    )
}

export default Restaurant