import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [captainData , setCaptainData] = useState('')
  
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      setCaptainData({
        fullName:{
          firstName: firstName,
          lastName: lastName
        },
        password: password,
        email: email
      })
      setEmail('')
      setPassword('')
      setFirstName('')  
      setLastName('')
    }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
    <div>
        <img className ='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg"/>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>

          <h3 className='text-lg w-full font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 px-4 py-2 border  text-lg placeholder:text-base'
              type="text"
              placeholder='first name'
            />

            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 px-4 py-2 border  text-lg placeholder:text-base'
              type="text"
              placeholder='last name'
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-6  px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-[#eeeeee] mb-6 px-4 py-2 border w-full text-lg placeholder:text-base'
          type="password"
          placeholder='password'
          />

          <button
          className='bg-[#111] text-white font-semibold mb-3  px-4 py-2  w-full text-lg placeholder:text-base'
          >Login</button>

          <p className='text-center'>
          Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link> 
          </p>
        </form>
    </div> 

    <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.
      </p>
    </div>
    </div>
  )
}

export default CaptainSignup