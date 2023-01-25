import { useState } from 'react';
import {toast} from 'react-toastify';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

function SignIn () {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if(userCredential.user) {
        navigate('/')
      }

    } catch (error) {
      toast.error('Bad User Credentials')
    } 
  }


  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Welcome Back !
          </p>
        </header>
        <form onSubmit={onSubmit}>
          <input type="email"
            className="emailInput"
            placeholder="Email"
            id='email'
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
                type={showPassword ? 'text' : 'password'} 
                className='passwordInput'
                placeholder="Password"
                id='password'
                value={password}
                onChange={onChange}
            />

            <img 
              src={visibilityIcon}
              alt="show password"
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
              
            />
          </div>
          <Link to='/forgot-password'
          className='forgotPasswordLink'>
              FORGOT PASSWORD
          </Link>

          <div className="signInBar">
            <p className="signInText">
              Sign In
            </p>
            <button className="signInButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>

        <OAuth />
        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>
      <div>
        <h1>CSS ERROR Not ENOUGH SPACE FOR SIGN UP INSTEAD</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam commodi molestiae qui minus aliquid, nulla id distinctio necessitatibus placeat voluptas cupiditate alias quas doloribus nihil excepturi, facilis maxime, voluptates mollitia?

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas porro enim reprehenderit nihil tempore rerum, id pariatur at, fugit dolores unde asperiores, expedita vero nostrum! Eligendi repellendus eveniet voluptate obcaecati?
        </p>
      </div>
    </>
  )
}

export default SignIn