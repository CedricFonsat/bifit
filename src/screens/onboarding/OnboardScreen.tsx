import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TypeState, YourNavigatorParams } from '../../types/Interface';
import { updateOnboard } from '../../store/OnboardReducer';
import { SIZE } from '../../constants/size';
import { COLOR } from '../../constants/color';
import { SizeOnboard } from './components/SizeOnboard';
import { WeightOnboard } from './components/WeightOnboard';
import { AgeOnboard } from './components/AgeOnboard';
import { GenderOnboard } from './components/GenderOnboard';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NameOnboard } from './components/NameOnboard';

const OnboardScreen = () => {

    const navigation: NavigationProp<YourNavigatorParams> = useNavigation()
    const onboard = useSelector((state: TypeState) => state.onboard);
    const dispatch = useDispatch();
    const [step, setStep] = useState(0);
    const user = onboard.find(x => x && x.id === 1)
    const [size, setSize] = useState(user?.size?.toString() || '');
    const [weight, setWeight] = useState(user?.weight?.toString() || '');
    const [age, setAge] = useState(user?.age?.toString() || '');
    const [gender, setGender] = useState({
        woman: true,
        man: false,
      });
    const [name, setName] = useState('Jack Line');
    const genderForm = () => {
        if (gender.man) {
            return 'man'
        }else{
            return 'woman'
        }
      }   
    const handleUpdate = () => {
        dispatch(updateOnboard({
            id: user?.id,
            name: name,
            size: size,
            gender: genderForm(),
            weight: weight,
            age: age
        }));
    }


    console.log(size,weight, age, genderForm(),'--ppm');
    
    



  

   const handleChangeGender = (selectedGender: 'woman' | 'man') => {
    setGender((prevState) => ({
      ...prevState,
      woman: selectedGender === 'woman',
      man: selectedGender === 'man',
    }));
  };

    const data = [
        {screen: 1, content: <NameOnboard value={name} onChangeText={(text: string) => setName(text)}/>},
        {screen: 2, content: <SizeOnboard value={size} onChangeText={(text: string) => setSize(text)} name={name}/>},
        {screen: 3, content: <WeightOnboard value={weight} onChangeText={(text: string) => setWeight(text)} name={name}/>},
        {screen: 4, content: <AgeOnboard value={age} onChangeText={(text: string) => setAge(text)} name={name}/>},
        {screen: 5, content: <GenderOnboard 
        valueWoman={gender.woman} 
        valueMan={gender.man} 
        onChangeWoman={() => handleChangeGender('woman')}
        onChangeMan={() => handleChangeGender('man')} 
        name={name}/>}
    ]
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
  >
  <View style={{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      
      <View>
        {data[step].content}
      </View>
      <View>
      {step >= 1 &&   
      <TouchableOpacity 
        onPress={() => setStep(step - 1)}
        style={{
          backgroundColor: COLOR.orange,
          width: SIZE.width * 0.35,
          height: SIZE.M15 * 4,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: SIZE.M100,
          marginTop: SIZE.M15
        }}>
          <Text>Back</Text>
        </TouchableOpacity>}

        <TouchableOpacity 
        onPress={() => {
          (data.length - 1) === step ? navigation.navigate('Home') : setStep(step + 1);
          handleUpdate();
        }}
        style={{
          backgroundColor: COLOR.orange,
          width: SIZE.width * 0.35,
          height: SIZE.M15 * 4,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: SIZE.M100,
          marginTop: SIZE.M15
        }}>
          <Text style={{color: COLOR.white, fontSize: SIZE.M15 * 1.5, fontWeight: '700'}}>Prochain</Text>
        </TouchableOpacity>
      </View>
  </View>
  </KeyboardAvoidingView>
  )
}

export default OnboardScreen

const styles = StyleSheet.create({})