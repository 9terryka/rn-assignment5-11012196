import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../../App.js';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.item}>
        <Text style={styles.itemText}>Language</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>My Profile</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Contact Us</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Change Password</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Privacy Policy</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Dark Mode</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme === 'light' ? '#000' : '#fff',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    color: theme === 'light' ? '#000' : '#fff',
  },
});

export default SettingsScreen;
