import React from 'react'
import { useSelector } from 'react-redux'
import { getShopCollectionsForPreview } from '../../redux/shop/selectors'
import CollectionPreview from '../../components/collection-preview/index'

import './collections-overview.styles.scss'

const CollectionsOverview = () => {
  const collections = useSelector(getShopCollectionsForPreview)
  return (
    <div className="collections-overview">
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  )
}

export default CollectionsOverview
