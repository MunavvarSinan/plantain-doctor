import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageContainer: {
    padding: 30,
    margin: 20,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  iconContainer: {
    // width: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  backIcon: {
    marginLeft: 20,
  },
});
