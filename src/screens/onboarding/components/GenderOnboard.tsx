import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";
import { useState } from "react";

export const GenderOnboard = ({ valueMan, valueWoman, onChangeWoman, onChangeMan, name}: any) => {

  // https://as2.ftcdn.net/v2/jpg/01/41/84/73/1000_F_141847306_PcAfpjKvkh8hMOui7cg9ObJVX3flZr6o.jpg

    return (
      <View style={{
        width: SIZE.M100 * 3,
        height:SIZE.height / 2,
       // backgroundColor: COLOR.orange,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
       
       <Text style={{marginBottom: SIZE.M100 * 1.5,fontSize: SIZE.M15 * 2, textAlign: 'center', color: COLOR.orange, fontWeight: 'bold'}}>Qui êtes-vous {name} ?</Text>

        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
             <TouchableOpacity 
             onPress={onChangeWoman}
             style={{
              width: valueWoman ? SIZE.M100 * 1.5 : SIZE.M100,
              height: valueWoman ? SIZE.M100 * 1.5 : SIZE.M100,
              backgroundColor: valueWoman ? COLOR.orange : COLOR.lightOrange,
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: SIZE.M100
             }}>
              <Image style={{
                width: valueWoman ? 150 : 100,
                height: valueWoman ? 300 : 250
              }} source={require('../../../../assets/png/woman1.png')}/>
             </TouchableOpacity>
    
             <TouchableOpacity 
             onPress={onChangeMan}
             style={{
              width: valueMan ? SIZE.M100 * 1.5 : SIZE.M100,
              height: valueMan ? SIZE.M100 * 1.5 : SIZE.M100,
              backgroundColor: valueMan ? COLOR.orange : COLOR.lightOrange,
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: SIZE.M100
             }}>
              <Image style={{
                width: valueMan ? 150 : 100,
                height: valueMan ? 320 : 250
              }} source={require('../../../../assets/png/man1.png')}/>
              </TouchableOpacity>
        </View>
      </View>
    )
  }