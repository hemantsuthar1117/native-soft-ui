import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  helperText,
  disabled,
  type = 'text',
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (error) return theme.colors.error;
    if (isFocused) return theme.colors.primary;
    return theme.colors.gray[300];
  };

  const getBackgroundColor = () => {
    if (disabled) return theme.colors.gray[100];
    return theme.colors.white;
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
      ...style
    },
    label: {
      marginBottom: theme.spacing.xs,
      color: theme.colors.gray[700],
      ...theme.typography.body2
    },
    inputContainer: {
      backgroundColor: getBackgroundColor(),
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      borderColor: getBorderColor(),
      padding: theme.spacing.md,
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2
    },
    input: {
      color: theme.colors.gray[800],
      ...theme.typography.body1
    },
    helperText: {
      marginTop: theme.spacing.xs,
      color: error ? theme.colors.error : theme.colors.gray[500],
      ...theme.typography.caption
    }
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={!disabled}
          placeholderTextColor={theme.colors.gray[400]}
          {...props}
        />
      </View>
      {helperText && (
        <Text style={styles.helperText}>{helperText}</Text>
      )}
    </View>
  );
};

export default Input;