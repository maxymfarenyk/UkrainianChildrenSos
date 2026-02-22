import React, { useState, useEffect } from 'react';
import './DonationForm.css';
import { useLanguage } from '../../context/LanguageContext.jsx';

const DonationForm = () => {
    /* const { t } = useLanguage();  Language support will be added later*/
    const [currency, setCurrency] = useState('USD');
    const [selectedAmount, setSelectedAmount] = useState(50);
    const [agreement, setAgreement] = useState(false);

    // 1. Конфігурація сум для кожної валюти
    const amountsConfig = {
        USD: [50, 100, 300],
        UAH: [300, 500, 1000],
        EUR: [50, 100, 300],
        GBP: [50, 100, 300]
    };

    // 2. Скидаємо обрану суму на першу зі списку при зміні валюти
    useEffect(() => {
        setSelectedAmount(amountsConfig[currency][0]);
    }, [currency]);

    const stripeLinks = {
        USD: {
            50: "https://buy.stripe.com/7sY14nfYD1ijfS29pO9MY01", /* Should be changed */
            100: "https://buy.stripe.com/7sY14nfYD1ijfS29pO9MY01", /* Should be changed */
            300: "https://buy.stripe.com/7sY14nfYD1ijfS29pO9MY01", /* Should be changed */
            custom: "https://buy.stripe.com/7sY14nfYD1ijfS29pO9MY01"
        },
        UAH: {
            300: "https://buy.stripe.com/dRm4gzeUz8KL0X859y9MY03", /* Should be changed */
            500: "https://buy.stripe.com/dRm4gzeUz8KL0X859y9MY03", /* Should be changed */
            1000: "https://buy.stripe.com/dRm4gzeUz8KL0X859y9MY03", /* Should be changed */
            custom: "https://buy.stripe.com/dRm4gzeUz8KL0X859y9MY03"
        },
        EUR: {
            300: "https://buy.stripe.com/9B6fZh5jZ5yzdJUdG49MY02", /* Should be changed */
            500: "https://buy.stripe.com/9B6fZh5jZ5yzdJUdG49MY02", /* Should be changed */
            1000: "https://buy.stripe.com/9B6fZh5jZ5yzdJUdG49MY02", /* Should be changed */
            custom: "https://buy.stripe.com/9B6fZh5jZ5yzdJUdG49MY02"
        },
        GBP: {
            300: "https://buy.stripe.com/3csaHKa0ZfkUdtScMM", /* Should be changed */
            500: "https://buy.stripe.com/3csaHKa0ZfkUdtScMM", /* Should be changed */
            1000: "https://buy.stripe.com/3csaHKa0ZfkUdtScMM", /* Should be changed */
            custom: "https://buy.stripe.com/3csaHKa0ZfkUdtScMM"
        }
    };

    const handleDonate = () => {
        if (!agreement) {
            alert("Будь ласка, ознайомтеся з Публічним договором");
            return;
        }
        const currentCurrencyLinks = stripeLinks[currency] || stripeLinks['USD'];
        const finalUrl = currentCurrencyLinks[selectedAmount] || currentCurrencyLinks['custom'];
        window.location.href = finalUrl;
    };

    return (
        <section className="donation">
            <div className="donation__inner">
                <div className="donation__card">
                    <h2 className="donation__title">Хочу підтримати</h2>

                    <div className="donation__currency-row">
                        {Object.keys(amountsConfig).map((curr) => (
                            <button
                                key={curr}
                                className={`donation__currency-btn ${currency === curr ? 'active' : ''}`}
                                onClick={() => setCurrency(curr)}
                            >
                                {curr}
                            </button>
                        ))}
                    </div>

                    <h3 className="donation__subtitle">Виберіть суму внеску</h3>

                    <div className="donation__amount-row">
                        {/* 3. Рендеримо кнопки на основі обраної валюти */}
                        {amountsConfig[currency].map((val) => (
                            <button
                                key={val}
                                className={`donation__amount-btn ${selectedAmount === val ? 'active' : ''}`}
                                onClick={() => setSelectedAmount(val)}
                            >
                                {val} {currency}
                            </button>
                        ))}
                        <button
                            className={`donation__amount-btn ${selectedAmount === 'custom' ? 'active' : ''}`}
                            onClick={() => setSelectedAmount('custom')}
                        >
                            ...
                        </button>
                    </div>

                    <div className="donation__footer">
                        <label className="donation__agreement">
                            <input
                                type="checkbox"
                                className="donation__checkbox-hidden"
                                checked={agreement}
                                onChange={(e) => setAgreement(e.target.checked)}
                                required
                            />
                            <span className="donation__custom-checkbox"></span>
                            <span className="donation__agreement-text">
                                Я ознайомився/лася з Публічним договором (офертою) про надання благодійної пожертви та погоджуюся з тим, що введена мною особиста інформація буде використана згідно з Політикою конфіденційності Фонду
                            </span>
                        </label>
                        <button className="donation__submit-btn" onClick={handleDonate}>
                            Зробити внесок
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationForm;