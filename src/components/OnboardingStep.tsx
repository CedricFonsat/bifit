import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZE } from '../constants/size'
import { COLOR } from '../constants/color'

export const OnboardingStep1 = () => {
  return (
    <View style={{
        width: SIZE.width,
        height: SIZE.M100,
        backgroundColor: COLOR.orange
    }}>
      <Text>First 1</Text>
    </View>
  )
}

export const OnboardingStep2 = () => {
    return (
      <View style={{
        width: SIZE.width,
        height: SIZE.M100,
        backgroundColor: COLOR.orange
      }}>
        <Text>Second 2</Text>
      </View>
    )
  }

  export const OnboardingStep3 = () => {
    return (
      <View style={{
        width: SIZE.width,
        height: SIZE.M100,
        backgroundColor: COLOR.orange
      }}>
        <Text>Third 3</Text>
      </View>
    )
  }


const styles = StyleSheet.create({})