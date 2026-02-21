import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = () => {
    const [currency, setCurrency] = useState('USD');
    const [selectedAmount, setSelectedAmount] = useState(100);
    const [agreement, setAgreement] = useState(false);

    // Створіть окремі Payment Links у Stripe для кожного варіанту
    const stripeLinks = {
        USD: {
            50: "https://buy.stripe.com/test_50usd",
            100: "https://buy.stripe.com/test_100usd",
            300: "https://buy.stripe.com/test_300usd",
            custom: "https://buy.stripe.com/dRm4gzeUz8KL0X859y9MY03" // ваш лінк з вводом суми
        },
        UAH: {
            50: "https://buy.stripe.com/test_50uah",
            100: "https://buy.stripe.com/test_100uah",
            300: "https://buy.stripe.com/test_300uah",
            custom: "https://buy.stripe.com/test_custom_uah"
        }
        // EUR та GBP додаються за такою ж логікою
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
            <div className="donation__inner"> {/* Оцей блок тепер тримає фон і закруглення */}
                <div className="donation__card">
                    <h2 className="donation__title">Хочу підтримати</h2>

                    <div className="donation__currency-row">
                        {['USD', 'UAH', 'EUR', 'GBP'].map((curr) => (
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
                        {[50, 100, 300].map((val) => (
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
                            <input type="checkbox" className="donation__checkbox" required />
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