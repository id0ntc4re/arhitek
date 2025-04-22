"use client";

import { useState } from 'react';
import styles from './QuizComponent.module.scss';

const QuizComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedFloors, setSelectedFloors] = useState(null);
  const [dimensions, setDimensions] = useState({ length: '', width: '' });
  const [selectedTiming, setSelectedTiming] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const technologies = [
    { id: 'brus', name: 'Брус', image: '/Quiz/brus.webp' },
    { id: 'kleeniy-brus', name: 'Клееный брус', image: '/Quiz/kleenbrus.webp' },
    { id: 'gazobeton', name: 'Газобетон', image: '/Quiz/gazobeton.webp' },
    { id: 'kirpich', name: 'Кирпич', image: '/Quiz/kirpich.webp' },
    { id: 'zhelezobeton', name: 'Сборно-монолитный железобетон', image: '/Quiz/monolit.webp' },
    { id: 'fahverk', name: 'Фахверковая технология', image: '/Quiz/fahwerk.webp' },
  ];

  const floorOptions = [
    { id: '1', name: '1 Этаж' },
    { id: '2', name: '2 Этажа' },
    { id: '2-mansarda', name: '2 Этажа (второй мансардный этаж)' },
    { id: 'with-basement', name: 'С цокольным этажом' },
    { id: 'no-basement', name: 'Без цокольного этажа' },
  ];

  const timingOptions = [
    { id: 'this-month', name: 'В этом месяце' },
    { id: 'next-month', name: 'Через месяц' },
    { id: 'few-months', name: 'Через несколько месяцев' },
    { id: 'next-year', name: 'В следующем году' },
  ];

  const handleNext = () => {
    if (currentStep < 4 && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = (step) => {
    switch (step) {
      case 0:
        return selectedTech !== null;
      case 1:
        return selectedFloors !== null;
      case 2:
        return dimensions.length && dimensions.width && 
               parseFloat(dimensions.length) > 0 && 
               parseFloat(dimensions.width) > 0;
      case 3:
        return selectedTiming !== null;
      case 4:
        return formData.name.trim() && formData.phone.trim();
      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isStepValid(4)) {
      console.log({
        technology: selectedTech,
        floors: selectedFloors,
        dimensions,
        timing: selectedTiming,
        contact: formData
      });
      alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDimensions(prev => ({ ...prev, [name]: value }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (!value.startsWith('7') && !value.startsWith('+7')) {
      value = '7' + value;
    }
    
    let formattedValue = '+7';
    if (value.length > 1) {
      formattedValue += ' ' + value.substring(1, 4);
    }
    if (value.length > 4) {
      formattedValue += ' ' + value.substring(4, 7);
    }
    if (value.length > 7) {
      formattedValue += ' ' + value.substring(7, 9);
    }
    if (value.length > 9) {
      formattedValue += ' ' + value.substring(9, 11);
    }
    
    setFormData({
      ...formData,
      phone: formattedValue
    });
  };

  return (
    <><div className={styles.quizHeader}>
      <h1>Расчет стоимости <b>строительства дома</b></h1>
    </div><div className={styles.quizContainer}>


        {/* Шаг 1: Выбор технологии */}
        <div className={`${styles.quizStep} ${currentStep === 0 ? styles.active : ''}`}>
          <div className={styles.stepTitle}>По какой технологии вы хотите построить дом?</div>

          <div className={styles.techOptions}>
            {technologies.map(tech => (
              <div
                key={tech.id}
                className={`${styles.techOption} ${selectedTech === tech.id ? styles.selected : ''}`}
                onClick={() => setSelectedTech(tech.id)}
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className={styles.techImage} />
                <div className={styles.techName}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Шаг 2: Количество этажей */}
        <div className={`${styles.quizStep} ${currentStep === 1 ? styles.active : ''}`}>
          <div className={styles.stepTitle}>Укажите количество этажей</div>

          <div className={styles.floorOptions}>
            {floorOptions.map(option => (
              <div
                key={option.id}
                className={`${styles.floorOption} ${selectedFloors === option.id ? styles.selected : ''}`}
                onClick={() => setSelectedFloors(option.id)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>

        {/* Шаг 3: Размеры дома */}
        <div className={`${styles.quizStep} ${currentStep === 2 ? styles.active : ''}`}>
          <div className={styles.stepTitle}>Укажите размеры дома (м)</div>

          <div className={styles.sizeInputs}>
            <div className={styles.sizeInputRow}>
              <span className={styles.sizeLabel}>Длина</span>
              <input
                type="number"
                name="length"
                min="1"
                step="0.1"
                value={dimensions.length}
                onChange={handleInputChange}
                className={styles.sizeField} />
            </div>
            <div className={styles.sizeInputRow}>
              <span className={styles.sizeLabel}>Ширина</span>
              <input
                type="number"
                name="width"
                min="1"
                step="0.1"
                value={dimensions.width}
                onChange={handleInputChange}
                className={styles.sizeField} />
            </div>
          </div>
        </div>

        {/* Шаг 4: Сроки строительства */}
        <div className={`${styles.quizStep} ${currentStep === 3 ? styles.active : ''}`}>
          <div className={styles.stepTitle}>Когда планируете начать строительство?</div>

          <div className={styles.timingOptions}>
            {timingOptions.map(option => (
              <div
                key={option.id}
                className={`${styles.timingOption} ${selectedTiming === option.id ? styles.selected : ''}`}
                onClick={() => setSelectedTiming(option.id)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>

        {/* Шаг 5: Контактные данные */}
        <div className={`${styles.quizStep} ${currentStep === 4 ? styles.active : ''}`}>
          <div className={styles.stepTitle}>Укажите ваш номер телефона, чтобы мы могли выслать расчет. Это бесплатно.</div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleFormChange}
                required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handlePhoneChange}
                required />
            </div>

            <div className={styles.privacyText}>Ваши данные не передаются третьим лицам</div>
          </form>
        </div>

        {/* Навигация */}
        <div className={styles.quizNavigation}>
          <button
            className={`${styles.quizBtn} ${styles.back}`}
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Назад
          </button>
          {currentStep < 4 ? (
            <button
              className={styles.quizBtn}
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
            >
              Далее
            </button>
          ) : (
            <button
              type="submit"
              className={styles.quizBtn}
              onClick={handleSubmit}
              disabled={!isStepValid(4)}
            >
              Отправить
            </button>
          )}
        </div>
      </div></>
  );
};

export default QuizComponent;