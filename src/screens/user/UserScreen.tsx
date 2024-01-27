import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import WheelPicker from 'react-native-wheely';
import { SIZE } from '../../constants/size';
import { COLOR } from '../../constants/color';

const UserScreen = () => {
    const tableauDeNombres = Array.from({ length: 48 }, (_, index) => 18 + index);
    const [selected, setSelected] = useState(20);

    console.log(selected,'hhh');
    
  return (
    <View>
       <WheelPicker
      options={tableauDeNombres}
      selected={selected}
      onChange={(city) => setSelected(city)}
      containerStyle={{
        width: SIZE.width,
        alignItems: 'center',
        backgroundColor: COLOR.orange,
      }}
      itemTextStyle={{
        fontSize: 70,
        fontWeight: 'bold',
       // color: '#98999E'
        color: COLOR.white
      }}
      itemHeight={120}
      selectedIndicatorStyle={{
        width: 250,
        height: 120,
        borderRadius: SIZE.M15 * 2,
        backgroundColor: COLOR.orange,
       // borderWidth: 5,
       // borderColor: '#FFDEC2'
      }}
    //   itemStyle={{
    //     width: SIZE.M100,
    //     height: SIZE.M100,
    //     backgroundColor: COLOR.orange
    //   }}
    />
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})