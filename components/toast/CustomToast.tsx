import {
  CheckmarkCircle01FreeIcons,
  Cancel01FreeIcons,
} from '@hugeicons/core-free-icons';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {colors} from '../../utils/colors';

type ToastProps = {
  text: string;
};

const CustomToast = ({text}: ToastProps) => {
  const handleHideToast = useCallback(() => {
    Toast.hide();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <HugeiconsIcon icon={CheckmarkCircle01FreeIcons} color={'#10B981'} />
      </View>
      <Text style={styles.text}>{text}</Text>
      <Pressable
        style={({pressed}) => [styles.icon, pressed && {opacity: 0.8}]}
        onPress={handleHideToast}>
        {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
        <HugeiconsIcon icon={Cancel01FreeIcons} color={colors.primaryText} />
      </Pressable>
    </View>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    gap: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.successPrimary,
    backgroundColor: '#FFFFFF',
    width: '90%',
  },
  icon: {
    height: 24,
    width: 24,
  },
  text: {
    color: colors.primaryText,
    fontWeight: 600,
    lineHeight: 20,
    fontSize: 14,
  },
});
