'use client'
import './Consultation.scss';
import React, { useState } from 'react';
import Image from 'next/image';

function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '' });
      } else {
        throw new Error('Ошибка при отправке');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="consultation-block">
      <div className="consultation-container">
        <div className="consultation-wrapper">
          {/* Блок с контентом и формой */}
          <div className="consultation-content">
            <h1 className="consultation-main-title">Консультация специалиста</h1>
            <h2 className="consultation-title">Давайте обсудим ваши задачи?</h2>
            
            <p className="consultation-description">
                Рассчитаю сроки и стоимость под ключ, предложу готовые и индивидуальные проекты, оптимизирую бюджет без потери качества
            </p>
            
            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-group">
                <label>Имя</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+7 (999) 999-99-99"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Перезвоните мне'}
              </button>

              {submitStatus === 'success' && (
                <p className="form-message success">Спасибо! Мы скоро вам перезвоним</p>
              )}
              {submitStatus === 'error' && (
                <p className="form-message error">Ошибка отправки. Попробуйте еще раз</p>
              )}
            </form>
          </div>

          {/* Блок с изображением и подписью (для всех версий) */}
          <div className="consultation-image-section">
            <div className="consultation-image">
              <Image 
                src="/consultation/orig.webp" 
                alt="Консультация специалиста"
                width={500}
                height={400}
                priority
                className="image"
              />
            </div>
            <div className="manager-info">
              <p className="manager-name">Алина</p>
              <p className="manager-position">Архитектор</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation;