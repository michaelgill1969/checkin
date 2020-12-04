import * as ActionTypes from '../redux/ActionTypes'
import { Auth } from '../redux/authReducer'
import { Buddy } from '../redux/buddyReducer'
import { Device } from '../redux/deviceReducer'
import { Inputs } from '../redux/inputsReducer'
import { Listener } from '../redux/listenerReducer'
import { Timer } from '../redux/timerReducer'
import { Token } from '../redux/tokenReducer'
import { User } from '../redux/userReducer'

describe(
  'auth reducer',
  () => {
    const initialState = Auth(undefined, {})
    const expectedState = {
      errorMessage: '',
      user: null
    }

    it(
      'returns initial state',
      () => expect(initialState).toEqual(expectedState)
    )

    it(
      'handles REGISTRATION_REQUESTED',
      () => {
        const receivedState = Auth(
          undefined,
          {
            type: ActionTypes.REGISTRATION_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles REGISTRATION_REJECTED',
      () => {
        const receivedState = Auth(
          undefined,
          {
            type: ActionTypes.REGISTRATION_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles REGISTRATION_FULFILLED',
      () => {
        const receivedState = Auth(
          initialState,
          {
            type: ActionTypes.REGISTRATION_FULFILLED,
            user: { user: { email: 'a@a.aa', uid: 'some string' } }
          }
        )

        expect(receivedState).toEqual(
          {
            errorMessage: '',
            user: { email: 'a@a.aa', uid: 'some string' }
          }
        )
      }
    )

    it(
      'handles SIGNIN_REQUESTED',
      () => {
        const receivedState = Auth(
          undefined,
          {
            type: ActionTypes.SIGNIN_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SIGNIN_REJECTED',
      () => {
        const receivedState = Auth(
          undefined,
          {
            type: ActionTypes.SIGNIN_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SIGNIN_FULFILLED',
      () => {
        const receivedState = Auth(
          initialState,
          {
            type: ActionTypes.SIGNIN_FULFILLED,
            user: { user: { email: 'a@a.aa', uid: 'some string' } }
          }
        )

        expect(receivedState).toEqual(
          {
            errorMessage: '',
            user: { email: 'a@a.aa', uid: 'some string' }
          }
        )
      }
    )

    it(
      'handles SIGNOUT_REQUESTED',
      () => {
        const receivedState = Auth(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SIGNOUT_REJECTED',
      () => {
        const receivedState = Auth(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SIGNOUT_FULFILLED',
      () => {
        const receivedState = Auth(
          initialState,
          {
            type: ActionTypes.SIGNOUT_FULFILLED,
            user: { user: { email: 'a@a.aa', uid: 'some string' } }
          }
        )

        expect(receivedState).toEqual(
          {
            errorMessage: '',
            user: null
          }
        )
      }
    )
  }
)

describe(
  'buddy reducer',
  () => {
    const initialState = Buddy(undefined, {})
    const expectedState = {
      alertTimes: [],
      checkinInterval: null,
      checkinTime: '',
      email: '',
      errorMessage: '',
      isAdded: null,
      lastAlertTime: '',
      snooze: 9
    }

    it(
      'returns initial state',
      () => expect(initialState).toEqual(expectedState)
    )

    it(
      'handles ADD_BUDDY_REQUESTED',
      () => {
        const receivedState = Buddy(
          undefined,
          {
            type: ActionTypes.ADD_BUDDY_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            email: ''
          }
        )
      }
    )

    it(
      'handles ADD_BUDDY_REJECTED',
      () => {
        const receivedState = Buddy(
          undefined,
          {
            type: ActionTypes.ADD_BUDDY_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles ADD_BUDDY_FULFILLED',
      () => {
        const receivedState = Buddy(
          initialState,
          {
            type: ActionTypes.ADD_BUDDY_FULFILLED,
            email: 'a@a.aa'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            email: 'a@a.aa',
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles GET_DOCUMENT_REQUESTED',
      () => {
        const receivedState = Buddy(
          undefined,
          {
            type: ActionTypes.GET_DOCUMENT_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            email: ''
          }
        )
      }
    )

    it(
      'handles GET_DOCUMENT_REJECTED',
      () => {
        const receivedState = Buddy(
          undefined,
          {
            type: ActionTypes.GET_DOCUMENT_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.',
            isAdded: false
          }
        )
      }
    )

    it(
      'handles GET_DOCUMENT_FULFILLED',
      () => {
        const now = (new Date()).toISOString()
        const receivedState = Buddy(
          initialState,
          {
            type: ActionTypes.GET_DOCUMENT_FULFILLED,
            alertTimes: [],
            checkinInterval: 42,
            checkinTime: now,
            isAdded: true,
            snooze: 42
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            alertTimes: [],
            checkinInterval: 42,
            checkinTime: now,
            errorMessage: '',
            isAdded: true,
            snooze: 42
          }
        )
      }
    )

    it(
      'handles SET_LAST_ALERT_TIME_REQUESTED',
      () => {
        const receivedState = Buddy(
          undefined,
          {
            type: ActionTypes.SET_LAST_ALERT_TIME_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_LAST_ALERT_TIME_REJECTED',
      () => {
        const receivedState = Buddy(
          undefined,
          {
            type: ActionTypes.SET_LAST_ALERT_TIME_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_LAST_ALERT_TIME_FULFILLED',
      () => {
        const now = (new Date()).toISOString()
        const receivedState = Buddy(
          initialState,
          {
            type: ActionTypes.SET_LAST_ALERT_TIME_FULFILLED,
            lastAlertTime: now
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            lastAlertTime: now
          }
        )
      }
    )
  }
)

describe(
  'device reducer',
  () => {
    const initialState = Device(undefined, {})
    const expectedState = {
      errorMessage: '',
      token: ''
    }

    it(
      'returns initial state',
      () => expect(initialState).toEqual(expectedState)
    )

    it(
      'handles INITIALIZE_STORE_REQUESTED',
      () => {
        const receivedState = Device(
          undefined,
          {
            type: ActionTypes.INITIALIZE_STORE_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles INITIALIZE_STORE_REJECTED',
      () => {
        const receivedState = Device(
          undefined,
          {
            type: ActionTypes.INITIALIZE_STORE_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles INITIALIZE_STORE_FULFILLED',
      () => {
        const receivedState = Device(
          initialState,
          {
            type: ActionTypes.INITIALIZE_STORE_FULFILLED,
            deviceToken: '1234'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            token: '1234'
          }
        )
      }
    )
  }
)

describe(
  'inputs reducer',
  () => {
    const initialState = Inputs(undefined, {})
    const expectedState = {
      alertTimes: [],
      errorMessage: '',
      height: 0,
      showTip: true
    }

    it(
      'returns initial state',
      () => expect(initialState).toEqual(expectedState)
    )

    it(
      'handles HIDE_TIP_REQUESTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.HIDE_TIP_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles HIDE_TIP_REJECTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.HIDE_TIP_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles HIDE_TIP_FULFILLED',
      () => {
        const receivedState = Inputs(
          initialState,
          {
            type: ActionTypes.HIDE_TIP_FULFILLED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            showTip: false
          }
        )
      }
    )

    it(
      'handles MUTATE_INPUTS_REQUESTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.MUTATE_INPUTS_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles MUTATE_INPUTS_REJECTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.MUTATE_INPUTS_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles MUTATE_INPUTS_FULFILLED',
      () => {
        const now = (new Date()).toISOString()
        const receivedState = Inputs(
          initialState,
          {
            type: ActionTypes.MUTATE_INPUTS_FULFILLED,
            inputs: [
              {
                id: '1234',
                time: now,
                validity: true
              }
            ]
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            alertTimes: [
              {
                id: '1234',
                time: now,
                validity: true
              }
            ],
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles REMOVE_INPUTS_REQUESTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.REMOVE_INPUTS_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles REMOVE_INPUTS_REJECTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.REMOVE_INPUTS_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles REMOVE_INPUTS_FULFILLED',
      () => {
        const now = (new Date()).toISOString()
        const receivedState = Inputs(
          initialState,
          {
            type: ActionTypes.REMOVE_INPUTS_FULFILLED,
            inputs: [
              {
                id: '1234',
                time: now,
                validity: true
              }
            ]
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            alertTimes: [
              {
                id: '1234',
                time: now,
                validity: true
              }
            ],
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_INPUT_PARAMETERS_REQUESTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.SET_INPUT_PARAMETERS_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_INPUT_PARAMETERS_REJECTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.SET_INPUT_PARAMETERS_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_INPUT_PARAMETERS_FULFILLED',
      () => {
        const receivedState = Inputs(
          initialState,
          {
            type: ActionTypes.SET_INPUT_PARAMETERS_FULFILLED,
            height: 42
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            height: 42,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SIGNOUT_REQUESTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SIGNOUT_REJECTED',
      () => {
        const receivedState = Inputs(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SIGNOUT_FULFILLED',
      () => {
        const receivedState = Inputs(
          initialState,
          {
            type: ActionTypes.SIGNOUT_FULFILLED,
            alertTimes: [],
            errorMessage: '',
            height: null,
            showTip: true
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            alertTimes: [],
            errorMessage: '',
            height: null,
            showTip: true
          }
        )
      }
    )
  }
)

describe(
  'listener reducer',
  () => {
    const initialState = Listener(undefined, {})
    const expectedState = {
      errorMessage: '',
      interval: 0,
      listeners: []
    }

    it(
      'returns initial state',
      () => expect(initialState).toEqual(expectedState)
    )

    it(
      'handles REMOVE_LISTENERS_REQUESTED',
      () => {
        const receivedState = Listener(
          undefined,
          {
            type: ActionTypes.REMOVE_LISTENERS_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles REMOVE_LISTENERS_REJECTED',
      () => {
        const receivedState = Listener(
          undefined,
          {
            type: ActionTypes.REMOVE_LISTENERS_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles REMOVE_LISTENERS_FULFILLED',
      () => {
        const receivedState = Listener(
          initialState,
          {
            type: ActionTypes.REMOVE_LISTENERS_FULFILLED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            listeners: []
          }
        )
      }
    )

    it(
      'handles SET_LISTENER_REQUESTED',
      () => {
        const receivedState = Listener(
          undefined,
          {
            type: ActionTypes.SET_LISTENER_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_LISTENER_REJECTED',
      () => {
        const receivedState = Listener(
          undefined,
          {
            type: ActionTypes.SET_LISTENER_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_LISTENER_FULFILLED',
      () => {
        const receivedState = Listener(
          initialState,
          {
            type: ActionTypes.SET_LISTENER_FULFILLED,
            listeners: ['123', '456']
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            listeners: ['123', '456']
          }
        )
      }
    )

    it(
      'handles SET_LISTENER_INTERVAL_REQUESTED',
      () => {
        const receivedState = Listener(
          undefined,
          {
            type: ActionTypes.SET_LISTENER_INTERVAL_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_LISTENER_INTERVAL_REJECTED',
      () => {
        const receivedState = Listener(
          undefined,
          {
            type: ActionTypes.SET_LISTENER_INTERVAL_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_LISTENER_INTERVAL_FULFILLED',
      () => {
        const receivedState = Listener(
          initialState,
          {
            type: ActionTypes.SET_LISTENER_INTERVAL_FULFILLED,
            interval: 42
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            interval: 42
          }
        )
      }
    )
  }
)

describe(
  'timer reducer',
  () => {
    const initialState = Timer(undefined, {})
    const expectedState = {
      errorMessage: '',
      interval: 0,
      timers: []
    }

    it(
      'returns initial state',
      () => expect(initialState).toEqual(expectedState)
    )

    it(
      'handles REMOVE_TIMERS_REQUESTED',
      () => {
        const receivedState = Timer(
          undefined,
          {
            type: ActionTypes.REMOVE_TIMERS_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles REMOVE_TIMERS_REJECTED',
      () => {
        const receivedState = Timer(
          undefined,
          {
            type: ActionTypes.REMOVE_TIMERS_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles REMOVE_TIMERS_FULFILLED',
      () => {
        const receivedState = Timer(
          initialState,
          {
            type: ActionTypes.REMOVE_TIMERS_FULFILLED,
            timers: []
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            timers: []
          }
        )
      }
    )

    it(
      'handles SET_TIMER_REQUESTED',
      () => {
        const receivedState = Timer(
          undefined,
          {
            type: ActionTypes.SET_TIMER_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_TIMER_REJECTED',
      () => {
        const receivedState = Timer(
          undefined,
          {
            type: ActionTypes.SET_TIMER_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_TIMER_FULFILLED',
      () => {
        const receivedState = Timer(
          initialState,
          {
            type: ActionTypes.SET_TIMER_FULFILLED,
            timers: ['123', '456']
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            timers: ['123', '456']
          }
        )
      }
    )

    it(
      'handles SET_TIMER_INTERVAL_REQUESTED',
      () => {
        const receivedState = Timer(
          undefined,
          {
            type: ActionTypes.SET_TIMER_INTERVAL_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_TIMER_INTERVAL_REJECTED',
      () => {
        const receivedState = Timer(
          undefined,
          {
            type: ActionTypes.SET_TIMER_INTERVAL_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_TIMER_INTERVAL_FULFILLED',
      () => {
        const receivedState = Timer(
          initialState,
          {
            type: ActionTypes.SET_TIMER_INTERVAL_FULFILLED,
            interval: 42
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            interval: 42
          }
        )
      }
    )
  }
)

describe(
  'token reducer',
  () => {
    const initialState = Token(undefined, {})
    const expectedState = {
      errorMessage: '',
      username: '',
      password: ''
    }

    it(
      'returns initial state',
      () => expect(initialState).toEqual(expectedState)
    )

    it(
      'handles REGISTRATION_REQUESTED',
      () => {
        const receivedState = Token(
          undefined,
          {
            type: ActionTypes.REGISTRATION_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles REGISTRATION_REJECTED',
      () => {
        const receivedState = Token(
          undefined,
          {
            type: ActionTypes.REGISTRATION_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles REGISTRATION_FULFILLED',
      () => {
        const receivedState = Token(
          initialState,
          {
            type: ActionTypes.REGISTRATION_FULFILLED,
            user: { creds: { username: 'a@a.aa', password: 'some string' } }
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            username: 'a@a.aa',
            password: 'some string'
          }
        )
      }
    )

    it(
      'handles SIGNIN_REQUESTED',
      () => {
        const receivedState = Token(
          undefined,
          {
            type: ActionTypes.SIGNIN_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SIGNIN_REJECTED',
      () => {
        const receivedState = Token(
          undefined,
          {
            type: ActionTypes.SIGNIN_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SIGNIN_FULFILLED',
      () => {
        const receivedState = Token(
          initialState,
          {
            type: ActionTypes.SIGNIN_FULFILLED,
            user: { creds: { username: 'a@a.aa', password: 'some string' } }
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            username: 'a@a.aa',
            password: 'some string'
          }
        )
      }
    )

    it(
      'handles SIGNOUT_REQUESTED',
      () => {
        const receivedState = Token(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SIGNOUT_REJECTED',
      () => {
        const receivedState = Token(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SIGNOUT_FULFILLED',
      () => {
        const receivedState = Token(
          initialState,
          {
            type: ActionTypes.SIGNOUT_FULFILLED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            username: '',
            password: ''
          }
        )
      }
    )
  }
)

describe(
  'user reducer',
  () => {
    const initialState = User(undefined, {})
    const expectedState = {
      checkinInterval: null,
      checkinTime: '',
      errorMessage: '',
      isSignedIn: null,
      lastAlertTime: '',
      longestSnooze: 60,
      shortestInterval: 1800000,
      snooze: 9
    }

    it(
      'returns initial state',
      () => expect(initialState).toEqual(expectedState)
    )

    it(
      'handles ADD_DOCUMENT_REQUESTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.ADD_DOCUMENT_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles ADD_DOCUMENT_REJECTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.ADD_DOCUMENT_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles ADD_DOCUMENT_FULFILLED',
      () => {
        const now = (new Date()).toISOString()
        const receivedState = User(
          initialState,
          {
            type: ActionTypes.ADD_DOCUMENT_FULFILLED,
            user: { checkinTime: now, isSignedIn: true, snooze: 42 }
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            checkinTime: now,
            errorMessage: '',
            isSignedIn: true,
            snooze: 42
          }
        )
      }
    )

    it(
      'handles CHECKIN_REQUESTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.CHECKIN_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles CHECKIN_REJECTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.CHECKIN_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles CHECKIN_FULFILLED',
      () => {
        const now = (new Date()).toISOString()
        const receivedState = User(
          initialState,
          {
            type: ActionTypes.CHECKIN_FULFILLED,
            checkinTime: now
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            checkinTime: now,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_LAST_ALERT_TIME_REQUESTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.SET_LAST_ALERT_TIME_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_LAST_ALERT_TIME_REJECTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.SET_LAST_ALERT_TIME_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_LAST_ALERT_TIME_FULFILLED',
      () => {
        const now = (new Date()).toISOString()
        const receivedState = User(
          initialState,
          {
            type: ActionTypes.SET_LAST_ALERT_TIME_FULFILLED,
            lastAlertTime: now
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            lastAlertTime: now
          }
        )
      }
    )

    it(
      'handles SET_SHORTEST_INTERVAL_REQUESTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.SET_SHORTEST_INTERVAL_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_SHORTEST_INTERVAL_REJECTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.SET_SHORTEST_INTERVAL_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_SHORTEST_INTERVAL_FULFILLED',
      () => {
        const receivedState = User(
          initialState,
          {
            type: ActionTypes.SET_SHORTEST_INTERVAL_FULFILLED,
            interval: 42
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            shortestInterval: 42
          }
        )
      }
    )

    it(
      'handles SET_SNOOZE_REQUESTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.SET_SNOOZE_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SET_SNOOZE_REJECTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.SET_SNOOZE_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SET_SNOOZE_FULFILLED',
      () => {
        const receivedState = User(
          initialState,
          {
            type: ActionTypes.SET_SNOOZE_FULFILLED,
            snooze: 42
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: '',
            snooze: 42
          }
        )
      }
    )

    it(
      'handles SIGNOUT_REQUESTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REQUESTED
          }
        )

        expect(receivedState).toEqual(
          {
            ...initialState,
            errorMessage: ''
          }
        )
      }
    )

    it(
      'handles SIGNOUT_REJECTED',
      () => {
        const receivedState = User(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles SIGNOUT_FULFILLED',
      () => {
        const receivedState = User(
          initialState,
          {
            type: ActionTypes.SIGNOUT_FULFILLED
          }
        )

        expect(receivedState).toEqual(
          {
            ...expectedState,
            checkinInterval: null,
            checkinTime: '',
            errorMessage: '',
            isSignedIn: null,
            lastAlertTime: '',
            longestSnooze: 60,
            shortestInterval: 3600000,
            snooze: 9
          }
        )
      }
    )
  }
)
