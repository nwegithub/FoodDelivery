import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window")

export const COLORS = {
    //base colors
    primary: "FC6D3F",
    secnondary: "#CDCDD2",

    //colors
    black: "#1E1F20",
    white: "#FFFFFF"
};
 export const SIZE = {
    //global size
    base: 8,
    font : 14,
    radius: 30,
    paddding:10,
    padding2:12,

    h3 :20,
    h4 : 18,

    body1 : 30,
    body2 : 20,
    body3 : 16,
    body4 : 14,
    body5 : 12,

    width,
    height,

 }

 export const FONTS = {
   
    largeTitle  : {     fontFmaily : "Roboto-Regular", fontSize : SIZE.largeTitle, lineHeight: 40},
    h1  : {     fontFmaily : "Roboto-Black", fontSize : SIZE.h1, lineHeight: 36},
    h2  : {     fontFmaily : "Roboto-Bold", fontSize : SIZE.h2, lineHeight: 30},
    h3  : {     fontFmaily : "Roboto-Bold", fontSize : SIZE.h3, lineHeight: 22},
    h4  : {     fontFmaily : "Roboto-Bold", fontSize : SIZE.h4, lineHeight: 22},

    body1  : {     fontFmaily : "Roboto-Regular", fontSize : SIZE. body1, lineHeight: 40},
    body2 : {     fontFmaily : "Roboto-Regular", fontSize : SIZE. body2, lineHeight: 40},
    body3  : {     fontFmaily :"Roboto-Regular", fontSize : SIZE. body3, lineHeight: 40},
    body4  : {     fontFmaily :"Roboto-Regular", fontSize : SIZE. body4, lineHeight: 40},
    body5  : {     fontFmaily : "Roboto-Regular", fontSize : SIZE. body5, lineHeight: 40}


    
 }
 const appTheme = {COLORS,SIZE,FONTS}

 export default appTheme;