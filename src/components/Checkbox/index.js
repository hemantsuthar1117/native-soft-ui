import React from 'react';
import { TouchableOpacity, View, Animated, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Checkbox = ({
  checked,
  onValueChange,
  disabled,
  color = 'primary',
  size = 'md',
  style,
  ...props
}) => {
  const scale = new Animated.Value(checked ? 1 : 0);

  React.useEffect(() => {
    Animated.spring(scale, {
      toValue: checked ? 1 : 0,
      bounciness: 4,
      speed: 10,
      useNativeDriver: true
    }).start();
  }, [checked]);

  const getSize = () => {
    switch (size) {
      case 'sm':
        return 18;
      case 'lg':
        return 26;
      default:
        return 22;
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: getSize(),
      height: getSize(),
      borderRadius: theme.borderRadius.sm,
      borderWidth: 2,
      borderColor: disabled
        ? theme.colors.gray[300]
        : checked
        ? theme.colors[color]
        : theme.colors.gray[400],
      backgroundColor: checked ? theme.colors[color] : theme.colors.white,
      opacity: disabled ? 0.6 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      ...style
    },
    checkmark: {
      width: getSize() * 0.6,
      height: getSize() * 0.3,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderColor: theme.colors.white,
      transform: [{ rotate: '45deg' }, { scale }]
    }
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => !disabled && onValueChange && onValueChange(!checked)}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      {checked && (
        <Animated.View style={styles.checkmark} />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;