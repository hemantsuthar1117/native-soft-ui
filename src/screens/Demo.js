import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Switch from '../components/Switch';
import Badge from '../components/Badge';
import Checkbox from '../components/Checkbox';
import { theme } from '../theme';

const Demo = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.gray[50],
      padding: theme.spacing.md
    },
    section: {
      marginBottom: theme.spacing.xl
    },
    sectionTitle: {
      ...theme.typography.h3,
      color: theme.colors.gray[800],
      marginBottom: theme.spacing.md
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.md,
      marginBottom: theme.spacing.md
    },
    cardContent: {
      gap: theme.spacing.md
    }
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Buttons</Text>
        <View style={styles.row}>
          <Button onPress={() => {}}>Primary</Button>
          <Button variant="outlined" onPress={() => {}}>Outlined</Button>
          <Button variant="text" onPress={() => {}}>Text</Button>
        </View>
        <View style={styles.row}>
          <Button size="sm" onPress={() => {}}>Small</Button>
          <Button size="lg" onPress={() => {}}>Large</Button>
          <Button disabled onPress={() => {}}>Disabled</Button>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cards</Text>
        <View style={styles.row}>
          <Card>
            <View style={styles.cardContent}>
              <Text style={theme.typography.body1}>Basic Card</Text>
              <Button size="sm" onPress={() => {}}>Action</Button>
            </View>
          </Card>
          <Card variant="prominent">
            <View style={styles.cardContent}>
              <Text style={theme.typography.body1}>Prominent Card</Text>
              <Button size="sm" variant="outlined" onPress={() => {}}>Action</Button>
            </View>
          </Card>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Form Controls</Text>
        <View style={styles.row}>
          <Input
            label="Text Input"
            placeholder="Type something..."
            value={inputValue}
            onChangeText={setInputValue}
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.row}>
          <Switch
            value={switchValue}
            onValueChange={setSwitchValue}
          />
          <Checkbox
            checked={checkboxValue}
            onValueChange={setCheckboxValue}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Badges</Text>
        <View style={styles.row}>
          <Badge label="Default" />
          <Badge label="Success" color="success" />
          <Badge label="Warning" color="warning" />
          <Badge label="Error" color="error" />
        </View>
        <View style={styles.row}>
          <Badge label="Small" size="sm" />
          <Badge label="Large" size="lg" />
          <Badge label="Outlined" variant="outlined" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Demo;