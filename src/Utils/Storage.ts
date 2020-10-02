import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (value: object) => {
  try {
    const data = await getData();
    const myArray = [data];
    myArray.push(value);
    console.log(myArray);
    await AsyncStorage.setItem('@scores', JSON.stringify(myArray));
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@scores');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const mergeData = async (value: object) => {
  try {
    await AsyncStorage.mergeItem('@scores', JSON.stringify(value));
  } catch (e) {}
};

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('@scores');
  } catch (e) {
    // remove error
  }

  console.log('Done.');
};
