import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/headers/Header';
import ProductList from '../products/ProductList';

const TabHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
