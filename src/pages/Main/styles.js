import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: '#8b10ae',
  },
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  content: {
    flex: 1,
    zIndex: 5,
    maxHeight: 400,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginHorizontal: 20,
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  cardheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    alignItems: 'center',
  },
  cardbody: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  cardfooter: {
    padding: 30,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  textbody: {
    fontSize: 13,
    color: '#999',
  },
  textnumber: {
    fontSize: 32,
    marginTop: 3,
    color: '#333',

  },
  textfooter: {
    fontSize: 12,
    color: '#333',
  },
});
export default styles;
