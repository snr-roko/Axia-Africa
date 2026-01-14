import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Text } from 'react-native';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
        <Stack.Screen
          name='index'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='login'
          options={{
            headerTitle: "Welcome Back",
            headerStyle: {
              backgroundColor: "black"
            },
            headerTitleStyle: {
              color: "white"
            }
          }}
        />
        <Stack.Screen
          name='dashboard'
          options={{
            headerTitle: "Dashboard",
            headerRight: () => (<Text>Logout</Text>),
            headerBackVisible: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name='profile'
          options={{
            headerTitle: "Profile",
            headerTitleStyle: {
              color: "black"
            },
            headerStyle: {
              backgroundColor: "white"
            }
          }}
        />
        <Stack.Screen
          name='settings'
          options={{
            headerTitle: "Settings"
          }}
        />
        <Stack.Screen
          name='about'
          options={{
            headerShown: false,
            statusBarStyle: "light"
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
