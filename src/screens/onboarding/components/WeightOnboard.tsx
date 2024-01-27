import { useEffect, useRef } from "react";
import { Text, TextInput, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";

export const WeightOnboard = ({value, onChangeText, name}: any) => {

    const weightInputRef = useRef<TextInput>(null); 

    useEffect(() => {
      weightInputRef.current?.focus();
    }, []);
  
    // const handleChange = (text: string) => {
    //   if (/^\d+$/.test(text) || text === '') {
    //     setWeight(text);
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
        <Text style={{marginBottom: SIZE.M100}}>Quel est votre poid {name} en KG ?</Text>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        <TextInput 
         ref={weightInputRef}
         placeholder="Poid en KG"
         keyboardType="numeric"
         value={value}
         onChangeText={onChangeText}
        />
        </View>
      </View>
    
  )}