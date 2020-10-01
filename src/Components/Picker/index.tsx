import React from 'react';
import {Picker as PickerNative} from '@react-native-community/picker';
import {deviceWidth, normalize} from '@Utils/Device';

interface PickerProps {
  items: Array<{label: string; value: any}>;
  onChange: (value: any, index: number) => void;
  selectedValue: any;
}

const Picker: React.FunctionComponent<PickerProps> = ({
  items,
  onChange,
  selectedValue,
}): JSX.Element => {
  const renderPickerItems = () => {
    return items.map((item) => {
      return (
        <PickerNative.Item
          label={item.label}
          value={item.value}
          key={item.label}
        />
      );
    });
  };
  return (
    <PickerNative
      style={{
        height: normalize(50),
        width: deviceWidth() / 2,
        margin: normalize(50),
      }}
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => onChange(itemValue, itemIndex)}>
      {renderPickerItems()}
    </PickerNative>
  );
};

export default Picker;
