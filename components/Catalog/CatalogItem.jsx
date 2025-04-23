"use client";

import React from "react";
import Link from "next/link";
import Hero from "../Home/Hero/Hero";
import { useRouter } from "next/navigation";

export default function CatalogItem({ catalogItem }) {
  const router = useRouter();

  if (!catalogItem) {
    return <div>Проект не найден</div>;
  }

  return (
    <>
      <Hero />
      <div className="item-container">
        <button onClick={() => router.back()} className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
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
                <img
                  key={index}
                  src={`/Catalog/${img}.jpg`}
                  alt={`Фото проекта ${index + 1}`}
                />
              )
          )}
        </div>

        <div className="project-info">
          <div className="description-section">
            <h2>Описание проекта</h2>
            <p>{catalogItem.desc}</p>

            <h2>Характеристики</h2>
            <ul className="characteristics">
              {catalogItem.tableData.map((item, index) => (
                <li key={index}>
                  <strong>{item.firststolb}:</strong> {item.secondstolb}
                </li>
              ))}
            </ul>
          </div>

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

        <div className="modern-house-question">
          <h3>Нужен современный дом?</h3>
          <p>Вопрос о том, что в данном случае не интересно.</p>
        </div>

        <style jsx>{`
          .item-container {
            max-width: 1400px;
            width: 90%;
            margin: 0 auto;
            padding: 20px 0;
          }
          .back-button {
            margin-bottom: 20px;
            background: none;
            border: none;
            cursor: pointer;
            color: #d2b48c;
            font-size: 16px;
          }
          .gallery {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 30px 0;
          }
          .gallery img {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }
          .price {
            font-size: 24px;
            color: #d2b48c;
            margin: 10px 0;
          }
          .project-info {
            display: flex;
            gap: 40px;
            margin-top: 30px;
          }
          .description-section {
            flex: 2;
          }
          .contact-form {
            flex: 1;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
          }
          .contact-form h3 {
            color: #333;
            margin-bottom: 10px;
          }
          .contact-form p {
            color: #666;
            margin-bottom: 20px;
          }
          .form-group {
            margin-bottom: 15px;
          }
          .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #333;
          }
          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          .form-group textarea {
            height: 100px;
          }
          .submit-button {
            width: 100%;
            padding: 12px;
            background-color: #d2b48c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
          }
          .modern-house-question {
            margin-top: 40px;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 8px;
          }
          .modern-house-question h3 {
            color: #333;
            margin-bottom: 10px;
          }
          .modern-house-question p {
            color: #666;
          }
          .characteristics {
            list-style: none;
            padding: 0;
          }
          .characteristics li {
            margin: 10px 0;
            padding: 10px;
            background: #f9f9f9;
            border-radius: 4px;
          }
        `}</style>
      </div>
    </>
  );
}
