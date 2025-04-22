'use client'
import Image from "next/image";
import './Services.scss'
import Link from "next/link";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Services() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const swiperRef = useRef(null);
  return (
    <>
      <div className="home-block services">
        <h2><span>Предоставляемые</span> услуги</h2>
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={80}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            centeredSlides={true}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}"></span>`;
                },
            }}
            breakpoints={{
                200: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 4,
                },
                1700: {
                    slidesPerView: 5,
                },
                1920: {
                    slidesPerView: 5,
                },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        >
            {["Дизайн интерьера", "Проектирование", "Авторский надзор"].map((title, index) => (
                <SwiperSlide
                    key={index}
                    onClick={() => {
                        setActiveSlideIndex(index);
                        swiperRef.current?.slideTo(index); // Пролистываем к выбранному слайду
                    }}
                    className={activeSlideIndex === index ? "active-slide" : ""}
                >
                    <div className="slide-fon">
                        <strong>
                            {title} <br />
                            {index === 0 ? "- от 600 р за м2" : index === 1 ? "- от 400 р за м2" : "- от 40 000 р в мес."}
                        </strong>
                        <p>
                            {index === 0
                                ? "Каждый проект начинается с глубокого анализа пространства и пожеланий клиента. Мы разрабатываем концепцию, создаем 3D-визуализацию и подбираем материалы и мебель для реализации."
                                : index === 1
                                ? "Мы выполняем полный цикл индивидуального проектирования: от разработки архитектурного проекта до проработки инженерных сетей."
                                : "Авторский надзор – это гарантия, что ваш проект будет реализован в соответствии с задуманным дизайном, в установленные сроки и без отклонений."}
                        </p>
                        <Link href={index === 0
                                ? "/services/interior"
                                : index === 1
                                ? "/services/arhcitect"
                                : "/services/author"}>Подробнее</Link>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
        </Swiper>
        <Link className="link-more" href='/services'><span>Все услуги</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>
		</Link>
      </div>
    </>
  );
}
