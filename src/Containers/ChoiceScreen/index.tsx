import React, {useState} from 'react';
import {Background, Button, Picker} from '@Components/index';
import NavigationHelper from '@Plugins/NavigationHelper';
import {itemsCategory, itemsDifficulties} from '@Utils/Items';
import {Text} from 'react-native';

const ChoiceScreen = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState(
    itemsCategory[0].value,
  );
  const [selectedDifficult, setSelectedDifficult] = useState(
    itemsDifficulties[0].value,
  );

  return (
    <Background>
      <Text>WELCOME TO FAHOTRAVIA</Text>
      <Text>Choose your category & difficult</Text>
      <Picker
        selectedValue={selectedCategory}
        onChange={setSelectedCategory}
        items={itemsCategory}
      />
      <Picker
        selectedValue={selectedDifficult}
        onChange={setSelectedDifficult}
        items={itemsDifficulties}
      />
      <Button
        title="GO!"
        onPress={() =>
          NavigationHelper.navigate('StartSplash', {
            category: selectedCategory,
            difficult: selectedDifficult,
          })
        }
      />
    </Background>
  );
};

export default ChoiceScreen;
