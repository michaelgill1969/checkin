import * as ActionTypes from '../redux/ActionTypes'
import { Auth } from '../redux/authReducer'
import { Buddy } from '../redux/buddyReducer'
import { Device } from '../redux/deviceReducer'
import { Inputs } from '../redux/inputsReducer'

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
