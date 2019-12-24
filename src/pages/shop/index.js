import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router'
import CollectionsOverview from '../../components/collections-overview/index'
import CollectionPage from '../collection/index'
import { updateCollections } from '../../redux/shop/actions'
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'
import WithSpinner from '../../components/with-spinner'

const CollectionsOverviewWithSpinner = WithSpinner(
  CollectionsOverview
)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const collectionsOverviewMatch = useRouteMatch('/shop')
  const collectionMatch = useRouteMatch('/shop/:collectionId')

  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionsSnapshotToMap(
        snapshot
      )
      setIsLoading(false)
      dispatch(updateCollections(collectionsMap))
    })
  })
  return (
    <div className="shop-page">
      {collectionsOverviewMatch && (
        <CollectionsOverviewWithSpinner
          isLoading={isLoading}
          match={collectionsOverviewMatch}
        />
      )}
      {collectionMatch && (
        <CollectionPageWithSpinner
          isLoading={isLoading}
          match={collectionMatch}
        />
      )}
    </div>
  )
}

export default ShopPage
