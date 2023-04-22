import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appThme';

export enum ButtonType {
  default = '#2D2D2D',
  light = '#9B9B9B',
  orange = '#FF9427',
}

interface Props {
  action: (value: string) => void;
  text: string;
  color?: ButtonType;
  width?: boolean;
}

const TEXT_COLOR: {[key in ButtonType]: string} = {
  [ButtonType.default]: 'white',
  [ButtonType.light]: 'black',
  [ButtonType.orange]: 'white',
};

export const ButtonCalc = ({
  action,
  color = ButtonType.default,
  text,
  width = false,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width ? 180 : 80,
        }}>
        <Text style={{...styles.buttonText, color: TEXT_COLOR[color]}}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
