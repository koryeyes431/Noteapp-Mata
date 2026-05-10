import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function DetailScreen() {
  const router = useRouter();

  const {
    id,
    title,
    description,
    category,
    status,
  } = useLocalSearchParams<{
    id: string;
    title: string;
    description: string;
    category: string;
    status: string;
  }>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>

        {/* ✅ Category badge (fixed width to content) */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{category}</Text>
        </View>

        <Text style={styles.status}>{status}</Text>

        {/* ✅ ID now shows properly */}
        <View style={styles.card}>
          <Text>ID: {id ?? 'N/A'}</Text>
        </View>

        <View style={styles.card}>
          <Text>{description}</Text>
        </View>

        {/* ✅ Edit button (uses push) */}
        <Pressable
          style={({ pressed }) => [
            styles.editButton,
            pressed && { opacity: 0.7 },
          ]}
          onPress={() =>
  router.push({
    pathname: '/(tabs)/notes/edit',
    params: { id, title, description, category, status },
  })
}
        >
          <Text style={styles.editButtonText}>Edit Note</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const PRIMARY = '#007AFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  // ✅ FIXED badge (no stretching)
  badge: {
    backgroundColor: PRIMARY,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },

  badgeText: {
    color: '#ffffff',
    fontWeight: '600',
  },

  status: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  editButton: {
    backgroundColor: PRIMARY,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },

  editButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
  },
});