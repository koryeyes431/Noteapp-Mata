import { Stack } from 'expo-router';

export default function NotesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F4C20D',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        animation: 'none',
      }}
    >
      <Stack.Screen
        name="list"
        options={{
          title: 'Note ni Nako',
        }}
      />

      <Stack.Screen
        name="detail"
        options={{
          title: 'Note Detail',
        }}
      />

      <Stack.Screen
        name="edit"
        options={{
          title: 'Edit Note',
        }}
      />

      <Stack.Screen
        name="add"
        options={{
          title: 'Add Note',
        }}
      />
    </Stack>
  );
}