import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from '../tab_navigation/homeTab/HomeTab';
import {RootParamList} from '../types';
import {StackRoutes} from '../routes';

const Stack = createStackNavigator<RootParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={StackRoutes.home} component={HomeTab} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
