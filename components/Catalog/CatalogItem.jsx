"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./CatalogItem.scss";
import Hero from "../Home/Hero/Hero";
import { useRouter } from "next/navigation";

export default function CatalogItem({ catalogItem }) {
  const router = useRouter();
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  if (!catalogItem) {
    return <div>Проект не найден</div>;
  }

  const handleImageClick = (img) => {
    setFullscreenImage(`/Catalog/${img}.jpg`);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <Hero />
      <div className="item-container">
        <button onClick={() => router.back()} className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="back-button-icon"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Назад к каталогу
        </button>

        <h1>{catalogItem.title}</h1>
        <p className="price">{catalogItem.sell}</p>

        <div className="gallery">
          {[
            catalogItem.img1,
            catalogItem.img2,
            catalogItem.img3,
            catalogItem.img4,
          ].map(
            (img, index) =>
              img && (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => handleImageClick(img)}
                >
                  <img
                    src={`/Catalog/${img}.jpg`}
                    alt={`Фото проекта ${index + 1}`}
                  />
                </div>
              )
          )}
        </div>

        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={closeFullscreen}>
            <div className="fullscreen-content">
              <img src={fullscreenImage} alt="Fullscreen" />
              <button className="close-button" onClick={closeFullscreen}>
                &times;
              </button>
            </div>
          </div>
        )}

        <div className="project-info">
          <div className="info-tabs-container">
            <div className="info-tabs">
              <button
                className={`tab-button ${
                  activeTab === "description" ? "active" : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Описание
              </button>
              <button
                className={`tab-button ${
                  activeTab === "characteristics" ? "active" : ""
                }`}
                onClick={() => setActiveTab("characteristics")}
              >
                Характеристики
              </button>
            </div>

            <div className="info-content">
              {activeTab === "description" && (
                <div className="description-section">
                  <p>{catalogItem.desc}</p>
                </div>
              )}

              {activeTab === "characteristics" && (
                <div className="characteristics-section">
                  <div className="characteristics-grid">
                    {catalogItem.tableData.map((item, index) => (
                      <div key={index} className="characteristic-item">
                        <div className="characteristic-title">
                          {item.firststolb}
                        </div>
                        <div className="characteristic-value">
                          {item.secondstolb}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form">
              <h3>КУПИТЬ ПРОЕКТ</h3>
              <p>Отправьте заявку на проектирование</p>

              <form>
                <div className="form-group">
                  <label>Телефон:</label>
                  <input type="tel" placeholder="Ваш телефон" />
                </div>

                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" placeholder="Ваш email" />
                </div>

                <div className="form-group">
                  <label>Сообщение:</label>
                  <textarea placeholder="Ваше сообщение"></textarea>
                </div>

                <button type="submit" className="submit-button">
                  ОТПРАВИТЬ
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="modern-house-question">
          <h3>Нужен современный дом?</h3>
          <p>Вопрос о том, что в данном случае не интересно.</p>
        </div>
      </div>
    </>
  );
}
