import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

export default function PedometerComponent() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    Pedometer.isAvailableAsync().then(
      (result: any)  => {
        setIsPedometerAvailable(String(result));
      },
      (error: any)  => {
        setIsPedometerAvailable('Could not get pedometer availability');
      }
    );

    const subscription = Pedometer.watchStepCount((result: any)  => {
      setStepCount(result.steps);
    });

    const end = new Date();
    const start = new Date(end);
    start.setDate(end.getDate() - 1); 

    Pedometer.getStepCountAsync(start, end).then(
      (result: any) => {
        setStepCount(result.steps);
      },
      (error: any)=> {
        console.log('Error getting step count: ', error);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return stepCount
}
