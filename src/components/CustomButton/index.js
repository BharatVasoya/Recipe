import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import COLORS from '../../constant/Color';
import {FONT_SIZE} from '../../constant/Constant';

export default CustomButton = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      style={[
        style.container,
        {
          ...containerStyle,
          backgroundColor: isSelected ? COLORS.PRIMARY : COLORS.WHITE,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          style.textStyle,
          {...titleStyle, color: isSelected ? COLORS.WHITE : COLORS.PRIMARY},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    height: hp(4),
    width: wp(25),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: FONT_SIZE.NORMAL,
    color: COLORS.WHITE,
  },
});
