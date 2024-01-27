import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={styles.container}>
   <BarChart
  data={data}
  withVerticalLabels={false}
  withHorizontalLabels={false}
  width={350}
  height={200}
  yAxisSuffix="k"
  chartConfig={{
    backgroundColor: '#3498db', // Changez la couleur du fond ici
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  }}
  bezier
  style={styles.chart}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  //  backgroundColor: '#F5FCFF',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: 'red'
  },
});

export default ChartComponent;
