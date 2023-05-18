import React, { FC } from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
const { Title } = Typography
const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Space>
          <Title level={2}>
            <FormOutlined></FormOutlined>
          </Title>
          <Title level={2}>小龙问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
