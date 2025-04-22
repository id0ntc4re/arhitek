'use client';
import './Advantages.scss';
import React from 'react';
import Image from 'next/image';

export default function Advantages() {
    return (
        <div className='home-block advantages'>
            <h2>ДОБРО ПОЖАЛОВАТЬ НА <span>НАШ САЙТ</span></h2>
            <div className='advantages-container'>
                <div className='advantages-text'>
                    <h4>
                        "Если Вы планируете строительство собственного дома и ищете профессиональную поддержку, доверьте эту задачу нам.
                        Компания АРХИТЕК гарантирует высочайшее качество и результат, который превзойдет Ваши ожидания.
                        <br />
                        За этими словами стоит наш многолетний опыт в сфере частного малоэтажного строительства.
                        Мы знаем, как воплотить Ваши мечты в жизнь, создавая дома, которые станут воплощением комфорта, стиля и надежности." —
                    </h4>
                    <h3>Александр Обласов,<br /> руководитель компании АРХИТЕК</h3>
                    {/* Блок преимуществ */}
                    {/* <div className="advantage-block">
                        <div className="advantage">
                            <span>25+</span>
                            <div className="advantage-line"></div>
                            <p>Лет опыт<br />строительства</p>
                        </div>
                        <div className="advantage">
                            <span>500+</span>
                            <div className="advantage-line"></div>
                            <p>Построено<br /> домов</p>
                        </div>
                        <div className="advantage">
                            <span>700+</span>
                            <div className="advantage-line"></div>
                            <p>Спроектировано<br />домов</p>
                        </div>
                    </div> */}
                    {/* Кнопка "Оставить заявку" */}
                    <button 
                        type="button" 
                        className="apply-button"
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                    >
                        Оставить заявку
                    </button>
                </div>
                <Image 
                    src={'/Home/обласов.png'} 
                    alt="Преимущества нашего архитектурно-дизайнерского бюро" 
                    width={500} 
                    height={600} 
                    className='advantages-image'
                />
            </div>
        </div>
    );
}