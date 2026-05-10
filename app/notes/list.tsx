import { deleteTask, getTasks } from '@/lib/database';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function NotesListScreen() {
  const router = useRouter();
  const [notes, setNotes] = useState<any[]>([]);

  // ✅ Refresh list when screen is focused
  useFocusEffect(
    useCallback(() => {
      setNotes(getTasks());
    }, [])
  );

  const handleDelete = (id: number) => {
    deleteTask(id);
    setNotes(getTasks());
  };

  const handleView = (note: any) => {
    router.push({
      pathname: '/notes/detail',
      params: {
        id: note.id,
        title: note.title,
        description: note.description,
        category: note.category,
        status: note.status,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 10 }}
        ListEmptyComponent={
          <Text style={styles.empty}>No Notes yet</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.category}</Text>
            </View>

            <Text style={styles.status}>{item.status}</Text>

            <Text style={styles.desc}>{item.description}</Text>

            <View style={styles.actions}>
              <Pressable
                style={({ pressed }) => [
                  styles.view,
                  pressed && { opacity: 0.7 },
                ]}
                onPress={() => handleView(item)}
              >
                <Text style={{ color: '#fff' }}>
                  View Details
                </Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.delete,
                  pressed && { opacity: 0.7 },
                ]}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={{ color: '#fff' }}>
                  Delete
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      />

      <Pressable
        style={({ pressed }) => [
          styles.fab,
          pressed && { opacity: 0.7 },
        ]}
        onPress={() => router.push('/notes/add')}
      >
        <Text style={{ color: '#000', fontSize: 28 }}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const PRIMARY = '#F4C20D';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E7E2D3' },

  empty: { marginTop: 10, color: '#999' },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },

  title: { fontWeight: 'bold', fontSize: 20 },

  badge: {
    backgroundColor: PRIMARY,
    padding: 4,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 5,
  },

  badgeText: { color: '#000' },

  status: { fontWeight: 'bold', marginTop: 5 },

  desc: { color: '#666', marginTop: 5 },

  actions: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },

  view: {
    backgroundColor: PRIMARY,
    padding: 8,
    borderRadius: 6,
  },

  delete: {
    backgroundColor: '#E53935',
    padding: 8,
    borderRadius: 6,
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: PRIMARY,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});