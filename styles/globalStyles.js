import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20, 
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'Nunito-Medium',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Medium',
    marginBottom: 10,
  },
  input: {
    padding: 10,
    paddingVertical: 15,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 20,
  },

  errorText: {
    fontWeight: 'bold',
    color: 'crimson',
    marginBottom: 10,
    marginTop: -10,
  }
})