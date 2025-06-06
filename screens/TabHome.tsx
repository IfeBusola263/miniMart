import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/headers/Header';
import BackButton from '../components/buttons/BackButton';
import {useCallback} from 'react';
import Toast from 'react-native-toast-message';
import PrimaryButton from '../components/buttons/PrimaryButton';

const TabHome = () => {
  const handleShowTost = useCallback(() => {
    Toast.show({
      type: 'customToast',
      text1: 'Item has been added to cart',
      //   text2: 'This is some something 👋',
    });

    // Toast.show({
    //   type: 'success',
    //   text1: 'Item has been added to cart',
    //   //   text2: 'This is some something 👋',
    // });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BackButton onPress={handleShowTost} label="Go Back" />
      <PrimaryButton label="Check Out" onPress={() => {}} />
      <Text>Tab Home</Text>
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
