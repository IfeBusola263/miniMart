import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/headers/Header';
import BackButton from '../../components/buttons/BackButton';
// import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCallback} from 'react';
import Cart from './Cart';
import {RootParamList, TabParamList} from '../../navigation/types';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabRoutes} from '../../navigation/routes';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Use composite props, so that nested navigator will have access to
// Parent navigator.

type CartScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, typeof TabRoutes.cart>,
  NativeStackScreenProps<RootParamList>
>;

const CartScreen = ({navigation}: CartScreenProps) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BackButton label="Your Cart" onPress={handleGoBack} />
      <Cart />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
