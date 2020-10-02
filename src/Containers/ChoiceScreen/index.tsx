import React, {useState} from 'react';
import {Background, Button, Picker} from '@Components/index';
import NavigationHelper from '@Plugins/NavigationHelper';
import {itemsCategory, itemsDifficulties} from '@Utils/Items';
import {Text} from 'react-native';
import _style from './style';
import {normalize} from '@Utils/Device';
import {useDispatch, useSelector} from 'react-redux';
import {shitJoker} from '@Stores/Question/Actions';
import {getHighScore} from '@Stores/Question/Selectors';
import {Colors} from '@Theme/index';

const ChoiceScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const highScore = useSelector(getHighScore);
  const [selectedCategory, setSelectedCategory] = useState(
    itemsCategory[0].value,
  );
  const [selectedDifficult, setSelectedDifficult] = useState(
    itemsDifficulties[0].value,
  );

  return (
    <Background>
      <Text style={_style.subtitle}>Choose your category & difficult</Text>
      <Text style={_style.subtitle}>HIGH SCORE</Text>
      <Text
        style={[
          _style.subtitle,
          {color: Colors.danger, fontSize: normalize(30)},
        ]}>
        {highScore}
      </Text>
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
        style={{margin: normalize(75)}}
        title="GO!"
        onPress={() => {
          dispatch(shitJoker({joker: false}));
          NavigationHelper.navigate('StartSplash', {
            category: selectedCategory,
            difficult: selectedDifficult,
          });
        }}
      />
    </Background>
  );
};

export default ChoiceScreen;
