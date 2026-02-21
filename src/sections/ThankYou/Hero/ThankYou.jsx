import React from 'react';
import './ThankYou.css';
import { useLanguage } from '../../../context/LanguageContext.jsx';
import UaFlagIcon from "../../../components/SvgIcons/UaFlagIcon.jsx";
import BoyIcon from "../../../components/SvgIcons/BoyIcon.jsx";
import SunIcon from "../../../components/SvgIcons/SunIcon.jsx";
import {Link} from "react-router-dom";

const ThankYou = () => {
    const { t } = useLanguage();

    return (
        <section className="thankyou">
            <div className="thankyou__inner">
                <div className="thankyou__content">
                    <h1 className="thankyou__title">
                        {t('thankyou.title')}
                    </h1>
                    <h3 className="thankyou__subtitle">
                        {t('thankyou.subtitle')}
                    </h3>
                    <Link to="/" aria-label="Go to home" className="donate-btn banner">
                        {t('thankyou.home')}
                    </Link>
                </div>

                <div className="thankyou__decor" aria-hidden="true">
                    <div className="decor__flag">
                        <UaFlagIcon/>
                    </div>
                    <div className="decor__boy">
                        <BoyIcon/>
                    </div>
                    <div className="decor__sun">
                        <SunIcon/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThankYou;
