import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from '../theme';
import GradientCard from '../components/GradientCard';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Design System for React Native',
      excerpt: 'Learn how to build a consistent and beautiful design system for your React Native application.',
      category: 'Design',
      readTime: '5 min read',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Building Scalable Apps',
      excerpt: 'Best practices for building scalable and maintainable React Native applications.',
      category: 'Development',
      readTime: '8 min read',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'UI/UX Trends 2024',
      excerpt: 'Explore the latest trends in UI/UX design for mobile applications.',
      category: 'Trends',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const renderArticleCard = (article) => (
    <TouchableOpacity
      key={article.id}
      activeOpacity={0.8}
      style={styles.articleCard}
    >
      <GradientCard style={styles.card}>
        <Image
          source={{ uri: article.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.contentContainer}>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{article.category}</Text>
            <Text style={styles.readTime}>{article.readTime}</Text>
          </View>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.excerpt}>{article.excerpt}</Text>
        </View>
      </GradientCard>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Featured Articles</Text>
      {articles.map(renderArticleCard)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md
  },
  heading: {
    ...theme.typography.h3,
    color: theme.colors.gray[800],
    marginBottom: theme.spacing.lg
  },
  articleCard: {
    marginBottom: theme.spacing.lg
  },
  card: {
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg
  },
  contentContainer: {
    padding: theme.spacing.md
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm
  },
  category: {
    ...theme.typography.caption,
    color: theme.colors.primary,
    fontWeight: 'bold'
  },
  readTime: {
    ...theme.typography.caption,
    color: theme.colors.gray[500]
  },
  title: {
    ...theme.typography.h4,
    color: theme.colors.gray[800],
    marginBottom: theme.spacing.xs
  },
  excerpt: {
    ...theme.typography.body2,
    color: theme.colors.gray[600]
  }
});

export default Articles;