import {SearchIcon} from '@hugeicons/core-free-icons';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {Pressable, StyleSheet} from 'react-native';

type Icon = typeof SearchIcon;

type SmallButtonProps = {
  iconName: Icon;
  onPress: () => void;
  bgColor?: string;
};

const SmallButton = ({iconName, onPress, bgColor}: SmallButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        bgColor && {backgroundColor: bgColor},
        pressed && {opacity: 0.7},
      ]}
      onPress={onPress}>
      <HugeiconsIcon icon={iconName} />
      {/* {makeSolid && isFave && (
        <FontAwesomeIcon icon={faHeart} size={24} color={colors.favColor} />
      )} */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: 44,
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default SmallButton;
