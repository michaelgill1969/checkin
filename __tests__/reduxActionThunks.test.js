import auth from '@react-native-firebase/auth'
import * as ActionCreators from '../redux/ActionCreators'
import * as ActionThunks from '../redux/ActionThunks'
import { ConfigureStore } from '../redux/configureStore'

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

beforeEach(
  () => jest.useFakeTimers()
)

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
          .resolves.toStrictEqual({ user: { email: email1 } })
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
              expect(spy5).toHaveBeenCalledTimes(2)
              expect(spy6).toHaveBeenCalled()
              expect(setTimeout).toHaveBeenLastCalledWith(
                expect.any(Function),
                60000
              )
              jest.runOnlyPendingTimers()
              expect(spy7).toHaveBeenCalled()
              expect(spy8).toHaveBeenCalledTimes(2)
              expect(spy9).toHaveBeenCalled()
              expect(spy10).toHaveBeenCalled()
              expect(spy11).toHaveBeenCalledWith(
                { creds: credentials1, user: { email: email1 } }
              )
              return null
            },
            error => {
              const errorMessage = new Error(error.message)
              throw errorMessage
            }
          )
          .catch(
            error => {
              expect.assertions(12)
              expect(error).not.toBeNull()
            }
          )
      }
    )
  }
)

describe(
  'set-timer-interval thunk',
  () => {
    // it(
    //   'requests timer interval',
    //   () => {
    //     const store = ConfigureStore().store
    //     const spy = jest.spyOn(ActionCreators, 'setTimerIntervalRequested')

    //     return store.dispatch(
    //       ActionThunks.setTimerInterval(
    //         [
    //           {
    //             id: '123456789',
    //             time: '1970-01-03T12:00:00.000Z',
    //             validity: true
    //           }
    //         ],
    //         '1970-01-03T11:00:00.000Z'
    //       )
    //     )
    //       .then(
    //         interval => {
    //           expect(spy).toHaveBeenCalled()
    //           return null
    //         },
    //         error => {
    //           const errorMessage = new Error(error.message)
    //           throw errorMessage
    //         }
    //       )
    //       .catch(
    //         error => {
    //           expect.assertions(1)
    //           expect(error).not.toBeNull()
    //         }
    //       )
    //   }
    // )

    // it(
    //   'fulfills timer interval',
    //   () => {
    //     const store = ConfigureStore().store
    //     const spy = jest.spyOn(ActionCreators, 'setTimerIntervalFulfilled')

    //     return store.dispatch(
    //       ActionThunks.setTimerInterval(
    //         [
    //           {
    //             id: '123456789',
    //             time: '1970-01-03T12:00:00.000Z',
    //             validity: true
    //           }
    //         ],
    //         '1970-01-03T12:00:00.000Z'
    //       )
    //     )
    //       .then(
    //         interval => {
    //           expect(spy).toHaveBeenCalled()
    //           return null
    //         },
    //         error => {
    //           const errorMessage = new Error(error.message)
    //           throw errorMessage
    //         }
    //       )
    //       .catch(
    //         error => {
    //           expect.assertions(1)
    //           expect(error).not.toBeNull()
    //         }
    //       )
    //   }
    // )

    // it(
    //   'returns one-minute interval when there are no alerts',
    //   () => {
    //     const store = ConfigureStore().store
    //     const spy1 = jest.spyOn(ActionCreators, 'setTimerIntervalRequested')
    //     const spy2 = jest.spyOn(ActionCreators, 'setTimerIntervalFulfilled')

    //     return store.dispatch(
    //       ActionThunks.setTimerInterval([], null)
    //     )
    //       .then(
    //         interval => {
    //           expect(spy1).toHaveBeenCalledTimes(1)
    //           expect(spy2).toHaveBeenCalledTimes(1)
    //           expect(interval).toEqual(60000)
    //           return null
    //         },
    //         error => {
    //           const errorMessage = new Error(error.message)
    //           throw errorMessage
    //         }
    //       )
    //       .catch(
    //         error => {
    //           expect.assertions(3)
    //           expect(error).not.toBeNull()
    //         }
    //       )
    //   }
    // )

    // it(
    //   'rejects timer interval when there are alerts and check-in time is null',
    //   () => {
    //     const store = ConfigureStore().store
    //     const alertTimes = [
    //       {
    //         id: '123456789',
    //         time: '1970-01-03T12:00:00.000Z',
    //         validity: true
    //       }
    //     ]
    //     const spy1 = jest.spyOn(ActionCreators, 'setTimerIntervalRequested')
    //     const spy2 = jest.spyOn(ActionCreators, 'setTimerIntervalRejected')

    //     return store.dispatch(
    //       ActionThunks.setTimerInterval(alertTimes, null)
    //     )
    //       .then(
    //         interval => {
    //           expect(spy1).toHaveBeenCalledTimes(1)
    //           expect(spy2).toHaveBeenCalledTimes(1)
    //           return null
    //         },
    //         error => {
    //           const errorMessage = new Error(error.message)
    //           throw errorMessage
    //         }
    //       )
    //       .catch(
    //         error => {
    //           expect.assertions(2)
    //           expect(error).not.toBeNull()
    //         }
    //       )
    //   }
    // )

    it(
      'returns interval of zero when current time is more than a day after ' +
      'the check-in time',
      () => {
        const store = ConfigureStore().store
        const alertTimes = [
          {
            id: '123456789',
            time: '1970-01-03T12:00:00.000Z',
            validity: true
          }
        ]
        const checkinTime = (new Date(172800000))
        const currentTime = (new Date(259200001))
        const spy1 = jest.spyOn(ActionCreators, 'setTimerIntervalRequested')
        const spy2 = jest.spyOn(ActionCreators, 'setTimerIntervalFulfilled')

        return store.dispatch(
          ActionThunks.setTimerInterval(
            alertTimes,
            checkinTime.toISOString(),
            currentTime.toISOString()
          )
        )
          .then(
            interval => {
              expect(spy1).toHaveBeenCalledTimes(1)
              expect(spy2).toHaveBeenCalledTimes(1)
              expect(interval).toEqual(0)
              expect(currentTime - checkinTime > 86400000).toBe(true)
              return null
            },
            error => {
              const errorMessage = new Error(error.message)
              throw errorMessage
            }
          )
          .catch(
            error => {
              expect.assertions(4)
              expect(error).not.toBeNull()
            }
          )
      }
    )

    // TODO: Change the following logic so it tests what it says.
    it(
      'returns interval until next alert when alert time immediately before ' +
      'the current time is less than the check-in time',
      () => {
        const store = ConfigureStore().store
        const alertTimes = [
          {
            id: '123456789',
            time: '1970-01-03T12:00:00.000Z',
            validity: true
          }
        ]
        const checkinTime = (new Date(172800000))
        const currentTime = (new Date(259200001))
        const spy1 = jest.spyOn(ActionCreators, 'setTimerIntervalRequested')
        const spy2 = jest.spyOn(ActionCreators, 'setTimerIntervalFulfilled')

        return store.dispatch(
          ActionThunks.setTimerInterval(
            alertTimes,
            checkinTime.toISOString(),
            currentTime.toISOString()
          )
        )
          .then(
            interval => {
              expect(spy1).toHaveBeenCalledTimes(1)
              expect(spy2).toHaveBeenCalledTimes(1)
              expect(interval).toEqual(0)
              expect(currentTime - checkinTime > 86400000).toBe(false)
              return null
            },
            error => {
              const errorMessage = new Error(error.message)
              throw errorMessage
            }
          )
          .catch(
            error => {
              expect.assertions(4)
              expect(error).not.toBeNull()
            }
          )
      }
    )
  }
)

afterEach(
  () => {
    jest.clearAllMocks()
    jest.clearAllTimers()
  }
)
