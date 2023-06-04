import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty, Spin, Pagination } from 'antd'
import QuestionCard from '@/components/questionCard/QuestionCard'
import styles from '../Common.module.scss'
import ListSearch from '@/components/listSearch/ListSearch'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import ListPage from '@/components/listPage/ListPage'
const { Title } = Typography

const Star: FC = () => {
  useTitle('小龙问卷-星标问卷')
  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total = 0 } = data
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin></Spin>
          </div>
        )}
        {!loading && list.length === 0 && (
          <Empty description="暂无数据"></Empty>
        )}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q}></QuestionCard>
          })}
      </div>
      <div className={styles.footer}>
        <ListPage total={total}></ListPage>
      </div>
    </>
  )
}

export default Star
