import * as ActionTypes from '../redux/ActionTypes'
import { Device } from '../redux/deviceReducer'

describe(
  'device reducer',
  () => {
    const state = {
      errorMessage: '',
      token: ''
    }

    it(
      'should return the initial state',
      () => {
        expect(Device(undefined, {})).toEqual(
          state
        )
      }
    )

    it(
      'should handle INITIALIZE_STORE_REQUESTED',
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
      'should handle INITIALIZE_STORE_REJECTED',
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
      'should handle INITIALIZE_STORE_FULFILLED',
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
