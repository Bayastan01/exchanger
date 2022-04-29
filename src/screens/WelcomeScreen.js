import React from 'react'
import AuthComponent from '../components/AuthComponent'
import HomeScreen from "./HomeScreen";

function WelcomeScreen() {
  const is_authorized = true;
  const user_type = 'Email';
  return (
    <>
      {is_authorized ? (
                <HomeScreen/>
            ): user_type === 'Email'
      }
    </>
  )
}

export default WelcomeScreen
