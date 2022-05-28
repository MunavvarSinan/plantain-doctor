import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  OptionsPage,
  PlantainScreen,
  ImageSelector,
} from '../screens';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#009378',
          borderTopWidth: 0,
          borderRadius: 5
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name='home' size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Detect'
        component={OptionsPage}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name='smoke-detector-variant'
              size={focused ? 30 : 25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Plantain'
        component={PlantainScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name='pine-tree'
              size={focused ? 30 : 25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
