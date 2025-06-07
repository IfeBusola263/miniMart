import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/sliceHooks';
import CartItem from './CartItem';
import {
  clearCart,
  type CartItem as CartItemProps,
} from '../../store/slices/cartSlice';
import ItemPriceSummary from '../../components/cart/ItemPriceSumary';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

const renderItem = ({item}: {item: CartItemProps}) => <CartItem {...item} />;

const Cart = () => {
  const {items} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const total = items
    .reduce((sum, item) => {
      return sum + item.quantity * +item.price;
    }, 0)
    .toFixed(2);

  const handleCheckout = useCallback(() => {
    dispatch(clearCart());
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FlatList
        contentContainerStyle={styles.list}
        data={items}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      {/* Cart Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryHeader}>Order Info</Text>
        <ItemPriceSummary summary="Subtotal" price={+total} />
        <ItemPriceSummary summary="Shipping" price={0} />
        <ItemPriceSummary summary="Total" price={+total} boldPriceText />
        <PrimaryButton
          label={`Checkout ($${total})`}
          onPress={handleCheckout}
        />
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  summaryHeader: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
  },
  summaryContainer: {
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
