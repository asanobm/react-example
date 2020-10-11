import { Layout } from 'antd'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ConfigPage from './pages/ConfigPage'
import AppHeader from './components/AppHeader'
import PostsPage from './pages/PostsPage'

const { Content } = Layout

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Content>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/config" component={ConfigPage} />
      </Content>
    </BrowserRouter>
  )
}

export default App
