import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Progress from '../components/Progress';
import Badge from '../components/Badge';
import { theme } from '../theme';

const Home = () => {
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
    statsContainer: {
      flexDirection: 'row',
      gap: theme.spacing.md,
      marginBottom: theme.spacing.xl
    },
    statCard: {
      flex: 1,
      padding: theme.spacing.lg
    },
    statValue: {
      ...theme.typography.h2,
      color: theme.colors.gray[800]
    },
    statLabel: {
      ...theme.typography.caption,
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
    activityCard: {
      marginBottom: theme.spacing.md
    },
    activityHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.sm
    },
    activityTitle: {
      ...theme.typography.body1,
      color: theme.colors.gray[800]
    },
    activityMeta: {
      ...theme.typography.caption,
      color: theme.colors.gray[500]
    },
    progressLabel: {
      ...theme.typography.caption,
      color: theme.colors.gray[500],
      marginTop: theme.spacing.xs
    }
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Text style={styles.headerSubtitle}>Welcome back, John Doe</Text>
      </View>

      <View style={styles.statsContainer}>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>89%</Text>
          <Text style={styles.statLabel}>Completion</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <Card style={styles.activityCard}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityTitle}>Mobile App Design</Text>
            <Badge variant="success">Active</Badge>
          </View>
          <Progress value={75} variant="success" />
          <Text style={styles.progressLabel}>75% Complete</Text>
        </Card>

        <Card style={styles.activityCard}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityTitle}>Website Redesign</Text>
            <Badge variant="warning">In Progress</Badge>
          </View>
          <Progress value={45} variant="warning" />
          <Text style={styles.progressLabel}>45% Complete</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Home;