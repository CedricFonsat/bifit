import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import { SIZE } from '../../constants/size';
import { COLOR } from '../../constants/color';
import { ArrowDownLeftFromCircle, ChevronLeft } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeState } from '../../types/Interface';
import { updateOnboard } from '../../store/OnboardReducer';

export const SizeOnboard = ({next}: any) => {

  const onboard = useSelector((state: TypeState) => state.onboard);
  const dispatch = useDispatch();
  const user = onboard.find(x => x && x.id === 1)
  const [taille, setTaille] = useState(user?.size?.toString() || '');
  const tailleInputRef = useRef<TextInput>(null);  
  
  useEffect(() => {
   tailleInputRef.current?.focus();
  }, []);

  const handleUpdate = () => {
    dispatch(updateOnboard({
        id: user?.id,
        name: user?.name,
        size: taille,
        genre: user?.genre,
        weight: user?.weight,
        age: user?.age
    }));
}

  return (
    <View style={{
      width: SIZE.M100 * 3,
      height:SIZE.height,
      backgroundColor: COLOR.orange,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{marginBottom: SIZE.M100}}>Quel est votre taille {user?.name} en cm ?</Text>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
      <TextInput 
       ref={tailleInputRef} // Ref pour accéder au TextInput
       placeholder="Taille en cm"
       keyboardType="numeric" // Active le clavier numérique
       value={taille}
       onChangeText={(text: string) => setTaille(text)}
      />
      </View>
    </View>
  )
}

export const WeightOnboard = () => {
  const onboard = useSelector((state: TypeState) => state.onboard);
  const dispatch = useDispatch();
  const user = onboard.find(x => x && x.id === 1)
  const [weight, setWeight] = useState('');
  const weightInputRef = useRef<TextInput>(null); 


  console.log(user,'rrr');

  useEffect(() => {
    weightInputRef.current && weightInputRef.current?.focus();
  }, []);

  const handleChange = (text: string) => {
    if (/^\d+$/.test(text) || text === '') {
      setWeight(text);
    }
  };

  return (
    <View style={{
      width: SIZE.M100 * 3,
      height:SIZE.height,
      backgroundColor: COLOR.orange,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{marginBottom: SIZE.M100}}>Quel est votre poid "Jack Line" en KG ?</Text>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
      <TextInput 
       ref={weightInputRef} // Ref pour accéder au TextInput
       placeholder="Poid en KG"
       keyboardType="numeric" // Active le clavier numérique
       value={weight}
       onChangeText={handleChange}
      />
      </View>
    </View>
  
)}

export const AgeOnboard = () => {
  const [age, setAge] = useState('');
  const ageInputRef = useRef(null);

  useEffect(() => {
    ageInputRef.current && ageInputRef.current.focus();
  }, []);

  const handleChange = (text: string) => {
    if (/^\d+$/.test(text) || text === '') {
      setAge(text);
    }
  };

  return (
    <View style={{
      width: SIZE.M100 * 3,
      height:SIZE.height,
      backgroundColor: COLOR.orange,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{marginBottom: SIZE.M100}}>Quel est votre age "Jack Line" ?</Text>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
      <TextInput 
       ref={ageInputRef} // Ref pour accéder au TextInput
       placeholder="Entre votre age"
       keyboardType="numeric" // Active le clavier numérique
       value={age}
       onChangeText={handleChange}
      />
      </View>
    </View>
  )}

export const GenreOnboard = () => {
  const [isSelect, setIsSelect] = useState(true);
  const [isSelect2, setIsSelect2] = useState(false);

  return (
    <View style={{
      width: SIZE.M100 * 3,
      height:SIZE.height,
      backgroundColor: COLOR.orange,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{marginBottom: SIZE.M100}}>Qui est te vous "Jack Line" ?</Text>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
           <TouchableOpacity 
           onPress={() => {
            setIsSelect(!isSelect);
            setIsSelect2(!isSelect2)
           }}
           style={{
            width: SIZE.M100,
            height: SIZE.M100,
            backgroundColor: isSelect ? COLOR.red : 'gray',
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: SIZE.M100
           }}><Text>Woman</Text></TouchableOpacity>
  
           <TouchableOpacity 
           onPress={() => {
            setIsSelect(!isSelect);
            setIsSelect2(!isSelect2)
           }}
           style={{
            width: SIZE.M100,
            height: SIZE.M100,
            backgroundColor: isSelect2 ? COLOR.red : 'gray',
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: SIZE.M100
           }}><Text>Homme</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const OnboardingScreen = () => {

  const [step, setStep] = useState(0);
  const nextButtonRef = useRef(null);
  const [data, setData] = useState([
    { title: 'Page 1', content: <SizeOnboard /> },
    { title: 'Page 2', content: <WeightOnboard/> },
    { title: 'Page 3', content: <AgeOnboard/> },
    { title: 'Page 4', content: <GenreOnboard/> },
  ]);

  console.log(data.length, step);
  

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
          ref={nextButtonRef}
          onPress={() => {
            (data.length - 1) === step ? console.log('fin') : setStep(step + 1);
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
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
