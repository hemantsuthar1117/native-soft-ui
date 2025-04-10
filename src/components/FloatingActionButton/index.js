import React from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';

const FloatingActionButton = ({
  onPress,
  icon,
  variant = 'primary',
  size = 'md',
  style,
  ...props
}) => {
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  const getGradientColors = () => {
    switch (variant) {
      case 'secondary':
        return [theme.colors.secondary, theme.colors.primary];
      case 'success':
        return [theme.colors.success, theme.colors.primary];
      case 'warning':
        return [theme.colors.warning, theme.colors.secondary];
      case 'error':
        return [theme.colors.error, theme.colors.warning];
      default:
        return [theme.colors.primary, theme.colors.secondary];
    }
  };

  const getSize = () => {
    switch (size) {
      case 'sm':
        return 40;
      case 'lg':
        return 64;
      default:
        return 56;
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: getSize(),
      height: getSize(),
      borderRadius: getSize() / 2,
      overflow: 'hidden',
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
      ...style
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      width: getSize() * 0.5,
      height: getSize() * 0.5,
      tintColor: theme.colors.white
    }
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ scale }] }
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
        {...props}
      >
        <LinearGradient
          colors={getGradientColors()}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {icon}
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FloatingActionButton;