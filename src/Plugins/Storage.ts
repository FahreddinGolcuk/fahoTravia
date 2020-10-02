import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key: string, value: number) => {
  try {
    await AsyncStorage.setItem(key, String(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const mergeData = async (key: string, value: number) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
  } catch (e) {}
};

export const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
