import React, { FC } from 'react'
import styles from './QuestionCadr.module.scss'
import { Space, Button, Tag, Divider, Popconfirm, Modal, message } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'

type PropsType = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}
const { confirm } = Modal
const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props
  const nav = useNavigate()
  function duplicate() {
    console.log('copy')
    message.success('复制成功')
  }

  function del() {
    confirm({
      title: '确定删除该问卷？',
      icon: <ExclamationCircleOutlined></ExclamationCircleOutlined>,
      okText: '确定',
      cancelText: '取消',
      onOk: () => message.success('删除成功')
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }}></StarOutlined>}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          {isPublished ? (
            <Tag color="processing">已发布</Tag>
          ) : (
            <Tag>未发布</Tag>
          )}
          <span>答卷：{answerCount}</span>
          <span>{createdAt}</span>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }}> </Divider>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined></EditOutlined>}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined></LineChartOutlined>}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              icon={<StarOutlined></StarOutlined>}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              {isStar ? '取消星标' : '星标'}
            </Button>
            <Popconfirm
              title="确定复制该问卷？"
              okText="确定"
              cancelText="取消"
              onConfirm={duplicate}
            >
              <Button
                icon={<CopyOutlined></CopyOutlined>}
                type="text"
                size="small"
              >
                复制
              </Button>
            </Popconfirm>
            <Button
              icon={<DeleteOutlined></DeleteOutlined>}
              type="text"
              size="small"
              onClick={del}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
