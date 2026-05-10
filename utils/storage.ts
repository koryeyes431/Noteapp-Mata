import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_KEY = 'NOTES';

export const getNotes = async () => {
  try {
    const data = await AsyncStorage.getItem(NOTES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log('Error loading notes', e);
    return [];
  }
};

export const saveNotes = async (notes: any[]) => {
  try {
    await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (e) {
    console.log('Error saving notes', e);
  }
};