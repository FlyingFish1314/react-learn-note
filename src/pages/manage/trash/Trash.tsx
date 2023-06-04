import React, { FC, useState } from 'react'
import {
  Typography,
  Tag,
  Empty,
  Table,
  Space,
  Button,
  Modal,
  message,
  Spin
} from 'antd'
import { useTitle } from 'ahooks'
import styles from '../Common.module.scss'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import ListSearch from '@/components/listSearch/ListSearch'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import ListPage from '@/components/listPage/ListPage'

const { Title } = Typography
const { confirm } = Modal

const Trash: FC = () => {
  useTitle('小龙问卷-回收站')
  const { data = {}, loading } = useLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data
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
        dataSource={list}
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
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin></Spin>
          </div>
        )}
        {/* 问卷列表 */}
        {!loading && list.length === 0 && (
          <Empty description="暂无数据"></Empty>
        )}
        {list.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>
        <ListPage total={total}></ListPage>
      </div>
    </>
  )
}

export default Trash
