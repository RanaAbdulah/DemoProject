import { StyleSheet, Platform } from 'react-native';
import Theme from '../../Utils/Theme';

const styles = StyleSheet.create({
  txtInp: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: Theme.txtWhite,
    borderRadius: 20,
    borderColor: Theme.txtInput,
    padding: Platform.OS === 'web' ? 3 : 4,
    height: Theme.hp('6%'),
    color: Theme.black,
    width: Theme.width,
  },
  width25Flex: {
    width: '25%',
    flexDirection: 'row',
    alignItems: Theme.align,
  },
  width25: {
    width: '25%',
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },

  txtInp75Width: {
    width: '75%',
    height: Theme.hp('8%'),
    borderRightWidth: 0.5,
  },
  wrapIconTxtInp: {
    borderRadius: 10,
    height: Theme.hp('8%'),
    flexDirection: 'row',
    width: '100%',
  },
  txtInpBgWhite: {
    borderWidth: 0.5,
    backgroundColor: Theme.lightGrey,
    borderRadius: 10,
    borderColor: Theme.white,
    padding: '4%',
    height: Theme.hp('7%'),
    width: Theme.wp('35'),
  },
  txtSend: {
    fontWeight: Theme.bold,
    color: Theme.primary,
    fontSize: Theme.txtMedium,
  },

  // Description
  desctxtInp: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: Theme.txtWhite,
    borderRadius: 3,
    borderColor: Theme.txtInput,
    padding: '4%',
    height: Theme.hp('15%'),
    color: Theme.black,
    width: Theme.width,
    textAlignVertical: 'top',
    textAlign: 'justify',
  },

  desctxtInp2: {
    // flex: 1,
    // borderWidth: 1,
    backgroundColor: Theme.txtWhite,
    borderRadius: 3,
    borderColor: Theme.txtInput,
    padding: '4%',
    height: Theme.hp('15%'),
    color: Theme.black,
    width: Theme.width,
    textAlignVertical: 'top',
  },

  // Bill Inputs
  billInp: {
    flex: 1,
    borderBottomWidth: 1,
    backgroundColor: Theme.txtWhite,
    borderColor: Theme.txtInput,
    padding: 0,
    height: Theme.hp('5%'),
    color: Theme.black,
  },
  balnInp: {
    flex: 1,
    borderBottomWidth: 3,
    backgroundColor: Theme.txtWhite,
    borderColor: Theme.txtInput,
    padding: 0,
    height: Theme.hp('7%'),
    color: Theme.blue,
    fontWeight: 'bold',
    alignItems: 'center',
    width: Theme.wp('25%'),
    textAlign: 'center',
  },

  searchtxtInp: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: Theme.txtWhite,
    // borderRadius: 3,
    // borderColor: Theme.txtInput,
    // padding: "4%",
    height: Theme.hp('7%'),
    color: Theme.black,
    borderRadius: 10,

    // width: Theme.width
  },
  searchtxtInp01: {
    // flex: 1,
    // borderWidth: 1,
    backgroundColor: Theme.txtWhite,
    // borderRadius: 3,
    // borderColor: Theme.txtInput,
    // padding: "4%",
    height: Theme.hp('7%'),
    color: Theme.black,
    borderRadius: 10,

    // width: Theme.width
  },

  balancetxtInp: {
    // borderWidth: 1,
    // borderRadius: 3,
    color: Theme.blue,
    // width: Theme.width,
    fontSize: Theme.txtExtraLargeR,
    fontWeight: 'bold',
    textAlign: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    // flex: 1,
    width: '60%',
    paddingHorizontal: '10%',
    // backgroundColor: 'red',
  },
  balancetxtInp1: {
    // borderWidth: 1,
    // borderRadius: 3,
    color: Theme.blue,
    // width: Theme.width,
    // fontSize: Theme.txtExtraLargeR,
    // fontWeight: "bold",
    // alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    alignSelf: 'flex-end',
    // flex: 1,
    width: '60%',
    padding: 0,
    // backgroundColor: 'red',
  },
});

export default styles;
