// app/components/ProjectDetails/ProjectDetails.jsx
'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CatalogItem({ catalogItem  }) {
  const router = useRouter();

  if (!catalogItem) {
    return <div>Проект не найден</div>;
  }

  return (
    <div className="item-container">
      <button onClick={() => router.back()} className="back-button">
        ← Назад к каталогу
      </button>
      
      <h1>{catalogItem.title}</h1>
      <p className="price">{catalogItem.sell}</p>
      
      <div className="gallery">
        {[catalogItem.img1, catalogItem.img2, catalogItem.img3, catalogItem.img4].map((img, index) => (
          img && <img key={index} src={`/Catalog/${img}.jpg`} alt={`Фото проекта ${index + 1}`} />
        ))}
      </div>
      
      <div className="item-info">
        <h2>Описание проекта</h2>
        <p>{catalogItem.desc}</p>
        
        <h2>Характеристики</h2>
        <ul>
          {catalogItem.tableData.map((item, index) => (
            <li key={index}>
              <strong>{item.firststolb}:</strong> {item.secondstolb}
            </li>
          ))}
        </ul>
      </div>
           {/* <div className='d-flex flex-row'>
                  <div className='d-flex flex-column col'>
                    <div className='d-flex flex-row'>
                      <img src="/Catalog/square.svg" className='icon' alt="Площадь" />
                      <p className='txt'>{article.text1}</p>
                    </div>
                    <div className='d-flex flex-row'>
                      <img src="/Catalog/bed.svg" className='icon' alt="Комнаты" />
                      <p className='txt' dangerouslySetInnerHTML={{ __html: article.text2 }} />
                    </div>
                  </div>
                  <div className='d-flex flex-column col'>
                    <div className='d-flex flex-row'>
                      <img src="/Catalog/size.svg" className='icon' alt="Размеры" />
                      <p className='txt'>{article.text3}</p>
                    </div>
                    <div className='d-flex flex-row'>
                      <img src="/Catalog/garage.svg" className='icon' alt="Гараж" />
                      <p className='txt'>{article.text4}</p>
                    </div>
                  </div>
                </div> */}
      <style jsx>{`
        .item-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .back-button {
          margin-bottom: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #D2B48C;
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
          color: #D2B48C;
          margin: 10px 0;
        }
        .item-info {
          margin-top: 30px;
        }
        .item-info h2 {
          color: #333;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        .item-info ul {
          list-style: none;
          padding: 0;
        }
        .item-info li {
          margin: 10px 0;
          padding: 10px;
          background: #f9f9f9;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}