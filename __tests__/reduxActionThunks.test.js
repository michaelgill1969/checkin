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

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

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
      'updates e-mail in buddy reducer',
      async () => {
        const email = 'a@a.aa'
        const initialState = await ConfigureStore().store.getState()

        await ActionThunks.addBuddy(email)

        expect(
          {
            ...initialState,
            email: email
          }
        ).toEqual(
          {
            ...expectedState,
            email: email
          }
        )
      }
    )
  }
)
