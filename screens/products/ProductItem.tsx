import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {type Product} from './types';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {StackRoutes} from '../../navigation/routes';
import {RootParamList} from '../../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';

type ProductScreenNavigationProps = StackNavigationProp<
  RootParamList,
  typeof StackRoutes.productDetails
>;

const ProductItem = (props: Product) => {
  const {image, name, price} = props;
  const navigation = useNavigation<ProductScreenNavigationProps>();

  const handleViewProduct = useCallback(() => {
    navigation.navigate(StackRoutes.productDetails, {...props});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && {opacity: 0.7}]}
      onPress={handleViewProduct}>
      <Image style={styles.image} source={{uri: image}} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    // borderColor: 'black',
    // borderWidth: 1,
    width: '50%',
  },
  image: {
    height: 162,
    borderRadius: 8,
    backgroundColor: '#f6f4f8',
  },
  name: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
  },
  price: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 16,
    paddingTop: 8,
  },
});
