import React from 'react'
import * as PropTypes from 'prop-types'
import './form-input.styles.scss'

const FormInput = ({
  handleOnChange = () => {},
  label = '',
  ...otherProps
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleOnChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

FormInput.propTypes = {
  handleOnChange: PropTypes.func
}

export default FormInput
