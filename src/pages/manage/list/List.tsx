import React, { FC, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { Typography } from 'antd'
import { useTitle } from 'ahooks'
import QuestionCard from '@/components/questionCard/QuestionCard'
import styles from '../Common.module.scss'

const { Title } = Typography
const List: FC = () => {
  // const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams.get('keyword'))
  useTitle('小龙问卷-我的问卷')
  const [questionList, setQuestionList] = useState([
    {
      _id: 'q1',
      title: '问卷1',
      isPublished: false,
      isStar: false,
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
      isStar: false,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    },
    {
      _id: 'q4',
      title: '问卷4',
      isPublished: true,
      isStar: true,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    }
  ])
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q}></QuestionCard>
          })}
      </div>
      <div className={styles.footer}>加载更多</div>
    </>
  )
}

export default List
