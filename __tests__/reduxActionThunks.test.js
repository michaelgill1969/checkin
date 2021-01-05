// import auth from '@react-native-firebase/auth'
// import db from '@react-native-firebase/firestore'
import * as firebase from '@firebase/testing'
import * as ActionThunks from '../redux/ActionThunks'
import { ConfigureStore } from '../redux/configureStore'

const PROJECT_ID = 'cryonics-check-in-dev-0-0-2'
const email1 = 'a@a.aa'
const email2 = 'b@b.bb'
const uid1 = email1
const uid2 = email2
const auth1 = { uid: uid1, email: email1 }
const auth2 = { uid: uid2, email: email2 }

function getFirestore (auth) {
  return firebase
    .initializeTestApp({ projectId: PROJECT_ID, auth: auth })
    .firestore()
}

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

// beforeEach(
//   async () => await firebase.clearFirestoreData({ projectId: PROJECT_ID })
// )

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

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
  'add-buddy thunk',
  () => {
    it(
      'updates buddy',
      async () => {
        const initialState = await ConfigureStore().store.getState()

        await ActionThunks.addBuddy(email1)

        expect(
          {
            ...initialState,
            email: email1,
            errorMessage: ''
          }
        ).toEqual(
          {
            ...expectedState,
            email: email1,
            errorMessage: ''
          }
        )
      }
    )
  }
)

describe(
  'add-document thunk',
  () => {
    const now = (new Date()).toISOString()
    const user = {
      checkinTime: now,
      isSignedIn: true,
      snooze: 9 // TODO: This should be changed so snooze is not reset on login.
    }

    it(
      'adds document',
      async () => {
        const initialState = await ConfigureStore().store.getState()

        await ActionThunks.addDocument(email1)

        expect(
          {
            ...initialState,
            checkinTime: user.checkinTime,
            errorMessage: '',
            isSignedIn: user.isSignedIn,
            snooze: user.snooze
          }
        ).toEqual(
          {
            ...expectedState,
            checkinTime: user.checkinTime,
            errorMessage: '',
            isSignedIn: user.isSignedIn,
            snooze: user.snooze
          }
        )
      }
    )

    it(
      'reads Firestore',
      async () => {
        await firebase.clearFirestoreData({ projectId: PROJECT_ID })

        const db = getFirestore(null)
        const testDoc = db.collection('users').doc(email1)

        await firebase.assertSucceeds(testDoc.get())
      }
    )

    it(
      'does not write Firestore',
      async () => {
        await firebase.clearFirestoreData({ projectId: PROJECT_ID })

        const now = (new Date()).toISOString()
        const db = getFirestore(null)
        const testDoc = db.collection('users').doc(email1)

        await firebase.assertFails(testDoc.set({ checkinTime: now }))
      }
    )

    it(
      'writes to user document with same ID as user',
      async () => {
        await firebase.clearFirestoreData({ projectId: PROJECT_ID })

        const now = (new Date()).toISOString()
        const db = getFirestore(auth1)
        const testDoc = db.collection('users').doc(email1)

        await firebase.assertSucceeds(testDoc.set({ checkinTime: now }))
      }
    )

    it(
      'does not write to user document with different ID as user',
      async () => {
        await firebase.clearFirestoreData({ projectId: PROJECT_ID })

        const now = (new Date()).toISOString()
        const db = getFirestore(auth2)
        const testDoc = db.collection('users').doc(email1)

        await firebase.assertFails(testDoc.set({ checkinTime: now }))
      }
    )

    it(
      'updates Firestore',
      async () => {
        await firebase.clearFirestoreData({ projectId: PROJECT_ID })

        const db = getFirestore(auth1)
        const testDoc = db.collection('users').doc(email1)
        // await testDoc.set({ checkinTime: now })

        await ActionThunks.signIn({ username: email1, password: 'A1111111' })
        await ActionThunks.addDocument(email1)

        // await testDoc.get().then(doc => console.log(doc))
        await firebase.assertSucceeds(testDoc.get())
      }
    )
  }
)

// afterAll(
//   async () => await firebase.clearFirestoreData({ projectId: PROJECT_ID })
// )
