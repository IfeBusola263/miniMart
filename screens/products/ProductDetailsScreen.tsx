import React, {useCallback} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/headers/Header';
import BackButton from '../../components/buttons/BackButton';
import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../../navigation/types';
import {StackRoutes} from '../../navigation/routes';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import {colors} from '../../utils/colors';
import SmallButton from '../../components/buttons/SmallButton';
import {FavouriteIcon} from '@hugeicons/core-free-icons';
import Toast from 'react-native-toast-message';
import {useAppDispatch, useAppSelector} from '../../hooks/sliceHooks';
import {add} from '../../store/slices/cartSlice';

export type ProductScreenProps = NativeStackScreenProps<
  RootParamList,
  typeof StackRoutes.productDetails
>;

const ProductDetailsScreen = ({navigation, route}: ProductScreenProps) => {
  const dispatch = useAppDispatch();
  const {items} = useAppSelector(state => state.cart);
  const {name, image, price, description, id, category} = route.params!;

  const isAddedToCart = !!items.find(item => item.id === id);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = useCallback(() => {
    const payload = {
      category,
      id,
      image,
      price,
      description,
      name,
    };

    dispatch(add(payload));
    Toast.show({
      type: 'customToast',
      text1: 'Item has been added to cart',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BackButton label="Go back" onPress={handleGoBack} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.favButtonContainer}>
          <SmallButton iconName={FavouriteIcon} onPress={() => {}} />
        </View>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>

        {/* Description */}
        <View style={styles.descContainer}>
          <Text style={styles.descriptionText}>About This Item</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label={isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          onPress={handleAddToCart}
          disable={isAddedToCart}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  favButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 40,
    zIndex: 99,
  },
  image: {
    height: 331.6,
    backgroundColor: colors.imageBgColor,
    borderRadius: 15,
    // borderColor: 'black',
    // borderWidth: 1,
    marginBottom: 4,
  },
  name: {
    fontSize: 17,
    fontFamily: 'IBMPlexSans-Regular',
  },
  price: {
    fontSize: 32.75,
    fontFamily: 'IBMPlexSans-Bold',
  },
  descContainer: {
    marginTop: 10,
  },
  descriptionText: {
    color: colors.descColor,
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Regular',
  },

  buttonContainer: {
    paddingBottom: 30,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
});
