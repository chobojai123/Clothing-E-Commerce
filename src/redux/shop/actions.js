import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAIL
} from '../../constants'

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionsFail = payload => ({
  type: FETCH_COLLECTIONS_FAIL,
  payload
})

export const fetchCollectionsStartAync = () => dispatch => {
  const collectionRef = firestore.collection('collections')
  dispatch(fetchCollectionsStart())
  return new Promise((resolve, reject) => {
    return collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(
          snapshot
        )
        dispatch(fetchCollectionsSuccess(collectionsMap))
        resolve(collectionsMap)
      })
      .catch(error => {
        dispatch(fetchCollectionsFail(error))
        reject(error)
      })
  })
}
