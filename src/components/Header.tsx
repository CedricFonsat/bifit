import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZE } from '../constants/size'
import { COLOR } from '../constants/color';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { TypeState } from '../types/Interface';


const Header = () => {

  const onboard = useSelector((state: TypeState) => state.onboard);
  const user = onboard.find(x => x && x.id === 1);

  const avatar = createAvatar(lorelei, {
    seed: 'Kitty',
  }).toString();

  return (
    <View style={{
        width: SIZE.width,
        height: SIZE.M100 * 1.5,
       // backgroundColor: COLOR.orange,
        marginBottom: SIZE.M50,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }}>
      <View style={{
        flexDirection: 'row',
        width: SIZE.width / 1.15,
        height: SIZE.M50,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{fontSize: SIZE.M15 * 1.5}}>Bonjour, {user?.name}</Text>
        <View style={{ width: SIZE.M50, height: SIZE.M50, backgroundColor: COLOR.orange, borderRadius: SIZE.M100}}> 
          <SvgXml xml={avatar} /> 
          </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})