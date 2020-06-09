import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  containerbody: {
    marginHorizontal: 30,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderTopWidth: 0.3,
    borderTopColor: '#fff',
    alignItems: 'center',
  },
  touchbody: {
    flexDirection: 'row',
  },
  textitem: {
    color: '#fff',
    textAlign: 'center',
    marginLeft: 10,
    fontSize: 15,
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.3,
    borderColor: '#fff',
  },
});

export default styles;
