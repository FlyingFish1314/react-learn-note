import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const UserInfo: FC = () => {
  return (
    <div>
      <Link to="/login">登录</Link>
    </div>
  )
}

export default UserInfo
