import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Introduction from './pages/Introduction'
import Authentication from './pages/Authentication'
import LiveDemos from './pages/LiveDemos'
import CodeExamples from './pages/CodeExamples'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/live-demos" element={<LiveDemos />} />
          <Route path="/code-examples" element={<CodeExamples />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
