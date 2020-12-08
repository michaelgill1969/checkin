// TODO: Investigate type error in Jest output.
import { ConfigureStore } from '../redux/configureStore'

describe(
  'redux store',
  () => {
    const initialState = ConfigureStore().store.getState()
    const expectedState = {
      auth: {
        _persist: {
          rehydrated: false,
          version: -1
        },
        errorMessage: '',
        user: null
      },
      buddy: {
        _persist: {
          rehydrated: false,
          version: -1
        },
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
        _persist: {
          rehydrated: false,
          version: -1
        },
        errorMessage: '',
        token: ''
      },
      inputs: {
        _persist: {
          rehydrated: false,
          version: -1
        },
        alertTimes: [],
        errorMessage: '',
        height: 0,
        showTip: true
      },
      listener: {
        _persist: {
          rehydrated: false,
          version: -1
        },
        errorMessage: '',
        interval: 0,
        listeners: []
      },
      timer: {
        _persist: {
          rehydrated: false,
          version: -1
        },
        errorMessage: '',
        interval: 0,
        timers: []
      },
      token: {
        _persist: {
          rehydrated: false,
          version: -1
        },
        errorMessage: '',
        password: '',
        username: ''
      },
      user: {
        _persist: {
          rehydrated: false,
          version: -1
        },
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

    it(
      'returns initial state',
      async () => await expect(initialState).toEqual(expectedState)
    )
  }
)
