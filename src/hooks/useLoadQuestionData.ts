import { getQuestionService } from '@/service/question'
// import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'

import { useParams } from 'react-router-dom'

function useLoadQuestionData() {
  const { id = '' } = useParams()
  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getQuestionService(id)
  //       setQuestionData(data)
  //       setLoading(false)
  //     } catch (error) {
  //       console.log('🚀 ~ file: index.tsx:12 ~ fetchData ~ error:', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  async function load() {
    const data = await getQuestionService(id)
    return data
  }
  const { loading, data, error } = useRequest(load)

  return { loading, data, error }
}

export default useLoadQuestionData
