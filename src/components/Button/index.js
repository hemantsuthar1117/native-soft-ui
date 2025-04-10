import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Button = ({
  variant = 'filled',
  size = 'md',
  color = 'primary',
  children,
  onPress,
  disabled,
  style,
  ...props
}) => {
  const getBackgroundColor = () => {
    if (disabled) return theme.colors.gray[200];
    if (variant === 'outlined') return 'transparent';
    if (variant === 'text') return 'transparent';
    return theme.colors[color];
  };

  const getTextColor = () => {
    if (disabled) return theme.colors.gray[400];
    if (variant === 'outlined' || variant === 'text') return theme.colors[color];
    return theme.colors.white;
  };

  const getBorderColor = () => {
    if (disabled) return theme.colors.gray[200];
    if (variant === 'outlined') return theme.colors[color];
    return 'transparent';
  };

  const getPadding = () => {
    switch (size) {
      case 'sm':
        return theme.spacing.sm;
      case 'lg':
        return theme.spacing.lg;
      default:
        return theme.spacing.md;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'sm':
        return theme.typography.body2.fontSize;
      case 'lg':
        return theme.typography.h4.fontSize;
      default:
        return theme.typography.body1.fontSize;
    }
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: getBackgroundColor(),
      borderRadius: theme.borderRadius.md,
      borderWidth: variant === 'outlined' ? 1 : 0,
      borderColor: getBorderColor(),
      padding: getPadding(),
      opacity: disabled ? 0.6 : 1,
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    },
    text: {
      color: getTextColor(),
      fontSize: getFontSize(),
      fontWeight: '600'
    }
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;