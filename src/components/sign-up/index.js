import React, { useState } from 'react'
import FormInput from '../form-input/'
import CustomButton from '../custom-button'
import {
  auth,
  createUserProfileDocument
} from '../../firebase/firebase.utils'
import './sign-up.style.scss'

const SignUp = () => {
  const [formState, setFormState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const {
    displayName = '',
    email = '',
    password = '',
    confirmPassword = ''
  } = formState

  const handleSubmit = async event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      return alert("passwords don't match")
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      setFormState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnChange = event => {
    const { value, name } = event.target
    setFormState({ ...formState, [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="name"
          name="displayName"
          value={displayName}
          onChange={handleOnChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
