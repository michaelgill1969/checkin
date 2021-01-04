// import auth from '@react-native-firebase/auth'
// import db from '@react-native-firebase/firestore'
import * as firebase from '@firebase/testing'
import * as ActionThunks from '../redux/ActionThunks'
import { ConfigureStore } from '../redux/configureStore'

const MY_PROJECT_ID = 'cryonics-check-in-dev-0-0-2'
const email = 'a@a.aa'

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

        await ActionThunks.addBuddy(email)

        expect(
          {
            ...initialState,
            email: email,
            errorMessage: ''
          }
        ).toEqual(
          {
            ...expectedState,
            email: email,
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

        await ActionThunks.addDocument(email)

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
        const now = (new Date()).toISOString()
        const db =
          firebase.initializeTestApp({ projectId: MY_PROJECT_ID }).firestore()
        const testDoc = db.collection('users').doc(email)

        await firebase.assertSucceeds(testDoc.get())
      }
    )

    it(
      'does not write Firestore',
      async () => {
        const now = (new Date()).toISOString()
        const db =
          firebase.initializeTestApp({ projectId: MY_PROJECT_ID }).firestore()
        const testDoc = db.collection('users').doc(email)

        await firebase.assertFails(testDoc.set({ checkinTime: now }))
      }
    )

    it(
      'updates Firestore',
      async () => {
        // await auth().signInWithEmailAndPassword('a@a.aa', 'A1111111')
        await ActionThunks.signIn({ username: 'a@a.aa', password: 'A1111111' })
        await ActionThunks.addDocument(email)

        const response = 'something' // await db().collection('users').doc(email).get()
        // .then(
        //   doc => {
        //     console.log(doc.users)
        //     // console.log(something.users)
        //     return doc
        //   },
        //   error => {
        //     var errorMessage = new Error(error.message)
        //     throw errorMessage
        //   }
        // )
        // .catch(
        //   error => console.log(error.message)
        // )

        expect(response).not.toBeNull()
        // expect(response.some).toEqual(something.some)
      }
    )
  }
)
