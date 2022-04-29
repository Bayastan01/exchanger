import React from 'react'
import AuthComponent from '../components/AuthComponent'

function WelcomeScreen() {
  const is_authorized = true;
  const user_type = 'Email';
  return (
    <>
      {is_authorized ? (
                <AuthComponent/>
            ): user_type === 'Email'
      }
    </>
  )
}

export default WelcomeScreen
