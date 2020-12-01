import * as ActionTypes from '../redux/ActionTypes'
import { Auth } from '../redux/authReducer'
import { Buddy } from '../redux/buddyReducer'
import { Device } from '../redux/deviceReducer'

describe(
  'auth reducer',
  () => {
    const initialState = Auth(undefined, {})
    const expectedState = {
      errorMessage: '',
      user: null
    }

    it(
      'returns initial state;',
      () => {
        expect(initialState).toEqual(expectedState)
      }
    )

    it(
      'handles REGISTRATION_REQUESTED',
      () => {
        const received = Auth(
          undefined,
          {
            type: ActionTypes.REGISTRATION_REQUESTED
          }
        )

        expect(received).toEqual(
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
        const received = Auth(
          undefined,
          {
            type: ActionTypes.REGISTRATION_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(received).toEqual(
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
        const received = Auth(
          initialState,
          {
            type: ActionTypes.REGISTRATION_FULFILLED,
            user: { user: { email: 'a@a.aa', uid: 'some string' } }
          }
        )

        expect(received).toEqual(
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
        const received = Auth(
          undefined,
          {
            type: ActionTypes.SIGNIN_REQUESTED
          }
        )

        expect(received).toEqual(
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
        const received = Auth(
          undefined,
          {
            type: ActionTypes.SIGNIN_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(received).toEqual(
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
        const received = Auth(
          initialState,
          {
            type: ActionTypes.SIGNIN_FULFILLED,
            user: { user: { email: 'a@a.aa', uid: 'some string' } }
          }
        )

        expect(received).toEqual(
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
        const received = Auth(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REQUESTED
          }
        )

        expect(received).toEqual(
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
        const received = Auth(
          undefined,
          {
            type: ActionTypes.SIGNOUT_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(received).toEqual(
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
        const received = Auth(
          initialState,
          {
            type: ActionTypes.SIGNOUT_FULFILLED,
            user: { user: { email: 'a@a.aa', uid: 'some string' } }
          }
        )

        expect(received).toEqual(
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
    const initialState = {
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
      'returns initial state;',
      () => {
        expect(Buddy(undefined, {})).toEqual(
          initialState
        )
      }
    )
  }
)

describe(
  'device reducer',
  () => {
    const initialState = {
      errorMessage: '',
      token: ''
    }

    it(
      'returns initial state;',
      () => {
        expect(Device(undefined, {})).toEqual(
          initialState
        )
      }
    )

    it(
      'handles INITIALIZE_STORE_REQUESTED',
      () => {
        const received = Device(
          undefined,
          {
            type: ActionTypes.INITIALIZE_STORE_REQUESTED
          }
        )

        expect(received).toEqual(
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
        const received = Device(
          undefined,
          {
            type: ActionTypes.INITIALIZE_STORE_REJECTED,
            errorMessage: 'An error was thrown.'
          }
        )

        expect(received).toEqual(
          {
            ...initialState,
            errorMessage: 'An error was thrown.'
          }
        )
      }
    )

    it(
      'handles INITIALIZE_STORE_FULFILLED',
      () => {
        const received = Device(
          undefined,
          {
            type: ActionTypes.INITIALIZE_STORE_FULFILLED,
            deviceToken: '1234'
          }
        )

        expect(received).toEqual(
          {
            errorMessage: '',
            token: '1234'
          }
        )
      }
    )
  }
)
