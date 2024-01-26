import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { SIZE } from '../../constants/size';
import { COLOR } from '../../constants/color';

export const SizeOnboard = () => {

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
      <Text style={{marginBottom: SIZE.M100}}>Age</Text>
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

export const WeightOnboard = () => (
  <View>
    <Text>Weight</Text>
    <Text>gjhvhj</Text>
  </View>
)

export const AgeOnboard = () => (
  <View style={{
    width: SIZE.M100,
    height:SIZE.height,
    backgroundColor: COLOR.orange
  }}>
    <Text>Age</Text>
    <View style={{
      width: SIZE.M100,
      backgroundColor: COLOR.black
    }}>
         <View><Text>Homme</Text></View>
         <View><Text>Femme</Text></View>
    </View>
  </View>
)

export const GenreOnboard = () => (
  <View style={{
    width: SIZE.M100,
    height:SIZE.height,
    backgroundColor: COLOR.red
  }}>
    <Text>Age</Text>
    <View style={{
      width: SIZE.width,
    }}>
         <View><Text>Homme</Text></View>
         <View><Text>Femme</Text></View>
    </View>
  </View>
)

const OnboardingScreen = () => {
  const [data, setData] = useState([
    { title: 'Page 1', content: <SizeOnboard/> },
    { title: 'Page 2', content: <WeightOnboard/> },
    { title: 'Page 3', content: <AgeOnboard/> },
    { title: 'Page 4', content: <GenreOnboard/> },
  ]);

  const handleSwipe = (index: number) => {
    console.log('Page actuelle:', index);
  };

  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      onIndexChanged={(index) => handleSwipe(index)}
    >
      {data.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
          {index === data.length - 1 && (
            <TouchableOpacity onPress={() => console.log('Appuyé sur le bouton')}>
              <Text>Suivant</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </Swiper>
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
