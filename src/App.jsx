import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <HashRouter>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
          </Routes>
      </HashRouter>
  )
}

export default App
