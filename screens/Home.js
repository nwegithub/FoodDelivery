import React,{useEffect,useState} from "react";
import {View,Text, TouchableOpacity,SafeAreaView,StyleSheet,Image, ImageStore,FlatList, Dimensions} from "react-native"

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

import { icons } from "../constants";
import image from "../constants/image";
import { FONTS } from "../constants";
import { COLORS } from "../constants";
import { SIZE } from "../constants";
import Restaurant from "./Restaurant";



const Home = ({navigation,route}) =>{

    const initialCurrentLocation ={
        streetName : "Kuching",

    }

    const categoryData =[
        
        {
            id:1,
            name:"Rice",
            icon: icons.noodle,
        },
        {
            id: 2,
            name: "Noodles",
            icon : icons.noodle ,
        },
        
        {
            id: 3,
            name: "Hot dogs",
            icon : icons.hotdog ,
        },
        {
            id: 4,
            name: "Salad",
            icon : icons.salad,
        },
        {
            id:5 ,
            name: "Burgers",
            icon : icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon : icons.pizza ,
        },
        {
            id:7 ,
            name: "Snacks",
            icon :icons.fries ,
        },
        {
            id: 8,
            name: "Sushi",
            icon : icons.sushi ,
        },
        {
            id: 9,
            name: "Desserts",
            icon : icons.donut ,
        },
        {
            id: 10,
            name: "Drinks",
            icon : icons.drink ,
        },
    ]

    const affordable = 1
    const fairPrice =2
    const expensive = 3


    const restaurantData = [
        {

            id:1,
            name: "ByProgrammers Burger",
            rating:4.8,
            categories:[5,7],
            priceRating: affordable,
            photo:image.burger,
            duration:"30-45 min",
            location:{},
            courier: {
                // avatar: image.avatar1,
                name: "Amy"
            },
       

            menu: [
                {
                    menuId :1 ,
                    name: " Crispy Chicken Burger",
                    photo: image.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId : 2,
                    name: " Crispy Chicken Burger with Honey Mustard",
                    photo: image.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burge with Honey Mustard Coleslaw",
                    calories: 250,
                    price:15 
                },
                {
                    menuId : 3,
                    name: " Crispy Baked French Fries",
                    photo: image.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
            
        },
        {
            id:2,
            name: "ByProgrammers Pizza",
            rating:4.8,
            categories:[2,4,6],
            priceRating: expensive,
            photo:image.pizza_res,
            duration:"15 -20  min",
            location:{},
            courier: {
                // avatar: image.avatar2,
                name: "Jackson"
            },

            menu:[
                    {
                        menuId :4 ,
                    name: " Hawaiian Pizza",
                    photo: image.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust",
                    calories: 250,
                    price: 15
                    },

                    {
                        menuId :5 ,
                    name: " Tomato & BasilPizza",
                    photo: image.pizza,
                    description: "Fresh tomatoes , aromatic basil pest0",
                    calories: 250,
                    price: 20
                    },

                    {
                        menuId :6 ,
                    name: " Tomato Pasta",
                    photo: image.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10
                    },

                    {
                        menuId :7 ,
                    name: " Mediterranean Choppe Salad",
                    photo: image.salad,
                    description: "Finely chopped lettuce",
                    calories: 100,
                    price: 10
                    },
                          
            ]
        },
        {
            id:3,
            name: "ByProgrammers Hot Dog",
            rating:4.8,
            categories:[2,4,6],
            priceRating: fairPrice,
            photo:image.hotdog_res,
            duration:"20_25  min",
            location:{},
            courier: {
                // avatar: image.avatar3,
                name: "Johnson"
            },
            menu: [
                
                    {
                        menuId :8 ,
                    name: " Chicago Style Hot Dog",
                    photo: image.hotdog,
                    description: "Fresh tomato, all beef hot dog",
                    calories: 100,
                    price: 20
                    },
                
            ]
        },
        {
            id:4,
            name: "ByProgrammers sushi",
            rating:4.8,
            categories:[8],
            priceRating: expensive,
            photo:image.sushi_res,
            duration:"10-15  min",
            location:{},
            courier: {
                // avatar: image.avatar4,
                name: "Ahmad"
            },
            menu:[
                {
                    menuId :9,
                name: " Suchi sets",
                photo: image.sushi,
                description: "Fresh selmon, suchi rice, fresh juicy avocado",
                calories: 100,
                price: 50
                },
            ]
        },

        {
            id:5,
            name: "ByProgrammers Cuisine",
            rating:4.8,
            categories:[1,2],
            priceRating: affordable,
            photo:image.noodle_res,
            duration:"15-20  min",
            location:{},
            courier: {
                // avatar: image.avatar4,
                name: "Muthu"
            },

            menu:[
                {
                    menuId :10,
                name: " Kolo Mee",
                photo: image.kolo_mee,
                description: "Noodle with char siu",
                calories: 200,
                price: 5
                },
                {
                    menuId :11,
                name: "Sarawak Laksa",
                photo: image.sarawak_laksa,
                description: "Vermicelli noodles, cooked prawns",
                calories: 300,
                price: 8
                },
                {
                    menuId :12,
                name: " Nasi Lemak",
                photo: image.nasi_lemak,
                description: "A traditational Malay rice dish",
                calories: 300,
                price: 8
                },
                {
                    menuId :13,
                name: " Nasi Briyani with Mutton",
                photo: image.nasi_briyani_mutton,
                description: "A traditational Malay rice dish",
                calories: 300,
                price: 8
                },
            ]


        },
        {
            id:6,
            name: "ByProgrammers Dessets",
            rating:4.9,
            categories:[9,10],
            priceRating: affordable,
            photo:image.kek_lapis_shop,
            duration:"35-40  min",
            location:{},
            courier: {
                // avatar: image.avatar4,
                name: "Jessie"
            },
            menu:[
                {
                    
                     menuId :14,
                    name: " Teh C Peng",
                    photo: image.teh_c_peng,
                    description: "Three layer Teh C Peng",
                    calories:100,
                    price: 2
                   
                },
                {
                    
                    menuId :15,
                   name: " ABC Ice-Kacang",
                   photo: image.sarawak_laksa,
                   description: "Shaved Ice with red beans",
                   calories:100,
                   price: 3
                  
               },
               {
                    
                menuId :16,
               name: " Kek Lapis",
               photo: image.Kek_lapis,
               description: "Layer cakes",
               calories:300,
               price: 20
              
           },
            ]
        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurant, setRestaurant] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)





    function renderHeader() {
        return(
            <View style={{flexDirection:'row',height:50}}>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft:10 * 2,
                        justifyContent:'center'
                        
                    }}
                >
                    <Image
                    source={icons.nearby}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30
                    }}
                    />

                </TouchableOpacity>


                    <View style={{
                        flex:1,justifyContent:'center', alignItems:'center'
                    }}>
                        <View style={{
                            width:'70%',
                            height:'100%',
                            backgroundColor:'#c4c7cc',
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:20,
                        }}>
                            <Text style={{fontSize:20,fontWeight:'bold',}}>{currentLocation.streetName}</Text>
                        </View>
                    </View>


                    <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft:10 * 2,
                        justifyContent:'center'
                        
                    }}
                >
                    <Image
                    source={icons.basket}
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

    function onSelectCategory (category) {
        let restaurantLit = restaurantData.filter(a => a.categories.includes(category.id))

        setSelectedCategory(category)
        setRestaurant(restaurantLit)
    }

    function renderMainCategories () {

        const renderItem = ({item}) =>{
            return(
                <TouchableOpacity
                    style={{
                        padding: 7,
                        paddingBottom:20,
                        backgroundColor:(selectedCategory?.id == item.id) ? 
                                        '#f54c18' : 'white',
                        borderRadius:30,
                        alignItems:'center',
                        justifyContent:'center',
                        marginLeft: 10,
                          ...styles.shadow
                    }}

                    onPress={ () => onSelectCategory(item)}
                >

                    <View
                        style={{
                            width:50,
                            height:50,
                            borderRadius:30,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:'white'
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode= "contain"
                            style={{height:30,height:30}}
                        />

                    </View>

                    <Text style={{color:(selectedCategory?.id == item.id) ?
                                'white' : 'black',
                                fontWeight:'bold'
                                }}>
                        {item.name}
                    </Text>

                </TouchableOpacity>
            )
        }

        return(
            <View style={{padding:20,}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>Main</Text>
                <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>Categories</Text>

                <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem ={renderItem}
                contentContainerStyle={{paddingVertical : 20}}
                />

            </View>
        )
    }


    //category Nmae
    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if(category.length>0)
                return category[0].name

                return""
    }



    function renderRestaurantList() {

        const renderItem =({item}) =>{
            return(
                <TouchableOpacity
                style={{marginBottom:20}}

                   onPress= { () => navigation.navigate("Restaurant",{
                    item,currentLocation
                   })}
            >
                <View
                    style={{marginBottom: 15}}
                    >     
                     <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width:'100%',
                            height:200,
                            borderRadius:20
                        }}/>
                        <View 
                        style={{
                            position:'absolute',
                            bottom:0,
                            height:50,
                            width:width * 0.3,
                            backgroundColor:'white',
                            borderTopRightRadius:20,
                            borderBottomLeftRadius:20,
                            alignItems:'center',
                            justifyContent:'center',
                            ...styles.shadow
                        }}
                        >
                            <Text
                                style={{fontSize:16,fontWeight:'bold',color:'black'}}
                            >{item.duration}</Text>

                        </View>
                        
                </View>

                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>
                            {item.name}
                        </Text>
                        <View 
                            style={{marginBottom:10,flexDirection:'row',marginTop:5}}
                        >
                            <Image
                            source={icons.star}
                            style={{
                                width:25,
                                height:25,
                                tintColor:'#f54c18',
                                marginRight:10
                            }}
                            />
                            <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>
                                {item.rating}
                            </Text>

                            <View
                            style={{flexDirection:'row',marginLeft:19}}
                            >
                                {
                                    item.categories.map((categoryId) =>{
                                        return(
                                            <View
                                                style={{flexDirection:'row'}}
                                                key={categoryId}
                                            >
                                                <Text
                                                     style={{color:'black',fontSize:16}}
                                                >{getCategoryNameById(categoryId)}</Text>
                                                <Text>.</Text>
                                            </View>
                                        )
                                    })
                                }


                                {
                                    [1,2,3].map((priceRating)=>(
                                        <Text
                                            key={priceRating}
                                            style={{
                                                fontSize:15,
                                                fontWeight:'bold',
                                                color:(priceRating <= item.priceRating) ?
                                                    'black' :'gray'
                                            }}
                                        >
                                            $
                                        </Text>
                                    ))
                                }

                            </View>


                        </View>

            </TouchableOpacity>
            )
        }
        
        return(
            <FlatList
            data={restaurant}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle ={{
                paddingHorizontal: 20,
                paddingBottom:30
            }}
            />
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width:0,
            height:3,
        },
        shadowOpacity: 0.1,
        shadowRadius:3,
        elevation:1
    }
})

export default Home