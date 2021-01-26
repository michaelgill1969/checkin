// import * as firebase from '@firebase/testing'

// const PROJECT_ID = 'cryonics-check-in-dev-0-0-2'
// const email = 'a@a.aa'
// const uid = email
// const auth = { uid: uid, email: email }
// const testStore = firebase
//   .initializeTestApp({ projectId: PROJECT_ID, auth: auth })
//   .firestore()

// testStore.useEmulator('localhost', 8080)

// const firestore = jest.createMockFromModule('@react-native-firebase/firestore')
// const collection = collectionPath => testStore.collection(collectionPath)

// firestore.collection = collection

// export default firestore
import firestore from '@react-native-firebase/firestore'

jest.mock(
  '@react-native-firebase/firestore' // ,
  //() => {
  //  collection: jest.fn().mockReturnValue(
  //    {
  //      doc: jest.fn().mockReturnValue(
  //        {
  //          get: jest.fn().mockResolvedValue(
  //            { foo: 'bar' }
  //          )
  //        }
  //      )
  //    }
  //  )
  //}
)

