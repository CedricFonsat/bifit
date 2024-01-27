import { useEffect, useRef } from "react";
import { Text, TextInput, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";

export const NameOnboard = ({value, onChangeText}: any) => {
    const nameInputRef = useRef<TextInput>(null);
  
    useEffect(() => {
        nameInputRef.current?.focus();
    }, []);

  
    return (
      <View style={{
        width: SIZE.M100 * 3,
        height:SIZE.height / 2,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{marginBottom: SIZE.M100, fontSize: SIZE.M15 * 1.8, fontWeight: 'bold'}}>Quel est votre nom ?</Text>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: SIZE.M50 * 1.1,
          borderRadius: SIZE.M100,
          borderColor: COLOR.lightOrange,
          borderWidth: 2
        }}>
        <TextInput 
         ref={nameInputRef}
         placeholder="Entre votre age"
         style={{fontSize: 20}}
         value={value}
         onChangeText={onChangeText}
        />
        </View>
      </View>
    )}