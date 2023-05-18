import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '@/components/Logo/logo'
import UserInfo from '../components/userInfo/UserInfo'
const { Header, Content, Footer } = Layout
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo></Logo>
        </div>
        <div className={styles.right}>
          <UserInfo></UserInfo>
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet></Outlet>
      </Content>
      <Footer className={styles.footer}>MainLayout footer</Footer>
    </Layout>
  )
}

export default MainLayout
