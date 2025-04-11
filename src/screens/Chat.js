import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';
import Input from '../components/Input';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi there! How can I help you today?',
      sender: 'agent',
      timestamp: '10:00 AM',
      avatar: 'https://via.placeholder.com/40x40'
    },
    {
      id: 2,
      text: 'I have a question about the new features.',
      sender: 'user',
      timestamp: '10:01 AM',
      avatar: 'https://via.placeholder.com/40x40'
    },
    {
      id: 3,
      text: 'Sure! I would be happy to explain the new features. What would you like to know specifically?',
      sender: 'agent',
      timestamp: '10:02 AM',
      avatar: 'https://via.placeholder.com/40x40'
    }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: 'https://via.placeholder.com/40x40'
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const renderMessage = (msg) => {
    const isUser = msg.sender === 'user';
    return (
      <View
        key={msg.id}
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.agentMessage
        ]}
      >
        {!isUser && <Image source={{ uri: msg.avatar }} style={styles.avatar} />}
        <LinearGradient
          colors={isUser ? [theme.colors.primary, theme.colors.secondary] : [theme.colors.gray[100], theme.colors.gray[200]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.messageCard,
            isUser ? styles.userMessageCard : styles.agentMessageCard
          ]}
        >
          <Text style={styles.messageText}>{msg.text}</Text>
          <Text style={styles.timestamp}>{msg.timestamp}</Text>
        </LinearGradient>
        {isUser && <Image source={{ uri: msg.avatar }} style={styles.avatar} />}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map(renderMessage)}
      </ScrollView>
      <View style={styles.inputContainer}>
        <Input
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          disabled={!message.trim()}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  messagesContainer: {
    flex: 1,
    padding: theme.spacing.md
  },
  messagesContent: {
    paddingBottom: theme.spacing.xl
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    maxWidth: '80%',
    alignItems: 'flex-end'
  },
  userMessage: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse'
  },
  agentMessage: {
    alignSelf: 'flex-start'
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: theme.spacing.xs
  },
  messageCard: {
    padding: theme.spacing.md
  },
  userMessageCard: {
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden'
  },
  agentMessageCard: {
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden'
  },
  messageText: {
    ...theme.typography.body1,
    color: theme.colors.gray[800],
    marginBottom: theme.spacing.xs
  },
  timestamp: {
    ...theme.typography.caption,
    color: theme.colors.gray[500],
    alignSelf: 'flex-end'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[200],
    backgroundColor: theme.colors.white
  },
  input: {
    flex: 1,
    marginBottom: 0
  },
  sendButton: {
    marginLeft: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    justifyContent: 'center',
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    borderRadius: theme.borderRadius.md
  },
  sendButtonText: {
    ...theme.typography.button,
    color: theme.colors.white
  }
});

export default Chat;