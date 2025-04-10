import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Card = ({
  variant = 'elevated',
  children,
  style,
  ...props
}) => {
  const getElevation = () => {
    switch (variant) {
      case 'flat':
        return 0;
      case 'elevated':
        return 4;
      case 'prominent':
        return 8;
      default:
        return 4;
    }
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.md,
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: getElevation() },
      shadowOpacity: 0.1,
      shadowRadius: getElevation() * 2,
      elevation: getElevation(),
      ...style
    }
  });

  return (
    <View style={styles.card} {...props}>
      {children}
    </View>
  );
};

export default Card;