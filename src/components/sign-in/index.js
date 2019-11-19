import React, { useState } from 'react'
import FormInput from '../form-input'
import CustomButton from '../custom-button'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.style.scss'

const SignIn = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = formState

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setFormState({ email: '', password: '' })
    } catch (e) {
      console.error(e)
    }
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
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
