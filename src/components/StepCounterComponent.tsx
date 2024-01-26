// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Pedometer from 'react-native-pedometer';
// import { PedometerOptions, PedometerResult } from '../types/Interface'

// const StepCounterComponent: React.FC = () => {
//   const [stepCount, setStepCount] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchStepCount = async () => {
//       try {
//         const startDate = new Date();
//         startDate.setHours(0, 0, 0, 0);

//         const endDate = new Date();

//         const options: PedometerOptions = { startDate, endDate };

//         Pedometer.getStepCountAsync(startDate, endDate, (result: PedometerResult) => {
//           setStepCount(result.steps);
//         });
//       } catch (error) {
//         console.error('Error fetching step count:', error);
//       }
//     };

//     fetchStepCount();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>Step Count: {stepCount}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default StepCounterComponent;
