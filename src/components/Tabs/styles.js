import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabs:{
    alignItems:'flex-end',
    flexDirection: 'row',
    height: 110,
    marginLeft: 10,
    marginTop: 20,
  },
  cardtab:{
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: 110,
    width: 105,
    borderRadius: 8,
    marginLeft: 10,
    padding: 10,
    justifyContent:'space-between',
  },
  textcardtab:{
    color: '#fff',
    fontWeight:'bold',
    fontSize: 13,
  },
});

export default styles;
