import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import {colors} from '../../utils/colors';

type BackButtonProps = {
  label: string;
  onPress: () => void;
};

const BackButton = ({label, onPress}: BackButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.7}]}
        onPress={onPress}>
        <FontAwesomeIcon icon={faAngleLeft} color={colors.grey500} />
      </Pressable>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    gap: 10,
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 24,
    alignSelf: 'flex-end',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  label: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 18,
    // borderColor: 'black',
    // borderWidth: 1,
  },
});
