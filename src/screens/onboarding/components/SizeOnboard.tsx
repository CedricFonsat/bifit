import { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";
import WheelPicker from "react-native-wheely";

export const SizeOnboard = ({value, onChangeText, name}: any) => {

    
    const tailleInputRef = useRef<TextInput>(null);  
    
    useEffect(() => {
     tailleInputRef.current?.focus();
    }, []);

    const tableauDeNombres = Array.from({ length: 61 }, (_, index) => 150 + index);

    

  
    return (
      <View style={{
        width: SIZE.M100 * 3,
       // height:SIZE.height,
        //backgroundColor: COLOR.orange,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZE.M50
      }}>
        <Text style={{marginBottom: SIZE.M15,fontSize: SIZE.M15 * 1.5, textAlign: 'center', color: COLOR.white, fontWeight: 'bold'}}>Quel est votre taille {name} en cm ?</Text>

        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 250
        }}>
         <WheelPicker
      options={tableauDeNombres}
      selected={value}
      onChange={onChangeText}
      containerStyle={{
        width: SIZE.width,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      itemTextStyle={{
        fontSize: 70,
        fontWeight: 'bold',
        color: COLOR.white
      }}
      itemHeight={100}
      selectedIndicatorStyle={{
        width: 150,
        height: 100,
        borderRadius: SIZE.M15 * 2,
        backgroundColor: COLOR.orange,
      }}
    />
        </View>

      </View>
    )
  }
  