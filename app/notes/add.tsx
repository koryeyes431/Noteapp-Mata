import { addTask } from '@/lib/database';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function AddNoteScreen() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSave = () => {
    if (!title.trim() || !category.trim()) {
      Alert.alert('Error', 'Title and Category required');
      return;
    }

    addTask(title, description, category, status);

    Alert.alert('Success', 'Note saved!');
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
        />

        <Text style={styles.label}>Status</Text>
        <View style={styles.statusRow}>
          {['Pending', 'Ongoing', 'Finished'].map((s) => (
            <Pressable
              key={s}
              style={[
                styles.statusBtn,
                status === s && styles.activeStatus,
              ]}
              onPress={() => setStatus(s)}
            >
              <Text style={{ color: status === s ? '#000' : '#333' }}>
                {s}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.saveBtn,
            pressed && { opacity: 0.7 },
          ]}
          onPress={handleSave}
        >
          <Text style={{ color: '#fff' }}>Save Note</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const PRIMARY = '#F4C20D';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E7E2D3' },

  content: { padding: 16 },

  label: { marginTop: 10, marginBottom: 6, fontWeight: '600' },

  input: {
    backgroundColor: '#F2F2F2',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },

  statusRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  statusBtn: {
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
  },

  activeStatus: {
    backgroundColor: PRIMARY,
  },

  saveBtn: {
    marginTop: 20,
    backgroundColor: PRIMARY,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
});