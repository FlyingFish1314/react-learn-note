import React, { FC, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import QuestionCard from '@/components/questionCard/QuestionCard'
import styles from './List.module.scss'
const List: FC = () => {
  // const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams.get('keyword'))
  useTitle('小龙问卷-我的问卷')
  const [questionList, setQuestionList] = useState([
    {
      _id: 'q1',
      title: '问卷1',
      isPublished: false,
      isStart: false,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    },
    {
      _id: 'q2',
      title: '问卷2',
      isPublished: true,
      isStart: false,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    },
    {
      _id: 'q3',
      title: '问卷3',
      isPublished: false,
      isStart: false,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    },
    {
      _id: 'q4',
      title: '问卷4',
      isPublished: true,
      isStart: false,
      answerCount: 5,
      createdAt: '3月10日 13:23'
    }
  ])
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
          <div className={styles.right}>(搜索)</div>
        </div>
      </div>
      <div className={styles.content}>
        {questionList.map((q) => {
          const { _id } = q
          return <QuestionCard key={_id} {...q}></QuestionCard>
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default List
