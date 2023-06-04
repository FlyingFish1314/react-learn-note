import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { getQuestionListService } from '@/service/question'
import { LIST_SEARCH_PARAM_LEY } from '@/constant'

type OptionType = {
  isStar: boolean
  isDeleted: boolean
}

//useEffect
function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar = false, isDeleted = false } = opt
  const [searchParams] = useSearchParams()
  console.log('keyword', searchParams.get('keyword'))
  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_LEY) || ''

      const data = await getQuestionListService({ keyword, isStar, isDeleted })
      return data
    },
    {
      refreshDeps: [searchParams] //刷新依赖项
    }
  )
  return { data, loading, error }
}

export default useLoadQuestionListData
