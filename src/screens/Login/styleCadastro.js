import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F6F4',
  },

  imagem: {
    height: 210,
    width: 130,
  },

  content: {
    width: '100%',
    marginTop: 50,
    padding: 16,
  },

  input: {
    width: '100%',
    height: 50,
    marginTop: 28,
    borderWidth: 1,
    borderRadius: 28,
    borderColor: '#BDBDBD',
    padding: 16,
    backgroundColor: '#EEEEEE',
    fontWeight: 'bold',
  },

  button: {
    /** estilização do button "Entrar" */
    height: 50,
    marginTop: 40,
    backgroundColor: '#82A939',
    borderRadius: 24,
    alignItems: 'center',
  },

  textButton: {
    marginTop: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
 
});
