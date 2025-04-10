import React from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';

const Slider = ({
  value = 0,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  variant = 'primary',
  onValueChange,
  style,
  ...props
}) => {
  const [width, setWidth] = React.useState(0);
  const translateX = React.useRef(new Animated.Value(0)).current;
  const lastOffset = React.useRef(0);

  React.useEffect(() => {
    const position = (value - minimumValue) / (maximumValue - minimumValue) * width;
    translateX.setValue(position);
    lastOffset.current = position;
  }, [value, width]);

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

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        translateX.setOffset(lastOffset.current);
      },
      onPanResponderMove: (_, { dx }) => {
        const newPosition = Math.max(0, Math.min(width, lastOffset.current + dx));
        translateX.setValue(newPosition - lastOffset.current);
      },
      onPanResponderRelease: (_, { dx }) => {
        const newPosition = Math.max(0, Math.min(width, lastOffset.current + dx));
        lastOffset.current = newPosition;
        const newValue = minimumValue + (newPosition / width) * (maximumValue - minimumValue);
        const steppedValue = Math.round(newValue / step) * step;
        onValueChange?.(steppedValue);
      }
    })
  ).current;

  const styles = StyleSheet.create({
    container: {
      height: 40,
      justifyContent: 'center',
      ...style
    },
    track: {
      height: 6,
      backgroundColor: theme.colors.gray[200],
      borderRadius: theme.borderRadius.circle
    },
    activeTrack: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      borderRadius: theme.borderRadius.circle
    },
    thumb: {
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius: theme.borderRadius.circle,
      backgroundColor: theme.colors.white,
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4
    }
  });

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)}
      {...props}
    >
      <View style={styles.track}>
        <LinearGradient
          colors={getGradientColors()}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.activeTrack, { width: translateX }]}
        />
      </View>
      <Animated.View
        style={[styles.thumb, { transform: [{ translateX }] }]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default Slider;