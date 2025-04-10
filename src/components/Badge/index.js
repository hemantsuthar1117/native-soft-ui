import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Badge = ({
  variant = 'filled',
  size = 'md',
  color = 'primary',
  label,
  style,
  ...props
}) => {
  const getBackgroundColor = () => {
    if (variant === 'outlined') return 'transparent';
    return theme.colors[color];
  };

  const getTextColor = () => {
    if (variant === 'outlined') return theme.colors[color];
    return theme.colors.white;
  };

  const getPadding = () => {
    switch (size) {
      case 'sm':
        return { horizontal: theme.spacing.sm, vertical: theme.spacing.xs };
      case 'lg':
        return { horizontal: theme.spacing.lg, vertical: theme.spacing.md };
      default:
        return { horizontal: theme.spacing.md, vertical: theme.spacing.sm };
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'sm':
        return theme.typography.caption.fontSize;
      case 'lg':
        return theme.typography.body1.fontSize;
      default:
        return theme.typography.body2.fontSize;
    }
  };

  const styles = StyleSheet.create({
    badge: {
      backgroundColor: getBackgroundColor(),
      borderRadius: theme.borderRadius.xxl,
      borderWidth: variant === 'outlined' ? 1 : 0,
      borderColor: theme.colors[color],
      paddingHorizontal: getPadding().horizontal,
      paddingVertical: getPadding().vertical,
      alignSelf: 'flex-start',
      ...style
    },
    text: {
      color: getTextColor(),
      fontSize: getFontSize(),
      fontWeight: '600'
    }
  });

  return (
    <View style={styles.badge} {...props}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default Badge;