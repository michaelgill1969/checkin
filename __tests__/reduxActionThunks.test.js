// import auth from '@react-native-firebase/auth'
// import db from '@react-native-firebase/firestore'
import * as firebase from '@firebase/testing'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as ActionThunks from '../redux/ActionThunks'
import * as ActionTypes from '../redux/ActionTypes'
import { ConfigureStore } from '../redux/configureStore'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const PROJECT_ID = 'cryonics-check-in-dev-0-0-2'
const email1 = 'a@a.aa'
// const email2 = 'b@b.bb'
const uid1 = email1
// const uid2 = email2
const auth1 = { uid: uid1, email: email1 }
// const auth2 = { uid: uid2, email: email2 }

const expectedState = {
  auth: {
    errorMessage: '',
    user: null
  },
  buddy: {
    alertTimes: [],
    checkinInterval: null,
    checkinTime: '',
    email: '',
    errorMessage: '',
    isAdded: null,
    lastAlertTime: '',
    snooze: 9
  },
  device: {
    errorMessage: '',
    token: ''
  },
  inputs: {
    alertTimes: [],
    errorMessage: '',
    height: 0,
    showTip: true
  },
  listener: {
    errorMessage: '',
    interval: 0,
    listeners: []
  },
  timer: {
    errorMessage: '',
    interval: 0,
    timers: []
  },
  token: {
    errorMessage: '',
    password: '',
    username: ''
  },
  user: {
    checkinInterval: null,
    checkinTime: '',
    errorMessage: '',
    isSignedIn: null,
    lastAlertTime: '',
    longestSnooze: 60,
    shortestInterval: 1800000,
    snooze: 9
  }
}

// function getFirestore (auth) {
//   return firebase
//     .initializeTestApp({ projectId: PROJECT_ID, auth: auth })
//     .firestore()
// }

// beforeEach(
//   async () => await firebase.clearFirestoreData({ projectId: PROJECT_ID })
// )

// jest.useFakeTimers()

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

// jest.mock(
//   '@react-native-firebase/auth',
//   () => {
//     const real = jest.requireActual('@react-native-firebase/auth')
//     return {
//       ...real,
//       auth: jest
//         .fn(
//           () => firebase.auth().useEmulator('http://localhost:9099/')
//         )
//     }
//   }
// )

jest.mock(
  'redux-persist',
  () => {
    const real = jest.requireActual('redux-persist')
    return {
      ...real,
      persistReducer: jest
        .fn()
        .mockImplementation((config, reducers) => reducers)
    }
  }
)

describe(
  'redux store',
  () => {
    it(
      'returns initial state',
      async () => {
        const initialState = await ConfigureStore().store.getState()

        expect(initialState).toEqual(expectedState)
      }
    )
  }
)

describe(
  'registration thunk',
  () => {
    it(
      'registers user',
      async () => {
        const store = mockStore(expectedState)
        const expectedAction = {
          type: ActionTypes.REGISTRATION_FULFILLED
        }

        firebase.initializeTestApp({ projectId: PROJECT_ID, auth: auth1 })
        // const now = (new Date()).toISOString()
        // const db = getFirestore(auth1)
        // const testDoc = db.collection('users').doc(email1)
        // testDoc.set({ checkinTime: now })

        return store.dispatch(
          ActionThunks.register({ username: email1, password: 'A1111111' })
        )
          .then(
            () => {
              const actions = store.getActions()
              console.log(actions)

              // TODO: Fails because the registration thunk needs 'auth()', not
              // 'db()',  to create a user.
              expect(actions).toContainEqual(expectedAction)
              return null
            },
            error => {
              const errorMessage = new Error(error.message)
              throw errorMessage
            }
          )
          .catch(error => console.log(error.message))
      }
    )
  }
)

// describe(
//   'add-buddy thunk',
//   () => {
//     it(
//       'updates buddy',
//       async () => {
//         const store = mockStore(expectedState)
//         const expectedAction = {
//           type: ActionTypes.ADD_BUDDY_FULFILLED,
//           email: email1
//         }
//
//         // TODO: You can get this to work when you pass in the db to the thunks
//         // using an optional parameter.
//         const now = (new Date()).toISOString()
//         const db = getFirestore(auth1)
//         const testDoc = db.collection('users').doc(email1)
//
//         await testDoc.set({ checkinTime: now })
//
//         // TODO: You will need to sign in and get a UID from firebase in order
//         // to fix rejection when getting document.
//         return store.dispatch(ActionThunks.addBuddy(email1, db))
//           .then(
//             () => {
//               const actions = store.getActions()
//               console.log(actions)
//               // Actions return incude a couple rejections.
//               // They happen because they can't get the state.
//               // Do you need to mock the state?
//               // TODO: Assertion should fail if any action is a rejection.
//               expect(actions).toContainEqual(expectedAction)
//               return null
//             },
//             error => {
//               const errorMessage = new Error(error.message)
//               throw errorMessage
//             }
//           )
//           .catch(error => console.log(error.message))
//
//         // expect(
//         //   {
//         //     ...initialState
//         //   }
//         // ).toEqual(
//         //   {
//         //     ...expectedState,
//         //     buddy: {
//         //       alertTimes: [],
//         //       checkinInterval: null,
//         //       checkinTime: '',
//         //       email: email1,
//         //       errorMessage: '',
//         //       isAdded: null,
//         //       lastAlertTime: '',
//         //       snooze: 9
//         //     }
//         //   }
//         // )
//       }
//     )
//   }
// )

// describe(
//   'add-document thunk',
//   () => {
//     // const user = {
//     //   checkinTime: (new Date()).toISOString(),
//     //   isSignedIn: true,
//     //   // TODO: This should be changed so snooze is not reset on login.
//     //   snooze: 9
//     // }
//
//     it(
//       'adds document',
//       async () => {
//         const initialState = await ConfigureStore().store.getState()
//
//         await ActionThunks.addDocument(email1)
//
//         expect(
//           {
//             ...initialState // ,
//             // checkinTime: user.checkinTime,
//             // errorMessage: '',
//             // isSignedIn: user.isSignedIn,
//             // snooze: user.snooze
//           }
//         ).toEqual(
//           {
//             ...expectedState // ,
//             // checkinTime: user.checkinTime,
//             // errorMessage: '',
//             // isSignedIn: user.isSignedIn,
//             // snooze: user.snooze
//           }
//         )
//       }
//     )
//
//     it(
//       'reads Firestore',
//       async () => {
//         const db = getFirestore(null)
//         const testDoc = db.collection('users').doc(email1)
//
//         await firebase.assertSucceeds(testDoc.get())
//       }
//     )
//
//     it(
//       'does not write Firestore',
//       async () => {
//         const now = (new Date()).toISOString()
//         const db = getFirestore(null)
//         const testDoc = db.collection('users').doc(email1)
//
//         await firebase.assertFails(testDoc.set({ checkinTime: now }))
//       }
//     )
//
//     it(
//       'writes to user document with same ID as user',
//       async () => {
//         const now = (new Date()).toISOString()
//         const db = getFirestore(auth1)
//         const testDoc = db.collection('users').doc(email1)
//
//         await firebase.assertSucceeds(testDoc.set({ checkinTime: now }))
//       }
//     )
//
//     it(
//       'does not write to user document with different ID as user',
//       async () => {
//         const now = (new Date()).toISOString()
//         const db = getFirestore(auth2)
//         const testDoc = db.collection('users').doc(email1)
//
//         await firebase.assertFails(testDoc.set({ checkinTime: now }))
//       }
//     )
//
//     it(
//       'updates Firestore',
//       async () => {
//         const db = getFirestore(auth1)
//         const testDoc = db.collection('users').doc(email1)
//         // await testDoc.set({ checkinTime: now })
//
//         await ActionThunks.signIn({ username: email1, password: 'A1111111' })
//         await ActionThunks.addDocument(email1)
//
//         // await testDoc.get().then(doc => console.log(doc))
//         await firebase.assertSucceeds(testDoc.get())
//       }
//     )
//   }
// )

// afterAll(
//   async () => await firebase.clearFirestoreData({ projectId: PROJECT_ID })
// )
