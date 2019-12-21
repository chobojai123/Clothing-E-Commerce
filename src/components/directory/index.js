import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from '../menu-item/index'
import { getDirectorySections } from '../../redux/directory/selectors'

import './directory.styles.scss'

const Directory = () => {
  const directory = useSelector(getDirectorySections)
  return (
    <div className="directory-menu">
      {directory.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  )
}

export default Directory
