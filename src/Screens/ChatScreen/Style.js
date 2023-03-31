import { StyleSheet } from 'react-native';
import Theme from '../../Utils/Theme';

const styles = StyleSheet.create({
  chatView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Theme.wp('5%'),
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: Theme.hp('1%'),
    width: Theme.wp('90%'),
    borderRadius: 20,
  },
  MainView: {
    width: Theme.wp('100%'),
    alignSelf: Theme.align,
    paddingTop: Theme.hp('15%'),
    flex: 1,
    backgroundColor: '#DADADA',
    flexDirection: 'row',
    marginHorizontal: Theme.wp('5%'),
    // alignItems:'flex-end'r
  },
  largeRoundedView: {
    justifyContent: 'flex-end',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    flex: 1,
  },
  input1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imgstyle: {
    height: Theme.hp('6%'),
    width: Theme.hp('6%'),
    alignItems: 'flex-end',
  },
  SendIcon: {
    height: Theme.hp('4%'),
    width: Theme.hp('4%'),
    alignItems: 'flex-end',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    marginHorizontal: Theme.wp('1%'),
    padding: 10,
    backgroundColor: 'white',
  },
  list1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    marginHorizontal: Theme.wp('1%'),
    padding: 10,
  },
});

export default styles;
