import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'
import { fetchCollectionsStartAync } from '../../redux/shop/actions'
import { getIsShopFetching } from '../../redux/shop/selectors'
import WithSpinner from '../../components/with-spinner'

const CollectionsOverviewWithSpinner = WithSpinner(
  CollectionsOverviewContainer
)
const CollectionPageWithSpinner = WithSpinner(CollectionPageContainer)

const ShopPage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsShopFetching)
  const collectionsOverviewMatch = useRouteMatch('/shop')
  const collectionMatch = useRouteMatch('/shop/:collectionId')

  useEffect(() => {
    dispatch(fetchCollectionsStartAync())
  }, [dispatch])
  return (
    <div className="shop-page">
      <Route exact path="/shop">
        <CollectionsOverviewWithSpinner
          isLoading={isLoading}
          match={collectionsOverviewMatch}
        />
      </Route>
      <Route path="/shop/:collectionId">
        <CollectionPageWithSpinner
          isLoading={isLoading}
          match={collectionMatch}
        />
      </Route>
    </div>
  )
}

export default ShopPage
