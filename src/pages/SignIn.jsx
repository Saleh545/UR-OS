import React from 'react'
import '../styles/pages/signIn.scss'
import signImg from '../assets/auth-v2-login-illustration-dark.png';

const SignIn = () => {
  return (
    <>
    <div className="signin">
      <div className="signin__container">

        {/* SOL HİSSƏ */}
        <div className="signin__preview">

          

            {/* Illustration */}
            <img
              src={signImg}
              alt="Login Illustration"
              className="signin__image"
            />

          </div>

        {/* SAĞ HİSSƏ */}
        <div className="signin__form">
          <h1>Welcome to UR-OS 👋</h1>
          <p className="subtitle">Please sign in to your account</p>

         

          <form>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="admin@demo.com" />
            </div>

            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit">Login</button>
          </form>

          <p className="register">
            New here? <a href="#">Create an account</a>
          </p>
        </div>

      </div>
    </div>
    </>
  )
}

export default SignIn
