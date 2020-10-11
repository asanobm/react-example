import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import AppMenus from '../config/AppMenus'

const AppHeader = () => {
  const { Header } = Layout
  const { Item } = Menu
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        {AppMenus.map((item) => (
          <Item key={item.to}>
            <Link to={item.to}>{item.name}</Link>
          </Item>
        ))}
      </Menu>
    </Header>
  )
}

export default AppHeader
