import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import COLORS from '../../constant/Color';
import { FONT_SIZE } from '../../constant/Constant';

export default styles = {
  styleContainer: {
    flex: 1,
  },
  styleImageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleLinearImage: {
    width: wp(100),
    height: hp(40),
    position: 'absolute',
    resizeMode: 'cover',
  },
  styleButton: {
    backgroundColor: COLORS.PRIMARY,
    width: wp(60),
    height: hp(6),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleBottomView: {
    flex: 0.4,
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleTopView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleBoldText: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.XXXLARGE,
    textAlign: 'center',
  },
  styleRegularText: {
    marginTop: hp(2),
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.LARGE,
  }
};
module.exports = styles;
