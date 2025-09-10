import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage.jsx'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <HashRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </HashRouter>
    )
}

export default App
