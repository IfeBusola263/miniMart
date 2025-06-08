import './gesture-handler';
import React from 'react';
import MainNavigation from './navigation/main_navigation/MainNavigation';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import CustomToast from './components/toast/CustomToast';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store/store';
import {Provider} from 'react-redux';

const toastConfig = {
  customToast: ({text1}: {text1?: string}) => <CustomToast text={text1} />,
};

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />
          <Toast
            topOffset={20}
            visibilityTime={2000}
            autoHide
            config={toastConfig}
          />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
