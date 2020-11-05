import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
function Oboarding({navigation}) {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/ncn.png')} />,
          title: 'Edutaion is the Key',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#000',
          image: <Image source={require('../assets/logo.png')} />,
          title: 'Learn from home',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Oboarding;
