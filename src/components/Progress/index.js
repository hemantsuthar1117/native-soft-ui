import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';

const Progress = ({
  value = 0,
  variant = 'primary',
  height = 6,
  animated = true,
  style,
  ...props
}) => {
  const progress = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (animated) {
      Animated.spring(progress, {
        toValue: value,
        bounciness: 5,
        speed: 10,
        useNativeDriver: false
      }).start();
    } else {
      progress.setValue(value);
    }
  }, [value, animated]);

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

  const styles = StyleSheet.create({
    container: {
      height,
      backgroundColor: theme.colors.gray[200],
      borderRadius: theme.borderRadius.circle,
      overflow: 'hidden',
      ...style
    },
    progress: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      borderRadius: theme.borderRadius.circle
    }
  });

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  return (
    <View style={styles.container} {...props}>
      <Animated.View style={[styles.progress, { width }]}>
        <LinearGradient
          colors={getGradientColors()}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default Progress;