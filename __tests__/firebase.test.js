import * as firebase from '@firebase/testing'

jest.mock('@react-native-firebase/auth')

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

const PROJECT_ID = 'cryonics-check-in-dev-0-0-2'
const email1 = 'a@a.aa'
const email2 = 'b@b.bb'
const uid1 = email1
const uid2 = email2
const auth1 = { uid: uid1, email: email1 }
const auth2 = { uid: uid2, email: email2 }

function getFirestore (auth) {
  return firebase
    .initializeTestApp({ projectId: PROJECT_ID, auth: auth })
    .firestore()
}

describe(
  'security rules',
  () => {
    const firestoreWithoutAuthorization = getFirestore(null)
    const firestoreForUser1 = getFirestore(auth1)
    const firestoreForUser2 = getFirestore(auth2)

    it(
      'do not allow creation of document in firestore without authorized user',
      async () => {
        await firebase.assertFails(
          firestoreWithoutAuthorization
            .collection('users')
            .doc('testDoc')
            .set({ foo: 'bar' })
        )
      }
    )

    it(
      'allow creation of document in firestore for first authorized user',
      async () => {
        await firebase.assertSucceeds(
          firestoreForUser1
            .collection('users')
            .doc(email1)
            .set({ foo: 'bar' })
        )
      }
    )

    it(
      'allow creation of document in firestore for second authorized user',
      async () => {
        await firebase.assertSucceeds(
          firestoreForUser2
            .collection('users')
            .doc(email2)
            .set({ foo: 'bar' })
        )
      }
    )

    it(
      'allow first user\'s document to be deleted by first user',
      async () => {
        await firebase.assertSucceeds(
          firestoreForUser1
            .collection('users')
            .doc(email1)
            .delete()
        )
      }
    )

    it(
      'does not allow second user\'s document to be deleted by first user',
      async () => {
        await firebase.assertFails(
          firestoreForUser1
            .collection('users')
            .doc(email2)
            .delete()
        )
      }
    )

    it(
      'allow second user\'s document to be deleted by second user',
      async () => {
        await firebase.assertSucceeds(
          firestoreForUser1
            .collection('users')
            .doc(email1)
            .delete()
        )
      }
    )
  }
)

// TODO: Write tests for reading and updating.
