import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextComponent from '../TextComponent';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default EmptyDataView = ({title}) => {
  return (
    <View
      style={style.container}>
      <TextComponent textStyle={{fontWeight: 'bold'}} title={title} />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(50),
  },
});
