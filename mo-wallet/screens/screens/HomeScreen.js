import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import Footer from '../components/Footer';

const transactions = [
  { id: '1', name: 'Apple Store', category: 'Entertainment', amount: '- $5.99', icon: require('../assets/apple.png') },
  { id: '2', name: 'Spotify', category: 'Music', amount: '- $12.99', icon: require('../assets/spotify.png') },
  { id: '3', name: 'Money Transfer', category: 'Transaction', amount: '$300', icon: require('../assets/transfer.png') },
  { id: '4', name: 'Grocery', category: 'Grocery', amount: '- $88', icon: require('../assets/grocery.png') },
];

const HomeScreen = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#333' : '#fff' }]}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <View>
          <Text style={[styles.welcomeText, { color: isDark ? '#fff' : '#aaa' }]}>Welcome back,</Text>
          <Text style={[styles.nameText, { color: isDark ? '#fff' : '#000' }]}>Terry Asiedu</Text>
        </View>
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>

      <View style={styles.actions}>
        <View style={styles.actionItem}>
          <Image source={require('../assets/send.png')} style={styles.actionIcon} />
          <Text style={[styles.actionText, { color: isDark ? '#fff' : '#000' }]}>Sent</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/receive.png')} style={styles.actionIcon} />
          <Text style={[styles.actionText, { color: isDark ? '#fff' : '#000' }]}>Receive</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/loan.png')} style={styles.actionIcon} />
          <Text style={[styles.actionText, { color: isDark ? '#fff' : '#000' }]}>Loan</Text>
        </View>
        <View style={styles.actionItem}>
          <Image source={require('../assets/topup.png')} style={styles.actionIcon} />
          <Text style={[styles.actionText, { color: isDark ? '#fff' : '#000' }]}>Topup</Text>
        </View>
      </View>

      <Text style={[styles.transactionHeader, { color: isDark ? '#fff' : '#000' }]}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Image source={item.icon} style={styles.transactionIcon} />
            <View style={styles.transactionDetails}>
              <Text style={[styles.transactionName, { color: isDark ? '#fff' : '#000' }]}>{item.name}</Text>
              <Text style={[styles.transactionCategory, { color: isDark ? '#bbb' : '#aaa' }]}>{item.category}</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: isDark ? '#fff' : '#000' }]}>{item.amount}</Text>
          </View>
        )}
      />

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop: 25 },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  welcomeText: { fontSize: 16, color: '#aaa', paddingRight: 120, },
  nameText: { fontSize: 20, fontWeight: 'bold' },
  searchIcon: { width: 30, height: 30 },
  card: { margin: 20, alignItems: 'center' },
  cardImage: { width: '100%', height: 200, resizeMode: 'contain' },
  actions: { flexDirection: 'row', justifyContent: 'space-around', padding: 20 },
  actionItem: { alignItems: 'center' },
  actionIcon: { width: 20, height: 20, marginBottom: 5 },
  actionText: { fontSize: 16 },
  transactionHeader: { fontSize: 18, fontWeight: 'bold', padding: 20 },
  transaction: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  transactionIcon: { width: 30, height: 30, marginRight: 10 },
  transactionDetails: { flex: 1 },
  transactionName: { fontSize: 16 },
  transactionCategory: { fontSize: 14, color: '#aaa' },
  transactionAmount: { fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;
