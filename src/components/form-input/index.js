import React from 'react'
import * as PropTypes from 'prop-types'
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles'

const FormInput = ({
  handleOnChange = () => {},
  label = '',
  ...otherProps
}) => (
  <GroupContainer>
    <FormInputContainer onChange={handleOnChange} {...otherProps} />
    {label ? (
      <FormInputLabel
        className={otherProps.value.length ? 'shrink' : ''}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
)

FormInput.propTypes = {
  handleOnChange: PropTypes.func
}

export default FormInput
