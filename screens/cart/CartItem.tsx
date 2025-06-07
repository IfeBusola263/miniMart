import {Image, StyleSheet, Text, View} from 'react-native';
import {
  add,
  CartItem as CartItemProps,
  remove,
} from '../../store/slices/cartSlice';
import SmallButton from '../../components/buttons/SmallButton';
import {
  Add01Icon,
  Delete02Icon,
  MinusSignIcon,
} from '@hugeicons/core-free-icons';
import {useCallback} from 'react';
import {useAppDispatch} from '../../hooks/sliceHooks';
import {colors} from '../../utils/colors';

const CartItem = ({
  name,
  price,
  quantity,
  id,
  category,
  image,
  description,
}: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(add({name, category, price, description, image, id}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleDecrement = useCallback(() => {
    dispatch(remove({id: id}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleRemove = useCallback(() => {
    dispatch(remove({id: id, delete: true}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: image}}
          resizeMode="contain"
        />
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.stockInfo}>In stock</Text>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <View style={styles.addSubstractContainer}>
            <SmallButton iconName={MinusSignIcon} onPress={handleDecrement} />
            <Text>{quantity}</Text>
            <SmallButton iconName={Add01Icon} onPress={handleIncrement} />
          </View>
          <View style={styles.deleteButtonContainer}>
            <SmallButton iconName={Delete02Icon} onPress={handleRemove} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // height: 132,
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 15,
    // borderWidth: 1,
    // borderColor: 'black',
    backgroundColor: '#F6F5F8',
    gap: 10,
    marginBottom: 10,
  },
  detailsContainer: {
    flex: 2,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 106,
    // borderColor: 'black',
    borderRadius: 5,
  },
  name: {
    // fontFamily: 'IBMPlexSans-Regular',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 20,
    color: colors.grey700,
  },
  price: {
    fontWeight: 600,
    lineHeight: 32,
    fontSize: 17,
    color: colors.grey700,
  },
  stockInfo: {
    fontWeight: 400,
    lineHeight: 18,
    fontSize: 12,
    color: colors.successPrimary,
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 10,
  },
  addSubstractContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  deleteButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
