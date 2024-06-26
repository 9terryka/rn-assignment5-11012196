import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/screens/HomeScreen';
import MyCardsScreen from '../screens/screens/MyCardsScreen';
import StatisticsScreen from '../screens/screens/StatisticsScreen';
import SettingsScreen from '../screens/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'My Cards') {
            iconName = 'card-outline';
          } else if (route.name === 'Statistics') {
            iconName = 'stats-chart-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        style: {
          display: 'flex',
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        },
      }}
    
      screenOptionss={({ route }) => ({
        tabBarButton: (props) => (
          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate(route.name);
          }}>
            <TabBarIcon {...props} />
          </TouchableWithoutFeedback>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Cards" component={MyCardsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
