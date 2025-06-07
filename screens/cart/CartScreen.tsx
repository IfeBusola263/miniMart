import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/headers/Header';
import BackButton from '../../components/buttons/BackButton';
// import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCallback} from 'react';
import Cart from './Cart';

// const CartScreenProps = Na

const CartScreen = ({navigation}) => {
  // console.log(items[0]);

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
