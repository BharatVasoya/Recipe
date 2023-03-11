import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import COLORS from '../../constant/Color';

export default styles = {
  styleContainer: {
    flex: 1,
  },
  styleTextInput: {
    borderWidth: 1,
    borderColor: COLORS.GREY,
    borderRadius: 5,
    padding: wp(4),
    marginVertical: hp(2),
  },
  styleViewAll: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  styleCategoryView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  styleCategoryType: {
    backgroundColor: COLORS.PRIMARY,
    height: hp(4),
    width: wp(25),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleImageView: {
    width: wp(90),
    height: hp(20),
    resizeMode: 'cover',
    borderRadius: wp(3),
  },
  styleItemView: {
    width: wp(90),
    backgroundColor: COLORS.WHITE,
    marginBottom: 20,
    borderRadius: wp(3),
    shadowColor: COLORS.GREY,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 5,
  }
};
module.exports = styles;
