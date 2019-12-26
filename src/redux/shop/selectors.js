import { createSelector } from 'reselect'

export const getShop = state => state.shop

export const getIsShopFetching = state => getShop(state).isFetching

export const getShopCollections = createSelector(
  getShop,
  shop => shop.collections
)

export const getShopCollection = collectionUrlParam =>
  createSelector(
    getShopCollections,
    collections => collections[collectionUrlParam]
  )

export const getShopCollectionsForPreview = createSelector(
  getShopCollections,
  collections => Object.keys(collections).map(key => collections[key])
)
