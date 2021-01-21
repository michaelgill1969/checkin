const auth = jest.createMockFromModule('@react-native-firebase/auth')

function createUserWithEmailAndPassword (username, password) {
  return Promise.resolve(
    {
      user: {
        email: username
      }
    }
  )
}

auth.createUserWithEmailAndPassword = createUserWithEmailAndPassword

export default auth
