import { useRouter } from 'expo-router';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>Note ni Nako</Text>

        <Text style={styles.subtitle}>
          Dri nimo ibutang imo mga buhatonon
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { opacity: 0.7 },
          ]}
          onPress={() => router.push('/notes/list')} // ✅ push
        >
          <Text style={styles.buttonText}>Open Notes</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = '#007AFF';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { color: '#666', marginBottom: 20 },
  button: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: { color: '#ffffff', fontWeight: 'bold' },
});