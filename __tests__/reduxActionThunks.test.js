import { ConfigureStore } from '../redux/configureStore'
import * as ActionThunks from '../redux/ActionThunks'

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
  'redux store dispatch',
  () => {
    it(
      'does not return null',
      async () => {
        const result = ActionThunks.addBuddy('a@a.aa') // TODO: Fails probably because Firestore is not mocked.

        expect(result).not.toBe(null)
      }
    )
  }
)

describe(
  'redux store',
  () => {
    it(
      'returns initial state',
      async () => {
        const initialState = await ConfigureStore().store.getState()
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

        expect(initialState).toEqual(expectedState)
      }
    )
  }
)
