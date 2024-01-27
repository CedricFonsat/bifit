import { useEffect, useRef } from "react";
import { Text, TextInput, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";

export const NameOnboard = ({value, onChangeText}: any) => {
    const nameInputRef = useRef(null);
  
    useEffect(() => {
        nameInputRef.current?.focus();
    }, []);
  
    // const handleChange = (text: string) => {
    //   if (/^\d+$/.test(text) || text === '') {
    //     setAge(text);
    //   }
    // };
  
    return (
      <View style={{
        width: SIZE.M100 * 3,
        height:SIZE.height / 2,
        backgroundColor: COLOR.orange,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{marginBottom: SIZE.M100}}>Quel est votre nom ?</Text>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        <TextInput 
         ref={nameInputRef}
         placeholder="Entre votre age"
         value={value}
         onChangeText={onChangeText}
        />
        </View>
      </View>
    )}