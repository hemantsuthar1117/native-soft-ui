import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Switch from '../components/Switch';
import { theme } from '../theme';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    emailUpdates: true,
    soundEnabled: true
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.gray[50],
      padding: theme.spacing.md
    },
    header: {
      marginBottom: theme.spacing.xl
    },
    headerTitle: {
      ...theme.typography.h3,
      color: theme.colors.gray[800]
    },
    headerSubtitle: {
      ...theme.typography.body2,
      color: theme.colors.gray[500],
      marginTop: theme.spacing.xs
    },
    section: {
      marginBottom: theme.spacing.xl
    },
    sectionTitle: {
      ...theme.typography.h4,
      color: theme.colors.gray[800],
      marginBottom: theme.spacing.md
    },
    settingCard: {
      marginBottom: theme.spacing.md
    },
    settingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: theme.spacing.sm
    },
    settingLabel: {
      ...theme.typography.body1,
      color: theme.colors.gray[800]
    },
    settingDescription: {
      ...theme.typography.caption,
      color: theme.colors.gray[500],
      marginTop: theme.spacing.xs
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.gray[200],
      marginVertical: theme.spacing.sm
    }
  });

  const handleSettingChange = (key) => (value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.headerSubtitle}>Customize your app experience</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <Card style={styles.settingCard}>
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingLabel}>Dark Mode</Text>
              <Text style={styles.settingDescription}>Enable dark theme</Text>
            </View>
            <Switch
              value={settings.darkMode}
              onValueChange={handleSettingChange('darkMode')}
            />
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Card style={styles.settingCard}>
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingLabel}>Push Notifications</Text>
              <Text style={styles.settingDescription}>Receive app notifications</Text>
            </View>
            <Switch
              value={settings.notifications}
              onValueChange={handleSettingChange('notifications')}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingLabel}>Email Updates</Text>
              <Text style={styles.settingDescription}>Receive email notifications</Text>
            </View>
            <Switch
              value={settings.emailUpdates}
              onValueChange={handleSettingChange('emailUpdates')}
            />
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sound & Haptics</Text>
        <Card style={styles.settingCard}>
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingLabel}>Sound Effects</Text>
              <Text style={styles.settingDescription}>Enable sound effects</Text>
            </View>
            <Switch
              value={settings.soundEnabled}
              onValueChange={handleSettingChange('soundEnabled')}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Settings;