import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes,Route} from 'react-router-dom'
import Recognition from './pages/Recognition'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
      <div>
          <Layout>
            <Routes>
              <Route path="/" element={<Recognition/>}/>
            </Routes>
          </Layout>       
      </div>
    </>
  )
}

export default App
