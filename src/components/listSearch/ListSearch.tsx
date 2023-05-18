import React, { FC, useState, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_LEY } from '@/constant'

const { Search } = Input
const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [value, setValue] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  // 获取url参数 并设置到 input value
  const [searchParams] = useSearchParams()
  useEffect(() => {
    // 每当参数改变都会执行
    const curVal = searchParams.get(LIST_SEARCH_PARAM_LEY) || ''
    setValue(curVal)
  }, [searchParams])
  function handleSearch(value: string) {
    console.log('🚀 ~ file: ListSearch.tsx:12 ~ handleSearch ~ value:', value)
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_LEY}=${value}`
    })
  }
  return (
    <Search
      size="large"
      allowClear
      placeholder="输入关键字"
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '260px' }}
    ></Search>
  )
}

export default ListSearch
