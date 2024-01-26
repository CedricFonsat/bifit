// import { StyleSheet, Text, View } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import AppleHealthKit, {
//   HealthValue,
//   HealthInputOptions,
// } from 'react-native-health';

// const AppleHealthKitComponent = () => {
//   const [stepCount, setStepCount] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchStepCount = async () => {
//       try {
//         const options: HealthInputOptions = {
//           date: new Date().toISOString(),
//           includeManuallyAdded: false,
//         };
    
//         const results: HealthValue = await new Promise((resolve, reject) => {
//           AppleHealthKit.getStepCount(options, (err: string, results: HealthValue) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve(results);
//             }
//           });
//         });
    
//         // Assuming result is an object with step count
//         setStepCount(results.value);
//       } catch (error) {
//         console.error('Error fetching step count:', error);
//       }
//     };
    

//     fetchStepCount();
//   }, []); // Empty dependency array to run the effect only once during component mount

//   return (
//     <View>
//       <Text>AppleHealthKit</Text>
//       {stepCount !== null && <Text>Step Count: {stepCount}</Text>}
//     </View>
//   );
// };

// export default AppleHealthKitComponent;

// const styles = StyleSheet.create({});
