import auth from '@react-native-firebase/auth'
import * as ActionCreators from '../redux/ActionCreators'
import * as ActionThunks from '../redux/ActionThunks'
import { ConfigureStore } from '../redux/configureStore'

// jest.mock('@react-native-firebase/auth')
// jest.mock('@react-native-firebase/firestore')
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.mock(
  'redux-persist',
  () => {
    return {
      ...jest.requireActual('redux-persist'),
      persistReducer: jest.fn()
        .mockImplementation((config, reducers) => reducers)
    }
  }
)

jest.useFakeTimers()

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

// const PROJECT_ID = 'cryonics-check-in-dev-0-0-2'
const email1 = 'a@a.aa'
// const email2 = 'b@b.bb'
const password1 = 'A1111111'
// const password2 = 'B1111111'
const credentials1 = { username: email1, password: password1 }
// const credentials2 = { username: email2, password: password2 }
// const uid1 = email1
// const uid2 = email2
// const auth1 = { uid: uid1, email: email1 }
// const auth2 = { uid: uid2, email: email2 }

// function getFirestore (auth) {
//   return firebase
//     .initializeTestApp({ projectId: PROJECT_ID, auth: auth })
//     .firestore()
// }

// beforeEach(
//   async () => await firebase.clearFirestoreData({ projectId: PROJECT_ID })
// )

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
  'firebase',
  () => {
    it(
      'allows user creation',
      async () => {
        await expect(auth.createUserWithEmailAndPassword(email1, password1))
          .resolves.toStrictEqual(
            {
              user: {
                email: email1
              }
            }
          )
      }
    )
  }
)

describe(
  'registration thunk',
  () => {
    it(
      'registers user',
      () => {
        const spy1 = jest.spyOn(auth, 'createUserWithEmailAndPassword')
        const spy2 = jest.spyOn(ActionCreators, 'registrationRequested')
        const spy3 = jest.spyOn(ActionCreators, 'addDocumentRequested')
        const spy4 = jest.spyOn(ActionCreators, 'checkinRequested')
        const spy5 = jest.spyOn(ActionCreators, 'removeTimersRequested')
        const spy6 = jest.spyOn(ActionCreators, 'setTimerRequested')
        const spy7 = jest.spyOn(ActionCreators, 'setTimerFulfilled')
        const spy8 = jest.spyOn(ActionCreators, 'removeTimersFulfilled')
        const spy9 = jest.spyOn(ActionCreators, 'checkinFulfilled')
        const spy10 = jest.spyOn(ActionCreators, 'addDocumentFulfilled')
        const spy11 = jest.spyOn(ActionCreators, 'registrationFulfilled')
        const store = ConfigureStore().store

        return store.dispatch(ActionThunks.register(credentials1))
          .then(
            () => {
              // console.log(store.getState())
              expect(spy1).toHaveBeenCalledWith(email1, password1)
              expect(spy2).toHaveBeenCalled()
              expect(spy3).toHaveBeenCalled()
              expect(spy4).toHaveBeenCalled()
              expect(spy5).toHaveBeenCalled()
              expect(spy6).toHaveBeenCalled()
              // expect(spy7).toHaveBeenCalled()
              // expect(spy8).toHaveBeenCalled()
              // expect(spy9).toHaveBeenCalled()
              // expect(spy10).toHaveBeenCalled()
              // expect(spy11).toHaveBeenCalledWith(
              //   { creds: credentials1, user: { email: email1 } }
              // )
              return null
            },
            error => {
              const errorMessage = new Error(error.message)
              throw errorMessage
            }
          )
          .catch(
            error => console.log(error)
          )
      }
    )
  }
)

// afterAll(
//   async () => await firebase.clearFirestoreData({ projectId: PROJECT_ID })
// )
