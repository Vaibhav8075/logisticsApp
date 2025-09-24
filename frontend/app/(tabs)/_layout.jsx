import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fdfcf7' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

            
        }}
      />
      <Tabs.Screen
        name="employee"
        options={{
          title: 'Employee',
        }}
      />
    </Tabs>
  );
}
