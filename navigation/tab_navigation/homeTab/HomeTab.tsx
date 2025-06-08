import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRoutes} from '../../routes';
import TabHome from '../../../screens/home/TabHome';
import CartScreen from '../../../screens/cart/CartScreen';
import FavoritesScreen from '../../../screens/FavoritesScreen';
import ProfileScreen from '../../../screens/ProfileScreen';
import TabIconButton from '../../../components/buttons/TabIconButton';
import {
  FavouriteIcon,
  Home07Icon,
  ShoppingCart01Icon,
  UserCircleIcon,
} from '@hugeicons/core-free-icons';
import {colors} from '../../../utils/colors';
import {useAppSelector} from '../../../hooks/sliceHooks';
import {TabParamList} from '../../types';

const Tab = createBottomTabNavigator<TabParamList>();

type tabBarIconProps = {
  focused: boolean;
};

const renderHomeIcon = ({focused}: tabBarIconProps) => (
  <TabIconButton iconName={Home07Icon} focused={focused} />
);
const renderCartIcon = ({focused}: tabBarIconProps) => (
  <TabIconButton iconName={ShoppingCart01Icon} focused={focused} />
);
const renderFavoritesIcon = ({focused}: tabBarIconProps) => (
  <TabIconButton iconName={FavouriteIcon} focused={focused} />
);
const renderProfileIcon = ({focused}: tabBarIconProps) => (
  <TabIconButton iconName={UserCircleIcon} focused={focused} />
);

const HomeTab = () => {
  const {items} = useAppSelector(state => state.cart);
  const cartCount = items.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primaryButton,
        tabBarInactiveTintColor: '#000000',
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: 'IBMPlexSans-Medium',
          marginTop: 8,
        },
        tabBarStyle: {
          height: 90,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name={TabRoutes.tabHome}
        component={TabHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name={TabRoutes.cart}
        component={CartScreen}
        options={{
          tabBarIcon: renderCartIcon,
          tabBarBadge: cartCount,
          tabBarBadgeStyle: {
            backgroundColor: '#3C4856',
            fontFamily: 'IBMPlexSans-Bold',
            fontSize: 10.22,
            lineHeight: 17.04,
          },
        }}
      />
      <Tab.Screen
        name={TabRoutes.favorites}
        component={FavoritesScreen}
        options={{
          tabBarIcon: renderFavoritesIcon,
        }}
      />
      <Tab.Screen
        name={TabRoutes.profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
