import { getQuestionService } from '@/services/question'
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Edit: FC = () => {
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuestionService('1')
        console.log('🚀 ~ file: index.tsx:9 ~ useEffect ~ data:', data)
      } catch (error) {
        console.log('🚀 ~ file: index.tsx:12 ~ fetchData ~ error:', error)
      }
    }
    fetchData()
  }, [])

  return <div>edit{id}</div>
}

export default Edit
