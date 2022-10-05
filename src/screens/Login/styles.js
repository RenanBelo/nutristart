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
    marginTop: 13,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  text: {
    width: '100%',
    marginTop: 52,
    textAlign: 'center',
    fontSize:12,
    color: "#2B7B53"
  },

  texto:{
    width: '100%',
    textAlign: 'center',
    fontSize:12

  },
  linha: {
    marginTop: 52,
    marginBottom:40,
    backgroundColor: '#585858',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
