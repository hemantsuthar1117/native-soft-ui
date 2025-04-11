import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';

const TabBar = ({
  tabs,
  activeTab,
  onTabPress,
  variant = 'primary',
  style,
  ...props
}) => {
  const [tabWidths, setTabWidths] = React.useState([]);
  const translateX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (tabWidths.length > 0) {
      const position = tabWidths
        .slice(0, activeTab)
        .reduce((sum, width) => sum + width, 0);
      Animated.spring(translateX, {
        toValue: position,
        bounciness: 5,
        speed: 10,
        useNativeDriver: true
      }).start();
    }
  }, [activeTab, tabWidths]);

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
      flexDirection: 'row',
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.sm,
      shadowColor: theme.colors.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
      ...style
    },
    tabContainer: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    tabText: {
      ...theme.typography.body2,
      color: theme.colors.gray[600],
      fontWeight: '600'
    },
    activeTabText: {
      color: theme.colors.white
    },
    indicator: {
      position: 'absolute',
      top: theme.spacing.sm,
      bottom: theme.spacing.sm,
      borderRadius: theme.borderRadius.md
    }
  });

  return (
    <View style={styles.container} {...props}>
      <Animated.View
        style={[
          styles.indicator,
          {
            width: tabWidths[activeTab] || 0,
            transform: [{ translateX }]
          }
        ]}
      >
        <LinearGradient
          colors={getGradientColors()}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1, borderRadius: theme.borderRadius.md }}
        />
      </Animated.View>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tabContainer}
          onPress={() => onTabPress(index)}
          onLayout={({ nativeEvent }) => {
            const { width } = nativeEvent.layout;
            setTabWidths(prev => {
              const next = [...prev];
              next[index] = width;
              return next;
            });
          }}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === index && styles.activeTabText
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabBar;