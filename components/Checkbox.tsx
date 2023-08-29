import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type CheckboxProps = {
  text: string;
  isChecked: boolean;
  onPress: () => any;
};

function Checkbox({ text, isChecked, onPress }: CheckboxProps) {
  return (
    <BouncyCheckbox
      disableBuiltInState
      isChecked={isChecked}
      onPress={onPress}
      style={{ paddingVertical: 4 }}
      innerIconStyle={{
        borderRadius: 5
      }}
      iconStyle={{
        borderRadius: 5
      }}
      textStyle={{ color: '#fff', textDecorationLine: 'none' }}
      fillColor='#404258'
      text={text}
    />
  );
}

export default Checkbox;
