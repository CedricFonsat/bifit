import { Text, TouchableOpacity, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";
import { useState } from "react";

export const GenderOnboard = ({ valueMan, valueWoman, onChangeWoman, onChangeMan, name}: any) => {

  
    return (
      <View style={{
        width: SIZE.M100 * 3,
        height:SIZE.height,
        backgroundColor: COLOR.orange,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{marginBottom: SIZE.M100}}>Qui êtes-vous {name} ?</Text>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
             <TouchableOpacity 
             onPress={onChangeWoman}
             style={{
              width: SIZE.M100,
              height: SIZE.M100,
              backgroundColor: valueWoman ? COLOR.red : 'gray',
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: SIZE.M100
             }}><Text>Woman</Text></TouchableOpacity>
    
             <TouchableOpacity 
             onPress={onChangeMan}
             style={{
              width: SIZE.M100,
              height: SIZE.M100,
              backgroundColor: valueMan ? COLOR.red : 'gray',
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: SIZE.M100
             }}><Text>Homme</Text></TouchableOpacity>
        </View>
      </View>
    )
  }