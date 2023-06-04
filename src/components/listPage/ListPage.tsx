import React, { FC, useState, useEffect } from 'react'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'
import {
  LIST_PAGE_SIZE_DEFAULT,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY
} from '@/constant'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

type PropsType = {
  total: number
}

const ListPage: FC<PropsType> = (props: PropsType) => {
  const { total = 10 } = props
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE_DEFAULT)

  // 从url中获取page pageSize,通过到分页组件中
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const page = +(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
    setCurrent(page)
    const pageSize =
      +(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') ||
      LIST_PAGE_SIZE_DEFAULT
    setPageSize(pageSize)
  }, [searchParams])

  // page ,pageSize该表跳转页面
  const nav = useNavigate()
  const { pathname } = useLocation()
  const handlePageChange: PaginationProps['onChange'] = (page, pageSize) => {
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString())
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString())
    nav({
      pathname,
      search: searchParams.toString()
    })
  }
  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={handlePageChange}
    ></Pagination>
  )
}

export default ListPage
