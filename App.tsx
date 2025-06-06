import './gesture-handler';
import React from 'react';
import MainNavigation from './navigation/main_navigation/MainNavigation';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import CustomToast from './components/toast/CustomToast';

const toastConfig = {
  customToast: ({text1}: {text1: string}) => <CustomToast text={text1} />,
};

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <MainNavigation />
      <Toast
        topOffset={20}
        visibilityTime={2000}
        autoHide
        config={toastConfig}
      />
    </NavigationContainer>
  );
};

export default App;
