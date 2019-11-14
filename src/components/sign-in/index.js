import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import FormInput from '../form-input'
import CustomButton from '../custom-button'

import './sign-in.style.scss'

const SignIn = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = event => {
    event.preventDefault()
    setFormState({ email: '', password: '' })
  }

  const handleOnChange = event => {
    const { value, name } = event.target
    setFormState({ ...formState, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={formState.email}
          handleOnChange={handleOnChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={formState.password}
          handleOnChange={handleOnChange}
          required
        />

        <CustomButton type="submit">SIGN IN</CustomButton>
      </form>
    </div>
  )
}

export default SignIn
