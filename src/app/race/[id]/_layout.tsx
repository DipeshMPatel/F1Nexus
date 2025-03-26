import { Stack, withLayoutContext } from 'expo-router';
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 import { Colors } from '../../../Constants/Colors';
 
 const Tab = createMaterialTopTabNavigator();
 const TopTabs = withLayoutContext(Tab.Navigator);
 
 export default function RaceLayout() {
   return (
     <>
       <Stack.Screen
         options={{ title: 'Race details', headerBackVisible: false }}
       />
       <TopTabs
         screenOptions={{
           tabBarLabelStyle: {
             fontFamily: 'F1-Bold',
           },
           tabBarStyle: { backgroundColor: Colors.primary },
           tabBarInactiveTintColor: 'gainsboro',
           tabBarActiveTintColor: 'white',
           tabBarIndicatorStyle: {
             backgroundColor: 'white',
             height: 5,
           },
         }}

       >
         <TopTabs.Screen name="index" options={{ title: 'Details' }} />
         <TopTabs.Screen name="race" options={{ title: 'Race' }} />
         <TopTabs.Screen name="qualifying" options={{ title: 'Qualifying' }} />
       </TopTabs>
     </>
   );
 }
 