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
