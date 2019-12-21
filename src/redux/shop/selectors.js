import { createSelector } from 'reselect'

const collectionIdMap = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

export const getShop = state => state.shop

export const getShopCollections = createSelector(
  getShop,
  shop => shop.collections
)

export const getShopCollection = collectionUrlParam =>
  createSelector(getShopCollections, collections =>
    collections.find(
      ({ id }) => id === collectionIdMap[collectionUrlParam]
    )
  )
