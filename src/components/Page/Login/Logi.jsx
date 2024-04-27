import React, { useState } from 'react'
import './Login.css'
import img from '../../../assets/Img/1 copy.png'
import axios from '../../Api/Api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Logi = () => {
  const [username, setusername] = useState('atuny0')
  const [password, setpassword] = useState('9uQFF1Lh')
 
  let navigate = useNavigate();

  const handelogin = (e) => {
    e.preventDefault()

    let user = {
      username,
      password,
    }

    axios
      .post("/auth/login", user)
      .then(res => {
        console.log(res.data.token)
        toast.dismiss("welcome")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate('/admin')
       
        })
      .catch(err => {
        console.log(err);
        toast.error('xato bor')
      })
      .finally(() => { })

  }

  return (
    < >
      <div className='header_red'>
        <div className='container'>
          <div className='header_red_ptext'>
            <p>Login</p>
            <p>Home - Login</p>
          </div>
        </div>
      </div>

      <div className='container'>
        <form onSubmit={handelogin} className='login_form'>
          <div className='Logo_login'><img src={img} alt="" /></div>
          <p>Email Address*</p>
          <input required value={username} onChange={e => setusername(e.target.value)} type="text" placeholder='Enter Your Email' />
          <p>Password*</p>
          <input required value={password} onChange={e => setpassword(e.target.value)} type="password" placeholder='Enter Your password' />
          <div className='wrapper_chekbox'>
            <input type="checkbox" name="" id="" />
            <p>Remember Me</p>
            <div style={{ marginLeft: '40px' }}>
              <p>Forgot Password?</p>
            </div>
          </div>
          <div className='btn_wrapper'>
            <button>Submit</button>
            <p>Signup?</p>
          </div>
        </form>
      </div>

    </>
  )
}

export default Logi;