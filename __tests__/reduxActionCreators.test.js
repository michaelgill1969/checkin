import * as ActionCreators from '../redux/ActionCreators'
import * as ActionTypes from '../redux/ActionTypes'

describe(
  'add-buddy creator',
  () => {
    it(
      'should create an action to request adding a buddy',
      () => {
        const expectedAction = {
          type: ActionTypes.ADD_BUDDY_REQUESTED
        }

        expect(ActionCreators.addBuddyRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject adding a buddy',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.ADD_BUDDY_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.addBuddyRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill adding a buddy',
      () => {
        const email = 'a@a.aa'
        const expectedAction = {
          type: ActionTypes.ADD_BUDDY_FULFILLED,
          email: email
        }

        expect(ActionCreators.addBuddyFulfilled(email))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'add-document creator',
  () => {
    it(
      'should create an action to request adding a document',
      () => {
        const expectedAction = {
          type: ActionTypes.ADD_DOCUMENT_REQUESTED
        }

        expect(ActionCreators.addDocumentRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject adding a document',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.ADD_DOCUMENT_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.addDocumentRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill adding a document',
      () => {
        const now = (new Date()).toISOString()
        const user = { checkinTime: now, isSignedIn: true, snooze: 42 }
        const expectedAction = {
          type: ActionTypes.ADD_DOCUMENT_FULFILLED,
          user: user
        }

        expect(ActionCreators.addDocumentFulfilled(user))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'check-in creator',
  () => {
    it(
      'should create an action to request a check-in',
      () => {
        const expectedAction = {
          type: ActionTypes.CHECKIN_REQUESTED
        }

        expect(ActionCreators.checkinRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject a check-in',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.CHECKIN_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.checkinRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill a check-in',
      () => {
        const now = (new Date()).toISOString()
        const checkinTime = now
        const expectedAction = {
          type: ActionTypes.CHECKIN_FULFILLED,
          checkinTime: checkinTime
        }

        expect(ActionCreators.checkinFulfilled(checkinTime))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'get-document creator',
  () => {
    it(
      'should create an action to request getting a document',
      () => {
        const expectedAction = {
          type: ActionTypes.GET_DOCUMENT_REQUESTED
        }

        expect(ActionCreators.getDocumentRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject getting a document',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.GET_DOCUMENT_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.getDocumentRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill getting a document',
      () => {
        const now = (new Date()).toISOString()
        const data = [[], 42, now, true, 42]
        const expectedAction = {
          type: ActionTypes.GET_DOCUMENT_FULFILLED,
          alertTimes: data[1],
          checkinInterval: data[2],
          checkinTime: data[3],
          isAdded: data[0],
          snooze: data[4]
        }

        expect(ActionCreators.getDocumentFulfilled(data))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'hide-tip creator',
  () => {
    it(
      'should create an action to request hiding a tip',
      () => {
        const expectedAction = {
          type: ActionTypes.HIDE_TIP_REQUESTED
        }

        expect(ActionCreators.hideTipRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject hiding a tip',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.HIDE_TIP_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.hideTipRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill hiding a tip',
      () => {
        const expectedAction = { type: ActionTypes.HIDE_TIP_FULFILLED }

        expect(ActionCreators.hideTipFulfilled())
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'initialize-store creator',
  () => {
    it(
      'should create an action to request initializing a store',
      () => {
        const expectedAction = {
          type: ActionTypes.INITIALIZE_STORE_REQUESTED
        }

        expect(ActionCreators.initializeStoreRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject initializing a store',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.INITIALIZE_STORE_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.initializeStoreRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill initializing a store',
      () => {
        const deviceToken = '1234'
        const expectedAction = {
          type: ActionTypes.INITIALIZE_STORE_FULFILLED,
          deviceToken
        }

        expect(ActionCreators.initializeStoreFulfilled(deviceToken))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'mutate-input creator',
  () => {
    it(
      'should create an action to request mutating an input',
      () => {
        const expectedAction = {
          type: ActionTypes.MUTATE_INPUTS_REQUESTED
        }

        expect(ActionCreators.mutateInputRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject mutating an input',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.MUTATE_INPUTS_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.mutateInputRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill mutating an input',
      () => {
        const now = (new Date()).toISOString()
        const inputs = [
          {
            id: '1234',
            time: now,
            validity: true
          }
        ]
        const expectedAction = {
          type: ActionTypes.MUTATE_INPUTS_FULFILLED,
          inputs: inputs
        }

        expect(ActionCreators.mutateInputFulfilled(inputs))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'registration creator',
  () => {
    it(
      'should create an action to request registration',
      () => {
        const expectedAction = {
          type: ActionTypes.REGISTRATION_REQUESTED
        }

        expect(ActionCreators.registrationRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject registration',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.REGISTRATION_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.registrationRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill registration',
      () => {
        const user = { email: 'a@a.aa', uid: 'some string' }
        const expectedAction = {
          type: ActionTypes.REGISTRATION_FULFILLED,
          user: user
        }

        expect(ActionCreators.registrationFulfilled(user))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'remove-inputs creator',
  () => {
    it(
      'should create an action to request removing inputs',
      () => {
        const expectedAction = {
          type: ActionTypes.REMOVE_INPUTS_REQUESTED
        }

        expect(ActionCreators.removeInputsRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject removing inputs',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.REMOVE_INPUTS_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.removeInputsRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill removing inputs',
      () => {
        const now = (new Date()).toISOString()
        const inputs = [
          {
            id: '1234',
            time: now,
            validity: true
          }
        ]
        const expectedAction = {
          type: ActionTypes.REMOVE_INPUTS_FULFILLED,
          inputs: inputs
        }

        expect(ActionCreators.removeInputsFulfilled(inputs))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'remove-listeners creator',
  () => {
    it(
      'should create an action to request removing listeners',
      () => {
        const expectedAction = {
          type: ActionTypes.REMOVE_LISTENERS_REQUESTED
        }

        expect(ActionCreators.removeListenersRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject removing listeners',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.REMOVE_LISTENERS_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.removeListenersRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill removing listeners',
      () => {
        const expectedAction = {
          type: ActionTypes.REMOVE_LISTENERS_FULFILLED
        }

        expect(ActionCreators.removeListenersFulfilled())
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'remove-timers creator',
  () => {
    it(
      'should create an action to request removing timers',
      () => {
        const expectedAction = {
          type: ActionTypes.REMOVE_TIMERS_REQUESTED
        }

        expect(ActionCreators.removeTimersRequested()).toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject removing timers',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.REMOVE_TIMERS_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.removeTimersRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill removing timers',
      () => {
        const expectedAction = {
          type: ActionTypes.REMOVE_TIMERS_FULFILLED
        }

        expect(ActionCreators.removeTimersFulfilled())
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'set-input-parameters creator',
  () => {
    it(
      'should create an action to request setting input parameters',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_INPUT_PARAMETERS_REQUESTED
        }

        expect(ActionCreators.setInputParametersRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject setting input parameters',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SET_INPUT_PARAMETERS_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.setInputParametersRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill setting input parameters',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_INPUT_PARAMETERS_FULFILLED,
          height: 42
        }

        expect(ActionCreators.setInputParametersFulfilled(42))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'set-last-alert-time creator',
  () => {
    it(
      'should create an action to request setting last alert time',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_LAST_ALERT_TIME_REQUESTED
        }

        expect(ActionCreators.setLastAlertTimeRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject setting last alert time',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SET_LAST_ALERT_TIME_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.setLastAlertTimeRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill setting last alert time',
      () => {
        const now = (new Date()).toISOString()
        const expectedAction = {
          type: ActionTypes.SET_LAST_ALERT_TIME_FULFILLED,
          lastAlertTime: now
        }

        expect(ActionCreators.setLastAlertTimeFulfilled(now))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'set-listener creator',
  () => {
    it(
      'should create an action to request setting listener',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_LISTENER_REQUESTED
        }

        expect(ActionCreators.setListenerRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject setting listener',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SET_LISTENER_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.setListenerRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill setting listener',
      () => {
        const listeners = [123, 456]
        const expectedAction = {
          type: ActionTypes.SET_LISTENER_FULFILLED,
          listeners: listeners
        }

        expect(ActionCreators.setListenerFulfilled(listeners))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'set-listener-interval creator',
  () => {
    it(
      'should create an action to request setting listener interval',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_LISTENER_INTERVAL_REQUESTED
        }

        expect(ActionCreators.setListenerIntervalRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject setting listener interval',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SET_LISTENER_INTERVAL_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.setListenerIntervalRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill setting listener interval',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_LISTENER_INTERVAL_FULFILLED,
          interval: 42
        }

        expect(ActionCreators.setListenerIntervalFulfilled(42))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'set-shortest-interval creator',
  () => {
    it(
      'should create an action to request setting shortest interval',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_SHORTEST_INTERVAL_REQUESTED
        }

        expect(ActionCreators.setShortestIntervalRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject setting shortest interval',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SET_SHORTEST_INTERVAL_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.setShortestIntervalRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill setting shortest interval',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_SHORTEST_INTERVAL_FULFILLED,
          interval: 42
        }

        expect(ActionCreators.setShortestIntervalFulfilled(42))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'set-snooze creator',
  () => {
    it(
      'should create an action to request setting snooze',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_SNOOZE_REQUESTED
        }

        expect(ActionCreators.setSnoozeRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject setting snooze',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SET_SNOOZE_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.setSnoozeRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill setting snooze',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_SNOOZE_FULFILLED,
          snooze: 42
        }

        expect(ActionCreators.setSnoozeFulfilled(42))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'set-timer creator',
  () => {
    it(
      'should create an action to request setting timer',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_TIMER_REQUESTED
        }

        expect(ActionCreators.setTimerRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject setting timer',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SET_TIMER_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.setTimerRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill setting timer',
      () => {
        const timers = [123, 456]
        const expectedAction = {
          type: ActionTypes.SET_TIMER_FULFILLED,
          timers: timers
        }

        expect(ActionCreators.setTimerFulfilled(timers))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'set-timer-interval creator',
  () => {
    it(
      'should create an action to request setting timer interval',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_TIMER_INTERVAL_REQUESTED
        }

        expect(ActionCreators.setTimerIntervalRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject setting timer interval',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SET_TIMER_INTERVAL_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.setTimerIntervalRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill setting timer interval',
      () => {
        const expectedAction = {
          type: ActionTypes.SET_TIMER_INTERVAL_FULFILLED,
          interval: 42
        }

        expect(ActionCreators.setTimerIntervalFulfilled(42))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'sign-in creator',
  () => {
    it(
      'should create an action to request signing in',
      () => {
        const expectedAction = {
          type: ActionTypes.SIGNIN_REQUESTED
        }

        expect(ActionCreators.signinRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject signing in',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SIGNIN_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.signinRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill signing in',
      () => {
        const user = { username: 'a@a.aa', password: 'some string' }
        const expectedAction = {
          type: ActionTypes.SIGNIN_FULFILLED,
          user: user
        }

        expect(ActionCreators.signinFulfilled(user))
          .toEqual(expectedAction)
      }
    )
  }
)

describe(
  'sign-out creator',
  () => {
    it(
      'should create an action to request signing out',
      () => {
        const expectedAction = {
          type: ActionTypes.SIGNOUT_REQUESTED
        }

        expect(ActionCreators.signoutRequested())
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to reject signing out',
      () => {
        const errorMessage = 'An error was thrown.'
        const expectedAction = {
          type: ActionTypes.SIGNOUT_REJECTED,
          errorMessage: errorMessage
        }

        expect(ActionCreators.signoutRejected(errorMessage))
          .toEqual(expectedAction)
      }
    )

    it(
      'should create an action to fulfill signing out',
      () => {
        const expectedAction = { type: ActionTypes.SIGNOUT_FULFILLED }

        expect(ActionCreators.signoutFulfilled())
          .toEqual(expectedAction)
      }
    )
  }
)
