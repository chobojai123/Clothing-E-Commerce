import React from 'react'
import { connect } from 'react-redux'

import { addCartItem } from '../../redux/cart/actions'
import CustomButton from '../custom-button/index'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addCartItem }) => {
  const { imageUrl, name, price } = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  )
}

export default connect(null, { addCartItem })(CollectionItem)
