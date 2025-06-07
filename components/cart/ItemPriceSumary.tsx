import {StyleSheet, Text, View} from 'react-native';

type SummaryProps = {
  summary: string;
  price: number;
  boldPriceText?: boolean;
};

const ItemPriceSummary = ({summary, price, boldPriceText}: SummaryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{summary}</Text>
      <Text style={[styles.text, boldPriceText && styles.boldtext]}>
        ${price}
      </Text>
    </View>
  );
};

export default ItemPriceSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'IBMPlexSans-Medium',
  },
  boldtext: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
  },
});
