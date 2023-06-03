import { getQuestionService } from '@/service/question'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function useLoadQuestionData() {
  const { id = '' } = useParams()
  const [loading, setLoading] = useState(true)
  const [questionData, setQuestionData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuestionService(id)
        setQuestionData(data)
        setLoading(false)
      } catch (error) {
        console.log('🚀 ~ file: index.tsx:12 ~ fetchData ~ error:', error)
      }
    }
    fetchData()
  }, [])

  return { loading, questionData }
}

export default useLoadQuestionData
