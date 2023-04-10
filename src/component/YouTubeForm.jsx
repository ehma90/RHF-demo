import React from 'react'
import {useForm} from "react-hook-form"


function YouTubeForm() {
  const form = useForm()
  const {register} = form
  const {name, ref, onChange, onBlur} = register("username")
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' name={name} ref={ref} onChange={onChange} onBlur={onBlur} />

        <label htmlFor='email'>Email</label>
        <input type="email" id='email' name='email' />

        <lable htmlFor='channel'>Channel</lable>
        <input type="text" id='channel' name='channel'/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default YouTubeForm