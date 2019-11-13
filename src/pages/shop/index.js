import React, { useState } from 'react'
import { SHOP_DATA } from './fakeData'
import CollectionPreview from '../../components/collection-preview/index'

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA)
  return (
    <div className="shop-page">
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  )
}

export default ShopPage
