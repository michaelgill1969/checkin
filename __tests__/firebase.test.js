import * as firebase from '@firebase/testing'

const PROJECT_ID = 'cryonics-check-in-test'
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

beforeEach(
  async () => await firebase.clearFirestoreData({ projectId: PROJECT_ID })
)

describe(
  'firebase',
  () => {
    const firestoreWithoutAuthorization = getFirestore(null)
    const firestoreForUser1 = getFirestore(auth1)
    const firestoreForUser2 = getFirestore(auth2)

    it(
      'does not allow creation of document in firestore without authorized user',
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
      'allows creation of document in firestore for first authorized user',
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
      'allows first user\'s document to be read by first user',
      async () => {
        await firebase.assertSucceeds(
          firestoreForUser1
            .collection('users')
            .doc(email1)
            .get()
        )
      }
    )

    it(
      'allows first user\'s document to be updated by first user',
      async () => {
        await firebase.assertSucceeds(
          firestoreForUser1
            .collection('users')
            .doc(email1)
            .update({ foo: 'baz' })
        )
      }
    )

    it(
      'allows first user\'s document to be written by first user',
      async () => {
        await firebase.assertSucceeds(
          firestoreForUser1
            .collection('users')
            .doc(email1)
            .set({ bar: 'foo' })
        )
      }
    )

    it(
      'allows first user\'s document to be deleted by first user',
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
      'allows creation of document in firestore for second authorized user',
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
      'does not allow second user\'s document to be read by first user',
      async () => {
        await firebase.assertFails(
          firestoreForUser1
            .collection('users')
            .doc(email2)
            .get()
        )
      }
    )

    it(
      'does not allow second user\'s document to be updated by first user',
      async () => {
        await firebase.assertFails(
          firestoreForUser1
            .collection('users')
            .doc(email2)
            .update({ foo: 'baz' })
        )
      }
    )

    it(
      'does not allow second user\'s document to be written by first user',
      async () => {
        await firebase.assertFails(
          firestoreForUser1
            .collection('users')
            .doc(email2)
            .set({ bar: 'foo' })
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
      'allows second user\'s document to be deleted by second user',
      async () => {
        await firebase.assertSucceeds(
          firestoreForUser2
            .collection('users')
            .doc(email2)
            .delete()
        )
      }
    )
  }
)

afterAll(
  async () => await firebase.clearFirestoreData({ projectId: PROJECT_ID })
)
