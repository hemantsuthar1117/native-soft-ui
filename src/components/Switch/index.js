import React from 'react';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Switch = ({
  value,
  onValueChange,
  disabled,
  trackColor = { false: theme.colors.gray[300], true: theme.colors.primary },
  thumbColor = theme.colors.white,
  style,
  ...props
}) => {
  const position = new Animated.Value(value ? 1 : 0);

  const handlePress = () => {
    if (disabled) return;

    const newValue = !value;
    Animated.spring(position, {
      toValue: newValue ? 1 : 0,
      bounciness: 5,
      speed: 10,
      useNativeDriver: true
    }).start();

    onValueChange && onValueChange(newValue);
  };

  const styles = StyleSheet.create({
    switch: {
      width: 52,
      height: 32,
      borderRadius: 16,
      padding: 2,
      backgroundColor: value ? trackColor.true : trackColor.false,
      opacity: disabled ? 0.6 : 1,
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      ...style
    },
    thumb: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: thumbColor,
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4
    }
  });

  const translateX = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20]
  });

  return (
    <TouchableOpacity
      style={styles.switch}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <Animated.View
        style={[
          styles.thumb,
          { transform: [{ translateX }] }
        ]}
      />
    </TouchableOpacity>
  );
};

export default Switch;