import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from '../tab_navigation/homeTab/HomeTab';
import {RootParamList} from '../types';
import {StackRoutes} from '../routes';
import ProductDetailsScreen from '../../screens/products/ProductDetailsScreen';

const Stack = createStackNavigator<RootParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={StackRoutes.home} component={HomeTab} />
      <Stack.Screen
        name={StackRoutes.productDetails}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
