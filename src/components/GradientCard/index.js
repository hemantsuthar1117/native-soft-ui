import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';

const GradientCard = ({
  variant = 'primary',
  children,
  style,
  ...props
}) => {
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
      borderRadius: theme.borderRadius.lg,
      overflow: 'hidden',
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
      ...style
    },
    gradient: {
      padding: theme.spacing.lg
    }
  });

  return (
    <View style={styles.container} {...props}>
      <LinearGradient
        colors={getGradientColors()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default GradientCard;