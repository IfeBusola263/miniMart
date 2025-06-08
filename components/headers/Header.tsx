import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {HugeiconsIcon} from '@hugeicons/react-native';
import {NotificationIcon, SearchIcon} from '@hugeicons/core-free-icons';
import {colors} from '../../utils/colors';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useRoute} from '@react-navigation/native';

const Header = () => {
  const inputRef = useRef<TextInput>(null);
  const [isHome, setIsHome] = useState(true);
  const {name} = useRoute();

  useEffect(() => {
    if (name === 'TabHome') {
      setIsHome(true);
      return;
    }

    setIsHome(false);
  }, [name]);

  const handleFocus = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topDetails}>
        <Text style={styles.logo}>Full Logo</Text>
        <Text style={styles.deliveryText}>Delivery Address</Text>
        <View>
          <HugeiconsIcon
            icon={NotificationIcon}
            size={24}
            color={colors.grey500}
          />
        </View>
      </View>
      <Text style={styles.address}>Umuezike Road, Oyo State</Text>

      {/* Search Input */}
      {isHome && (
        <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
          <View style={styles.searchIcon}>
            <HugeiconsIcon icon={SearchIcon} color={colors.grey400} />
          </View>

          <TextInput
            ref={inputRef}
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={colors.grey300}
          />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // borderColor: 'black',
    // borderWidth: 1,
    borderBottomColor: '#E2E8F0',
    borderBottomWidth: 1,
  },
  logo: {
    borderColor: '#2563EB',
    color: '#2563EB',
    borderWidth: 0.88,
    borderStyle: 'dashed',
    backgroundColor: '#93C5FD',
    textAlign: 'center',
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  topDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveryText: {
    // textAlign: 'center',
    paddingLeft: '22%',
    flex: 1,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: 10,
    lineHeight: 28,
    // borderColor: 'black',
    // borderWidth: 1,
    textTransform: 'uppercase',
  },
  address: {
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 12,
    lineHeight: 28,
  },
  searchInputContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.grey200,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    gap: 8,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
  },
  searchInput: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
});
