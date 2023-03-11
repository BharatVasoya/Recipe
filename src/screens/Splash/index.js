import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IMAGES from '../../constant/Images';
import styles from './styles';
import COLORS from '../../constant/Color';
import TextComponent from '../../components/TextComponent';
import STRINGS from '../../constant/Strings';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.styleContainer}>
      <ImageBackground
        style={styles.styleImageBackground}
        source={IMAGES.SplashImage}
        resizeMode="cover">
        <View>
          <View style={styles.styleTopView}>
            <TextComponent
              title={STRINGS.SPLASH_MAIN}
              textStyle={styles.styleBoldText}
            />

            <TextComponent
              title={STRINGS.SPLASH_SUB}
              textStyle={styles.styleRegularText}
            />
          </View>

          <View style={styles.styleBottomView}>
            <Image
              style={styles.styleLinearImage}
              source={IMAGES.ShadowImage}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MainTabs');
              }}
              style={styles.styleButton}>
              <TextComponent
                textStyle={{color: COLORS.WHITE}}
                title={STRINGS.GET_START}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
