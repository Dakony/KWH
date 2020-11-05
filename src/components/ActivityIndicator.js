import React from 'react';
import LottieView from 'lottie-react-native';

const ActivityIndicator = () => {
  return (
    <LottieView source={require('../assets/loading.json')} autoPlay loop />
  );
};
export default ActivityIndicator;
