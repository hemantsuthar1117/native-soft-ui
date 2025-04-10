import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { theme } from '../theme';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'New Project Invitation',
      message: 'You have been invited to collaborate on "Mobile App Design"',
      timestamp: '2 hours ago',
      status: 'unread',
      type: 'invitation'
    },
    {
      id: 2,
      title: 'Task Completed',
      message: 'Website Redesign project has been marked as complete',
      timestamp: '5 hours ago',
      status: 'read',
      type: 'success'
    },
    {
      id: 3,
      title: 'Meeting Reminder',
      message: 'Team sync meeting starts in 30 minutes',
      timestamp: '1 day ago',
      status: 'unread',
      type: 'reminder'
    },
    {
      id: 4,
      title: 'Project Update',
      message: 'New comments on your recent design submission',
      timestamp: '2 days ago',
      status: 'read',
      type: 'update'
    }
  ];

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
    notificationCard: {
      marginBottom: theme.spacing.md
    },
    notificationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: theme.spacing.sm
    },
    notificationTitle: {
      ...theme.typography.body1,
      color: theme.colors.gray[800],
      fontWeight: '600',
      flex: 1
    },
    notificationMessage: {
      ...theme.typography.body2,
      color: theme.colors.gray[600],
      marginBottom: theme.spacing.sm
    },
    notificationMeta: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    timestamp: {
      ...theme.typography.caption,
      color: theme.colors.gray[500]
    }
  });

  const getStatusColor = (type) => {
    switch (type) {
      case 'invitation':
        return 'primary';
      case 'success':
        return 'success';
      case 'reminder':
        return 'warning';
      default:
        return 'secondary';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Text style={styles.headerSubtitle}>Stay updated with your activities</Text>
      </View>

      {notifications.map((notification) => (
        <Card
          key={notification.id}
          style={[styles.notificationCard, notification.status === 'unread' && { backgroundColor: theme.colors.gray[50] }]}
        >
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Badge
              label={notification.type}
              color={getStatusColor(notification.type)}
              size="sm"
            />
          </View>
          <Text style={styles.notificationMessage}>{notification.message}</Text>
          <View style={styles.notificationMeta}>
            <Text style={styles.timestamp}>{notification.timestamp}</Text>
            {notification.status === 'unread' && (
              <Badge label="New" color="primary" size="sm" variant="outlined" />
            )}
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Notifications;