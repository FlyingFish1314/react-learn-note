import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty } from 'antd'
import QuestionCard from '@/components/questionCard/QuestionCard'
import styles from '../Common.module.scss'
import ListSearch from '@/components/listSearch/ListSearch'
const { Title } = Typography

const Star: FC = () => {
  useTitle('小龙问卷-星标问卷')

  const [questionList, setQuestionList] = useState([
    {
      _id: 'q1',
      title: '问卷1',
      isPublished: false,
      isStar: true,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    },
    {
      _id: 'q2',
      title: '问卷2',
      isPublished: true,
      isStar: true,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    },
    {
      _id: 'q3',
      title: '问卷3',
      isPublished: false,
      isStar: true,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    }
  ])
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
        {questionList.length === 0 && <Empty description="暂无数据"></Empty>}
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q}></QuestionCard>
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Star
