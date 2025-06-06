import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

const PrimaryButton = ({label, onPress}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.primaryButton,
    borderRadius: 8,
  },
  label: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
