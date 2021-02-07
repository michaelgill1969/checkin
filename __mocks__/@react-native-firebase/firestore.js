const db = jest.createMockFromModule('@react-native-firebase/firestore')

// TODO: Document data should be a real store.
const documentData = { data: 'MOCK_DATA' }
const documentSnapshot = {
  // simulate firestore get doc.data() function
  data: () => documentData,
  exists: typeof documentData !== 'undefined' && documentData !== null
}
const get = jest.fn(() => Promise.resolve(documentSnapshot))
const set = jest.fn()
const doc = jest.fn(() => { return { set, get } })
const collection = jest.fn(() => { return { doc } })

db.collection = collection

export default db
