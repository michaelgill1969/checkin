const db = jest.createMockFromModule('@react-native-firebase/firestore')

//jest.mock(
//  '@react-native-firebase/firestore',
//  () => collection.mockImplementation(
//    collectionPath => doc.mockImplementation(
//      documentPath => get.mockImplementation(
//        () => Promise.resolve({ foo: 'bar' })
//      )
//    )
//  )
//)

const docData = { data: "MOCK_DATA" };
const docResult = {
  // simulate firestore get doc.data() function
  data: () => docData
}
const get = jest.fn(() => Promise.resolve(docResult))
const set = jest.fn()
const doc = jest.fn(() => { set, get })
const collection = jest.fn(() => { doc })

db.collection = collection

export default db
