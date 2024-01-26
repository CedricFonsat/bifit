import { useEffect, useRef } from "react";
import { Text, TextInput, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";

export const AgeOnboard = ({value, onChangeText, name}: any) => {
    const ageInputRef = useRef(null);
  
    useEffect(() => {
      ageInputRef.current?.focus();
    }, []);
  
    // const handleChange = (text: string) => {
    //   if (/^\d+$/.test(text) || text === '') {
    //     setAge(text);
    //   }
    // };
  
    return (
      <View style={{
        width: SIZE.M100 * 3,
        height:SIZE.height,
        backgroundColor: COLOR.orange,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{marginBottom: SIZE.M100}}>Quel est votre age {name} ?</Text>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        <TextInput 
         ref={ageInputRef}
         placeholder="Entre votre age"
         keyboardType="numeric"
         value={value}
         onChangeText={onChangeText}
        />
        </View>
      </View>
    )}