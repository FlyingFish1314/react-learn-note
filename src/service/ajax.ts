import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  timeout: 10 * 1000
})

// response 拦截：统一处理 errno 和 msg
instance.interceptors.response.use((res: any) => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData
  console.log(
    '🚀 ~ file: ajax.ts:12 ~ instance.interceptors.response.use ~ data:',
    data
  )

  if (errno !== 0) {
    // 错误提示
    if (msg) {
      message.error(msg)
    }

    throw new Error(msg)
  }

  return data as any
})

export default instance

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
