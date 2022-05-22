import {Dimensions, StyleSheet} from 'react-native';
export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
  },
  dynamic: {
    marginBottom: 40,
  },
  DateButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    paddingTop: 5,
    flexDirection: 'row',
  },
  buttonGroupStyle: {
    width: Dimensions.get('window').width / 1.1,
  },
  cardStyle: {
    width: Dimensions.get('window').width,
  },
  updateAdd: {
    flex: 0.99,
  },
  plus: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  touchableSymble: {
    position: 'relative',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: Dimensions.get('window').width / 8,
    // alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
});
