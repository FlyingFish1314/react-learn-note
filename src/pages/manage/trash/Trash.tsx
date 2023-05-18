import React, { FC, useState } from 'react'
import {
  Typography,
  Tag,
  Empty,
  Table,
  Space,
  Button,
  Modal,
  message
} from 'antd'
import { useTitle } from 'ahooks'
import styles from '../Common.module.scss'
import { ExclamationCircleOutlined } from '@ant-design/icons'
const { Title } = Typography
const rawQuestionList = [
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
]
const { confirm } = Modal

const Trash: FC = () => {
  useTitle('小龙问卷-回收站')
  const [questionList, setQuestionList] = useState(rawQuestionList)
  // 记录选中的 id
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  function del() {
    confirm({
      title: '确认彻底删除该问卷？',
      icon: <ExclamationCircleOutlined></ExclamationCircleOutlined>,
      content: '删除后不可找回',
      onOk: () => message.success('删除成功')
    })
  }
  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title'
      // key: 'title', // 循环列的 key ，它会默认取 dataIndex 的值
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        )
      }
    },
    {
      title: '答卷',
      dataIndex: 'answerCount'
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt'
    }
  ]
  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        rowKey={(q) => q._id}
        pagination={false}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            setSelectedIds(selectedRowKeys as string[])
          }
        }}
      ></Table>
    </>
  )
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty description="暂无数据"></Empty>}
        {questionList.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Trash
