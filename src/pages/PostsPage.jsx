import React, { useEffect, useState } from 'react'

import { Layout, Table } from 'antd'

const PostsPage = () => {
  const { Content } = Layout
  const [posts, setPosts] = useState()

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
  ]

  useEffect(() => {
    const getPosts = async () => {
      await fetch('http://localhost:3001/api/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data))
    }
    getPosts()
  }, [])

  return (
    <Content>
      <Table dataSource={posts} columns={columns} rowKey="id" />
    </Content>
  )
}

export default PostsPage
