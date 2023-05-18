import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login: FC = () => {
  const nav = useNavigate()

  return (
    <div>
      <p>login</p>
      <button onClick={() => nav(-1)}>返回</button>
      <Link to="/register">注册</Link>
    </div>
  )
}

export default Login
