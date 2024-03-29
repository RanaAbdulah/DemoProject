import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'

const Theme = {
  primaryColor: '#6DBD88',
  bg2: '#6DBD881A',
  brown: '#97692e',
  txtWhite: '#ffffff',
  txtBlue: 'blue',
  lightGrey: '#f0f1f2',
  lightOrange: '#f7f3ce',
  lightBlue: '#d3ebdb',
  placeholderCol: 'grey',
  txtInput: '#f2f2f2',
  white: 'white',
  formGrey: '#dedede',
  black: 'black',
  grey: '#A1A2A3',
  grey1: '#767A8B',
  grey2: '#C4C4C4',
  grey3: '#313131',
  editColor: '#F3F6FF',
  blue: '#202B56',
  txtBlack: 'black',
  iconCol: '#D1D1D1',
  iconSize: 26,
  iconSizecal: 22,
  line: '#EDF2F9',
  iconSizeR: hp('3%'),
  iconSizeR1: hp('4%'),
  iconSizeR2: hp('2.5%'),
  valueText: '#737373',
  iconSizeLarge: 35,
  iconSizeSm: 18,
  iconSizeExSm: 10,
  bg: '#E5E5E5',
  bold: 'bold',
  errorColor: 'red',
  disColorText: '#DCDCDC',
  disColorBg: '#FFFFFF',
  txtTiny: RFPercentage(1.3),
  txtSmallest: RFPercentage(1.8),
  txtSmall: RFPercentage(2),
  txtMedium: RFPercentage(2.5),
  txtMedium1: RFPercentage(2.2),
  txtLarge: RFPercentage(3),
  txtExtraLarge: RFPercentage(4),

  txtSmallR: hp('1.6%'),
  txtSmallR1: hp('1.7%'),
  txtSmallR2: hp('1.8%'),
  txtSmallR3: hp('1.9%'),
  txtMediumR: hp('2.2%'),
  txtMediumR1: hp('2%'),
  txtMediumR3: hp('2.1%'),
  txtMediumR2: hp('3%'),
  txtMediumR4: hp('2.6%'),
  txtExtraLargeR: hp('4%'),

  align: 'center',
  wp,
  hp,
  width: wp('95%'),
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
}

export default Theme
