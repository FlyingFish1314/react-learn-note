import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import styles from './Home.module.scss'
// import axios from 'axios'
// import '@/_mock/index'
const { Title, Paragraph } = Typography
const Home: FC = () => {
  const nav = useNavigate()

  useEffect(() => {
    // fetch('/api/test')
    //   .then((res) => res.json())
    //   .then((data) => console.log('fetch', data))
    // mock.js只能截止XMLHTPRequest，不能劫持feth
    // axios.get('/api/test').then((res: any) => {
    //   console.log(res)
    // })
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷100份，发布问卷90份，收到答卷100份</Paragraph>
        <div>
          <Button type="primary" onClick={() => nav('/manage/list')}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
