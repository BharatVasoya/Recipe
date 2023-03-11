import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {FONT_SIZE} from '../../constant/Constant';
import COLORS from '../../constant/Color';

export default TextComponent = ({title, textStyle}) => {
  return <Text style={[style.textStyle, {...textStyle}]}>{title}</Text>;
};
const style = StyleSheet.create({
  textStyle: {
    fontSize: FONT_SIZE.NORMAL,
    color: COLORS.BLACK,
  },
});
