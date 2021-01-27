jest.mock(
  '@react-native-firebase/firestore',
  () => {
    return {
      // ...jest.requireActual('@react-native-firebase/firestore'),
      collection: jest.fn().mockImplementation(
        collectionPath => {
          return {
            doc: jest.fn().mockImplementation(
              documentPath => {
                return {
                  get: jest.fn().mockImplementation(
                    () => {
                      return { foo: 'bar' }
                    }
                  )
                }
              }
            )
          }
        }
      )
    }
  }
)
