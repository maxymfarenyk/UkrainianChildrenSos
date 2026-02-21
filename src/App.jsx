import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage.jsx'
import {HashRouter, Routes, Route} from 'react-router-dom'
import FundPage from "./pages/FundPage.jsx";
import StoriesPage from "./pages/StoriesPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import HelpPage from "./pages/HelpPage.jsx";

function App() {
    return (
        <HashRouter>
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/fund" element={<FundPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/stories" element={<StoriesPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/thankyou" element={<ThankYouPage/>}/>
                <Route path="/help" element={<HelpPage/>}/>
            </Routes>
            <Footer/>
        </HashRouter>
    )
}

export default App
