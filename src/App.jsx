import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage.jsx'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer/Footer.jsx";
import FundPage from "./pages/FundPage.jsx";
import StoriesPage from "./pages/StoriesPage.jsx";

function App() {
    return (
        <HashRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/fund" element={<FundPage/>}/>
                <Route path="/stories" element={<StoriesPage/>}/>
            </Routes>
            <Footer/>
        </HashRouter>
    )
}

export default App
