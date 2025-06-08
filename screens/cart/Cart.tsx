import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/sliceHooks';
import CartItem from './CartItem';
import {
  clearCart,
  type CartItem as CartItemProps,
} from '../../store/slices/cartSlice';
import ItemPriceSummary from '../../components/cart/ItemPriceSumary';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {TabRoutes} from '../../navigation/routes';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RootParamList, TabParamList} from '../../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';

type CartScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, typeof TabRoutes.tabHome>,
  StackNavigationProp<RootParamList>
>;

const renderItem = ({item}: {item: CartItemProps}) => <CartItem {...item} />;

const Cart = () => {
  const {items} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<CartScreenNavigationProps>();

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

  const renderEmptyCart = () => (
    <View style={styles.emptyCartContainer}>
      <Text style={styles.emptyTitle}>🛒 Your cart is empty</Text>
      <Pressable onPress={() => navigation.navigate(TabRoutes.tabHome)}>
        <Text style={styles.goBackText}>
          Go back to the home page to add items
        </Text>
      </Pressable>
    </View>
  );

  return (
    <>
      <FlatList
        contentContainerStyle={styles.list}
        data={items}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyCart}
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
  emptyCartContainer: {
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: 'IBMPlexSans-Bold',
    marginBottom: 10,
    color: '#333333',
  },
  goBackText: {
    fontSize: 16,
    fontFamily: 'IBMPlexSans-Regular',
    color: '#007bff',
    textDecorationLine: 'underline',
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
  emptyCart: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
