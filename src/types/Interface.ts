import { StackNavigationProp } from "@react-navigation/stack";

export interface PedometerResult {
  steps: number;
}

export interface PedometerOptions {
  startDate?: Date;
  endDate?: Date;
}

export interface OnboardState {
  // items: string[];
  id: number;
  name: string;
  size: number;
  gender: string;
  weight: number;
  age: number;
}

export interface TypeState {
  onboard: OnboardState[];
}


type RootStackParamList = {
  Home: undefined;
  Details: { itemId: string };
  // ... autres écrans
};

export type YourNavigatorParams = StackNavigationProp<
  RootStackParamList,
  'Home',
  'Onboard'
>;
