import {FlatList, StyleSheet} from 'react-native';
import ProductItem from './ProductItem';
import {products} from '../../utils/products';
import {type Product} from './types';

const renderItem = ({item}: {item: Product}) => <ProductItem {...item} />;

const ProductList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={products}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.column}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  column: {
    justifyContent: 'space-between',
    gap: 10,
  },
});
