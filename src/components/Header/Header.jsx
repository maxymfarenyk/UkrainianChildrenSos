import React, {useState} from 'react'
import './Header.css'
import {useLanguage} from '../../context/LanguageContext.jsx'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    const {language, setLanguage, t} = useLanguage()

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="site-header">
            <div className="header-content">
                <div className="brand">
                    <div className="brand-title">
                        <Link to="/" aria-label="Go to home" className="brand-link">
                            <img src={'/assets/images/logo.png'} alt="Logo"/>
                        </Link>
                    </div>
                </div>

                <nav className="nav">
                    <NavLink
                        to="/fund"
                        className={({isActive}) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        {t('header.fund')}
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({isActive}) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        {t('header.projects')}
                    </NavLink>
                    <NavLink
                        to="/stories"
                        className={({isActive}) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        {t('header.stories')}
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className={({isActive}) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        {t('header.contacts')}
                    </NavLink>
                </nav>

                <div className="actions">
                    <div className="lang">
                        <button
                            className={`lang-btn ${language === 'uk' ? 'active' : ''}`}
                            type="button"
                            onClick={() => setLanguage('uk')}
                        >
                            {t('header.ua')}
                        </button>
                        <span className="lang-sep">|</span>
                        <button
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            type="button"
                            onClick={() => setLanguage('en')}
                        >
                            {t('header.en')}
                        </button>
                    </div>
                    <span className="sep"></span>
                    <NavLink to="/help" className="donate-btn" >
                        {t('header.donate')}
                    </NavLink>
                    <button
                        className={`menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
                        aria-label="Toggle navigation"
                        onClick={toggleMenu} // <--- ОБРОБНИК КЛІКУ
                    >
                        {/* Іконка буде стилізована в CSS */}
                        <span className="hamburger-icon"></span>
                    </button>
                </div>
            </div>
            <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
                <nav className="mobile-nav">
                    {/* При кліку закриваємо меню */}
                    <NavLink to="/fund" onClick={toggleMenu}>{t('header.fund')}</NavLink>
                    <NavLink to="/projects" onClick={toggleMenu}>{t('header.projects')}</NavLink>
                    <NavLink to="/stories" onClick={toggleMenu}>{t('header.stories')}</NavLink>
                    <NavLink to="/contacts" onClick={toggleMenu}>{t('header.contacts')}</NavLink>
                </nav>

                {/* Перемикач мови для мобільного меню */}
                <div className="mobile-lang">
                    <button
                        className={`mobile-lang-btn ${language === 'uk' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setLanguage('uk')}
                    >
                        {t('header.ua')}
                    </button>
                    <span className="mobile-lang-sep">|</span>
                    <button
                        className={`mobile-lang-btn ${language === 'en' ? 'active' : ''}`}
                        type="button"
                        onClick={() => setLanguage('en')}
                    >
                        {t('header.en')}
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header
