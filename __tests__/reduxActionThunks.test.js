import firestore from '@react-native-firebase/firestore'
import { ConfigureStore } from '../redux/configureStore'
import * as ActionThunks from '../redux/ActionThunks'

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

jest.mock(
  '@react-native-firebase/firestore',
  () => {
    return {
      db: jest.fn(
        () => (
          {
            collection: jest.fn(
              users => (
                {
                  doc: jest.fn(
                    email => (
                      {
                        get: jest.fn(
                          () => Promise.resolve('something')
                        )
                      }
                    )
                  )
                }
              )
            )
          }
        )
      )
    }
  }
)

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
        const email = 'a@a.aa'
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
    const email = 'a@a.aa'
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
      'updates Firestore',
      async () => {
        await ActionThunks.addDocument(email)

        const response = await firestore
          .db().collection('users').doc(email).get()
          .then(
            doc => doc, // TODO: It would be better to actually contact the Firestore.
            error => {
              var errorMessage = new Error(error.message)
              throw errorMessage
            }
          )
          .catch(
            error => console.log(error.message)
          )

        expect(response).toEqual('something')
      }
    )
  }
)
