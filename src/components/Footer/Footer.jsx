import React from 'react'
import './Footer.css'
import { useLanguage } from '../../context/LanguageContext.jsx'

const Footer = () => {
    const { language, setLanguage, t } = useLanguage()

    return (
        <footer className="site-footer">
            <div className="footer-content">

                {/* Контакти */}
                <div className="footer-col">
                    <h3 className="footer-title">{t('header.contacts')}</h3>
                    <ul className="footer-list">
                        <li>📧 help@gmail.com</li>
                        <li>📞 +38 999 999 34 44</li>
                        <li>📍 Лондон</li>
                    </ul>

                    <div className="footer-social">
                        <span>📸</span>
                        <span>📘</span>
                    </div>

                    <a className="donate-btn" href="#help">{t('header.donate')}</a>

                    <ul className="footer-links">
                        <li>{t('footer.privacy')}</li>
                        <li>{t('footer.offer')}</li>
                        <li>{t('footer.terms')}</li>
                        <li>{t('footer.tax')}</li>
                    </ul>
                </div>

                {/* Корисні посилання */}
                <div className="footer-col">
                    <h3 className="footer-title">{t('footer.links')}</h3>
                    <ul className="footer-list">
                        <li><a href="#fund">{t('header.fund')}</a></li>
                        <li><a href="#projects">{t('header.projects')}</a></li>
                        <li><a href="#stories">{t('header.stories')}</a></li>
                        <li><a href="#contacts">{t('header.contacts')}</a></li>
                    </ul>

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
                </div>

                {/* Заглушки справа */}
                <div className="footer-placeholder">[Тут буде прапор]</div>
                <div className="footer-placeholder">[Тут буде малюнок]</div>
            </div>
        </footer>
    )
}

export default Footer

