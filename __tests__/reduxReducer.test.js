import * as ActionTypes from '../redux/ActionTypes'
import { Auth } from '../redux/authReducer'
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
  }
)

describe(
  'device reducer',
  () => {
    const state = {
      errorMessage: '',
      token: ''
    }

    it(
      'returns initial state;',
      () => {
        expect(Device(undefined, {})).toEqual(
          state
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
            ...state,
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
            ...state,
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
