import db from '@react-native-firebase/firestore'

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
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

describe(
  'firestore object',
  () => {
    it(
      'logs',
      () => {
        console.log(db.collection('users').doc('a@a.aa').get())

        expect(true).toBeTruthy()
      }
    )
  }
)
