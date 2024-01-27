import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressCircle = ({ progress, radius }: any) => {
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    const newCircumference = 2 * Math.PI * radius;
    setCircumference(newCircumference);
  }, [radius]);

  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={{ aspectRatio: 1, width: radius * 2 }}>
      <View style={[styles.circle, { width: radius * 2, height: radius * 2 }]}>
        <Text style={styles.progressText}>{`${Math.round(progress * 100)}%`}</Text>
        <View style={styles.overlay}>
          <View
            style={[
              styles.progressCircle,
              { width: radius * 2, height: radius * 2, borderRadius: radius },
            ]}
          >
            <View
              style={[
                styles.progressBar,
                { width: radius * 2, height: radius * 2, borderRadius: radius, transform: [{ rotate: '-90deg' }] },
              ]}
            />
            <View
              style={[
                styles.progressIndicator,
                { width: radius * 2, height: radius * 2, borderRadius: radius, transform: [{ rotate: '-90deg' }] },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircle: {
    overflow: 'hidden',
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderLeftWidth: 10,
    borderBottomWidth: 10,
    borderColor: 'blue', // Change the color as needed
  },
  progressIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderColor: 'blue',
  },
});

export default ProgressCircle;
