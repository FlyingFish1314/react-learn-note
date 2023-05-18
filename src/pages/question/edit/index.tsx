import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
const Edit: FC = () => {
  const { id } = useParams()
  return <div>edit{id}</div>
}

export default Edit
