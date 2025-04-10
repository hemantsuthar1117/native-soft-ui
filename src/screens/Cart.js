import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from '../theme';
import Button from '../components/Button';
import GradientCard from '../components/GradientCard';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100x100'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 299.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100x100'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 149.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100x100'
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const renderCartItem = (item) => (
    <GradientCard key={item.id} style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, -1)}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientCard>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Shopping Cart</Text>
        {cartItems.map(renderCartItem)}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>${getTotal().toFixed(2)}</Text>
        </View>
        <Button
          title="Proceed to Checkout"
          onPress={() => {}}
          variant="primary"
          style={styles.checkoutButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  scrollView: {
    flex: 1,
    padding: theme.spacing.md
  },
  heading: {
    ...theme.typography.h3,
    color: theme.colors.gray[800],
    marginBottom: theme.spacing.lg
  },
  cartItem: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md
  },
  productInfo: {
    flex: 1,
    marginLeft: theme.spacing.md
  },
  productName: {
    ...theme.typography.body1,
    color: theme.colors.gray[800],
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs
  },
  productPrice: {
    ...theme.typography.h4,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: theme.borderRadius.circle,
    backgroundColor: theme.colors.gray[200],
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantityButtonText: {
    ...theme.typography.body1,
    color: theme.colors.gray[800],
    fontWeight: 'bold'
  },
  quantity: {
    ...theme.typography.body1,
    color: theme.colors.gray[800],
    marginHorizontal: theme.spacing.md
  },
  footer: {
    padding: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[200]
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md
  },
  totalLabel: {
    ...theme.typography.h4,
    color: theme.colors.gray[800]
  },
  totalAmount: {
    ...theme.typography.h3,
    color: theme.colors.primary
  },
  checkoutButton: {
    width: '100%'
  }
});

export default Cart;