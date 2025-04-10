import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import GradientCard from '../components/GradientCard';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events] = useState([
    {
      id: 1,
      title: 'Team Meeting',
      time: '10:00 AM',
      duration: '1h',
      category: 'Work',
      color: theme.colors.primary
    },
    {
      id: 2,
      title: 'Project Review',
      time: '2:00 PM',
      duration: '2h',
      category: 'Work',
      color: theme.colors.secondary
    },
    {
      id: 3,
      title: 'Gym Session',
      time: '5:30 PM',
      duration: '1h',
      category: 'Personal',
      color: theme.colors.success
    }
  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDay };
  };

  const renderCalendarHeader = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    
    return (
      <View style={styles.calendarHeader}>
        <TouchableOpacity
          onPress={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
        >
          <Text style={styles.headerButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.monthYear}>
          {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </Text>
        <TouchableOpacity
          onPress={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
        >
          <Text style={styles.headerButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCalendarDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <View style={styles.daysContainer}>
        {days.map((day, index) => (
          <Text key={index} style={styles.dayLabel}>{day}</Text>
        ))}
      </View>
    );
  };

  const renderCalendarDates = () => {
    const { daysInMonth, firstDay } = getDaysInMonth(selectedDate);
    const dates = [];

    for (let i = 0; i < firstDay; i++) {
      dates.push(<View key={`empty-${i}`} style={styles.dateCell} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === selectedDate.getDate();
      dates.push(
        <TouchableOpacity
          key={i}
          style={[styles.dateCell, isSelected && styles.selectedDate]}
          onPress={() => setSelectedDate(new Date(selectedDate.setDate(i)))}
        >
          <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>{i}</Text>
        </TouchableOpacity>
      );
    }

    return <View style={styles.datesContainer}>{dates}</View>;
  };

  const renderEvents = () => (
    <View style={styles.eventsContainer}>
      <Text style={styles.eventsTitle}>Events</Text>
      {events.map(event => (
        <GradientCard key={event.id} style={styles.eventCard}>
          <View style={[styles.eventIndicator, { backgroundColor: event.color }]} />
          <View style={styles.eventContent}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventTime}>{event.time} · {event.duration}</Text>
            <Text style={styles.eventCategory}>{event.category}</Text>
          </View>
        </GradientCard>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {renderCalendarHeader()}
      {renderCalendarDays()}
      {renderCalendarDates()}
      {renderEvents()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg
  },
  headerButton: {
    ...theme.typography.h4,
    color: theme.colors.primary,
    padding: theme.spacing.sm
  },
  monthYear: {
    ...theme.typography.h3,
    color: theme.colors.gray[800]
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md
  },
  dayLabel: {
    flex: 1,
    textAlign: 'center',
    ...theme.typography.caption,
    color: theme.colors.gray[600],
    fontWeight: 'bold'
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.xl
  },
  dateCell: {
    width: '14.28%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm
  },
  dateText: {
    ...theme.typography.body2,
    color: theme.colors.gray[800]
  },
  selectedDate: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.circle
  },
  selectedDateText: {
    color: theme.colors.white,
    fontWeight: 'bold'
  },
  eventsContainer: {
    marginTop: theme.spacing.md
  },
  eventsTitle: {
    ...theme.typography.h4,
    color: theme.colors.gray[800],
    marginBottom: theme.spacing.md
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm
  },
  eventIndicator: {
    width: 4,
    height: '100%',
    borderRadius: theme.borderRadius.sm,
    marginRight: theme.spacing.md
  },
  eventContent: {
    flex: 1
  },
  eventTitle: {
    ...theme.typography.body1,
    color: theme.colors.gray[800],
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs
  },
  eventTime: {
    ...theme.typography.caption,
    color: theme.colors.gray[600],
    marginBottom: theme.spacing.xs
  },
  eventCategory: {
    ...theme.typography.caption,
    color: theme.colors.primary,
    fontWeight: 'bold'
  }
});

export default Calendar;