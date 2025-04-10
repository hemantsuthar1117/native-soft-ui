import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import Badge from '../components/Badge';
import GradientCard from '../components/GradientCard';
import { theme } from '../theme';

const Profile = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.gray[50],
      padding: theme.spacing.md
    },
    header: {
      alignItems: 'center',
      marginBottom: theme.spacing.xl
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: theme.spacing.md
    },
    name: {
      ...theme.typography.h3,
      color: theme.colors.gray[800]
    },
    role: {
      ...theme.typography.body2,
      color: theme.colors.gray[500],
      marginTop: theme.spacing.xs
    },
    statsContainer: {
      flexDirection: 'row',
      gap: theme.spacing.md,
      marginBottom: theme.spacing.xl
    },
    statCard: {
      flex: 1,
      alignItems: 'center'
    },
    statValue: {
      ...theme.typography.h2,
      color: theme.colors.white
    },
    statLabel: {
      ...theme.typography.caption,
      color: theme.colors.white,
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
    achievementCard: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md
    },
    achievementIcon: {
      width: 48,
      height: 48,
      marginRight: theme.spacing.md
    },
    achievementContent: {
      flex: 1
    },
    achievementTitle: {
      ...theme.typography.body1,
      color: theme.colors.gray[800]
    },
    achievementDate: {
      ...theme.typography.caption,
      color: theme.colors.gray[500],
      marginTop: theme.spacing.xs
    }
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.role}>Senior Designer</Text>
        <Badge label="Pro Member" color="primary" style={{ marginTop: theme.spacing.sm }} />
      </View>

      <View style={styles.statsContainer}>
        <GradientCard style={styles.statCard}>
          <Text style={styles.statValue}>128</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </GradientCard>
        <GradientCard variant="secondary" style={styles.statCard}>
          <Text style={styles.statValue}>15k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </GradientCard>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Achievements</Text>
        <Card style={styles.achievementCard}>
          <Image
            style={styles.achievementIcon}
            source={{ uri: 'https://img.icons8.com/color/96/000000/medal.png' }}
          />
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Design Excellence Award</Text>
            <Text style={styles.achievementDate}>December 2023</Text>
          </View>
        </Card>

        <Card style={styles.achievementCard}>
          <Image
            style={styles.achievementIcon}
            source={{ uri: 'https://img.icons8.com/color/96/000000/trophy.png' }}
          />
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Top Contributor</Text>
            <Text style={styles.achievementDate}>November 2023</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Profile;