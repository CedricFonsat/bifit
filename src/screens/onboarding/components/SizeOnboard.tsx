import { useEffect, useRef } from "react";
import { Text, TextInput, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";

export const SizeOnboard = ({value, onChangeText, name}: any) => {

    
    const tailleInputRef = useRef<TextInput>(null);  
    
    useEffect(() => {
     tailleInputRef.current?.focus();
    }, []);
  

  
    return (
      <View style={{
        width: SIZE.M100 * 3,
        height:SIZE.height / 2,
        backgroundColor: COLOR.orange,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{marginBottom: SIZE.M100}}>Quel est votre taille {name} en cm ?</Text>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        <TextInput 
         ref={tailleInputRef} // Ref pour accéder au TextInput
         placeholder="Taille en cm"
         keyboardType="numeric" // Active le clavier numérique
         value={value}
         onChangeText={onChangeText}
        />
        </View>
      </View>
    )
  }
  