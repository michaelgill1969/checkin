const db = jest.createMockFromModule('@react-native-firebase/firestore')

let documentData = {}
const documentSnapshot = {
  data: () => documentData,
  exists: typeof documentData !== 'undefined' && documentData !== null
}
const get = jest.fn(() => Promise.resolve(documentSnapshot))
const set = jest.fn(
  data => Promise.resolve(documentData = { ...documentData, data })
)
const doc = jest.fn(() => { return { set, get } })
const collection = jest.fn(() => { return { doc } })

db.collection = collection

export default db
