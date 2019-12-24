import React from 'react'
import { connect } from 'react-redux'

import { addCartItem } from '../../redux/cart/actions'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ item, addCartItem }) => {
  const { imageUrl, name, price } = item
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addCartItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

export default connect(null, { addCartItem })(CollectionItem)
