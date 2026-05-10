import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { initDatabase } from '@/lib/database';

export const unstable_settings = {
  anchor: '(tabs)', // 👈 tells app to start in (tabs)
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ animation: 'none' }}>
        
        {/* ✅ Tabs (Home) */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        {/* ✅ Notes screens */}
        <Stack.Screen
          name="notes"
          options={{ headerShown: false }}
        />

      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}