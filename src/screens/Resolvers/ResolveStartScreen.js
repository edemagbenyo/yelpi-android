import React, {useEffect} from 'react';
import StartScreen from '../Common/StartScreen';

const ResolveStartScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ResolveAuth');
    }, 3000);
  }, []);

  return <StartScreen />;
};

export default ResolveStartScreen;
