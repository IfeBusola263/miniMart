import {SearchIcon} from '@hugeicons/core-free-icons';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils/colors';
// import {
//   FavouriteIcon,
//   Home07Icon,
//   ShoppingCart01Icon,
//   UserCircleIcon,
// } from '@hugeicons/core-free-icons';

type IconType = typeof SearchIcon;

// const icons = {
//   home: Home07Icon,
//   cart: ShoppingCart01Icon,
//   favorites: FavouriteIcon,
//   profile: UserCircleIcon,
// };

// type Icon = keyof typeof icons;

type TabIconButtonProps = {
  iconName: IconType;
  // iconName: Icon;
  focused: boolean;
  //   color: string;
};

const TabIconButton = ({iconName, focused}: TabIconButtonProps) => {
  return (
    <View style={[styles.container, focused && styles.tabFocused]}>
      <HugeiconsIcon icon={iconName} color={focused ? '#FFFFFF' : '#000000'} />
      {/* <HugeiconsIcon icon={iconName} color={focused ? '#FFFFFF' : color} /> */}
    </View>
  );
};

export default TabIconButton;

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  tabFocused: {
    backgroundColor: colors.primaryButton,
    borderRadius: 16,
  },
});
