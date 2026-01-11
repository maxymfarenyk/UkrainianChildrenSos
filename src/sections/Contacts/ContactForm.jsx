import React, { useState } from 'react';
import './ContactForm.css';
import { useLanguage } from '../../context/LanguageContext.jsx';

const ContactForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreement: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Звертаємось до файлу contact.php, який буде лежати в тій же папці на хостингу
            // На час локального тесту змініть на 'http://localhost:8000/contact.php'
            const response = await fetch('/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Дякуємо! Ваше повідомлення надіслано.");
                // Очищуємо форму після успішної відправки
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                    agreement: false
                });
            } else {
                alert("Помилка сервера: " + result.message);
            }
        } catch (error) {
            console.error("Помилка відправки:", error);
            alert("Не вдалося з'єднатися з сервером.");
        }
    };

    return (
        <section className="contact-form">
            <div className="contact-form__inner">
                <div className="contact-form__header">
                    <h2 className="contact-form__title">{t('contact.title')}</h2>
                    <h3 className="contact-form__subtitle">{t('contact.subtitle')}</h3>
                </div>

                <form className="contact-form__body" onSubmit={handleSubmit}>
                    <div className="contact-form__row">
                        <div className="contact-form__group contact-form__group--half">
                            <label>{t('contact.firstName')} <span className="contact-form__required">*</span></label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="contact-form__group contact-form__group--half">
                            <label>{t('contact.lastName')} <span className="contact-form__required">*</span></label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="contact-form__group">
                        <label>Email <span className="contact-form__required">*</span></label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contact-form__group">
                        <label>{t('contact.phone')}</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contact-form__group">
                        <label>{t('contact.message')} <span className="contact-form__required">*</span></label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contact-form__footer">
                        <p className="contact-form__required-info"><span className="contact-form__required">*</span> {t('contact.requiredFields')}</p>
                        <label className="contact-form__checkbox-label">
                            <input
                                type="checkbox"
                                name="agreement"
                                required
                                checked={formData.agreement}
                                onChange={handleChange}
                            />
                            <span>{t('contact.privacyPolicy')}</span>
                        </label>
                        <button type="submit" className="contact-form__submit-btn">
                            {t('contact.send')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;