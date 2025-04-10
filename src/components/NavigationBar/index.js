import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const NavigationBar = ({ activeTab, onTabPress }) => {
  const tabs = [
    { id: 'home', label: '🏠 Home' },
    { id: 'profile', label: '👤 Profile' },
    { id: 'notifications', label: '🔔 Notifications' },
    { id: 'settings', label: '⚙️ Settings' },
    { id: 'articles', label: '📄 Articles' },
    { id: 'cart', label: '🛒 Cart' },
    { id: 'calendar', label: '📅 Calendar' },
    { id: 'chat', label: '💬 Chat' }
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tab, activeTab === tab.id && styles.activeTab]}
          onPress={() => onTabPress(tab.id)}
        >
          <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[200],
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm
  },
  tab: {
    flex: 1,
    minWidth: '25%',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm
  },
  activeTab: {
    backgroundColor: theme.colors.primary + '10'
  },
  tabText: {
    ...theme.typography.caption,
    color: theme.colors.gray[600]
  },
  activeTabText: {
    color: theme.colors.primary,
    fontWeight: '600'
  }
});

export default NavigationBar;