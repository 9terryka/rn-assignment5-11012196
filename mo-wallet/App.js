import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/screens/HomeScreen'; 
import SettingsScreen from './screens/screens/SettingsScreen';
import { ThemeContext } from '../context/ThemeContext';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'My Cards') {
                iconName = 'credit-card';
              } else if (route.name === 'Statistics') {
                iconName = 'bar-chart';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Cards" component={HomeScreen} />
          <Tab.Screen name="Statistics" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
