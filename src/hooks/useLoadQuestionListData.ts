import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { getQuestionListService } from '@/service/question'
import {
  LIST_SEARCH_PARAM_LEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE_DEFAULT
} from '@/constant'

type OptionType = {
  isStar: boolean
  isDeleted: boolean
}

//useEffect
function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar = false, isDeleted = false } = opt
  const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams.get('keyword'))
  const { data, loading, error, refresh } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_LEY) || ''
      const page = +(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
      const pageSize =
        +(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') ||
        LIST_PAGE_SIZE_DEFAULT
      const data = await getQuestionListService({
        keyword,
        isStar,
        isDeleted,
        page,
        pageSize
      })
      return data
    },
    {
      refreshDeps: [searchParams] //刷新依赖项
    }
  )
  return { data, loading, error, refresh }
}

export default useLoadQuestionListData
