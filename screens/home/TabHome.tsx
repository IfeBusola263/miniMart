import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/headers/Header';
import BackButton from '../../components/buttons/BackButton';
import {useCallback} from 'react';
import Toast from 'react-native-toast-message';
import ProductList from '../products/ProductList';
// import PrimaryButton from '../components/buttons/PrimaryButton';

const TabHome = () => {
  const handleShowTost = useCallback(() => {
    Toast.show({
      type: 'customToast',
      text1: 'Item has been added to cart',
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BackButton onPress={handleShowTost} label="Go Back" />
      <ProductList />
    </SafeAreaView>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
