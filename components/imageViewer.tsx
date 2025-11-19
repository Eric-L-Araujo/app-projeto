import React from 'react';
import {ImageSourcePropType, StyleSheet, View, Text } from 'react-native';
import {Image} from 'expo-image'
import { useSettings } from '../hooks/useSettings';

const placeholderImgAlessandra = require("@/assets/images/alessandra-foto1.png")
const placeholderImgBryan = require("@/assets/images/bryan-foto1.png")
const placeholderImgGabriel = require("@/assets/images/gabriel-foto1.png")
const placeholderImgEric = require("@/assets/images/eric-foto1.png")



type Props = {
   imgSource?: ImageSourcePropType;
   color?: any,
}

export default function ImageViewer({imgSource, color}: Props) {
   const { colors, vibrate } = useSettings();
   
   return (
      <View style={style.container}>

         <View style={style.column}>

            <View style={style.card}>
               <Image source={placeholderImgAlessandra} style={[style.image, {borderColor: colors.primary}]} />
               <Text style={[style.imgLabel, { color: colors.text }]}>Alessandra 🙂‍↔️ </Text>
            </View>
            <View style={style.containerText}>
               <Text style={style.imgText}>"Esse app funciona com muito carinho, café e muitos Ctrl+Z"</Text>
            </View>
            

            <View style={style.card}>
               <Image source={placeholderImgEric} style={[style.image, {borderColor: colors.primary}]} />
               <Text style={[style.imgLabel, { color: colors.text }]}>Eric 🤓</Text>
            </View>
             <View style={style.containerText}>
                <Text style={style.imgText}>"Tem mais café na veia do que sangue"</Text>
             </View>
            

         </View>

         <View style={style.column}>
            
            <View style={style.card}>
               <Image source={placeholderImgGabriel} style={[style.image, {borderColor: colors.primary}]} />
               <Text style={[style.imgLabel, { color: colors.text }]}>Gabriel 😴</Text>
            </View>
            <View style={style.containerText}>
               <Text style={style.imgText}>"99% do tempo dormindo, 2% do tempo pensando em dormir"</Text>
            </View>
            
           
            <View style={style.card}>
               <Image source={placeholderImgBryan} style={[style.image, {borderColor: colors.primary}]} />
               <Text style={[style.imgLabel, { color: colors.text }]}>Bryan 😎</Text>
            </View>
            <View style={style.containerText}>
               <Text style={style.imgText}>"Otimista, movido por desafios e subornável por feijoada."</Text>
            </View>
            

         </View>

      </View>
   )
}

const style = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      justifyContent: 'center',
    
      padding: 10,
   },
   
   column: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  
      maxHeight: 550,
      maxWidth: '100%',
      padding: 10,
      },
   
   card: {
       alignItems: "center",
      marginBottom: 25,     // esse é o espaçamento que você quer
       maxHeight: 250,
       justifyContent: 'center',
    
      maxWidth: 150,
   },

   image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 6,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
   },

   imgLabel: {
      fontSize: 16,
      color: '#636161ff',
     justifyContent: 'center',
     alignItems: 'center',
      textAlign: 'center',
      fontWeight: 700,

   },

   containerText: {
   
      minHeight: 110,
      minWidth: 150,
      marginBottom: 5,
   },

   imgText: {
      fontSize: 15,
      color: '#7e7d7dff',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'justify',
      marginBottom: 10,
      maxHeight: 90,
   },
   

})