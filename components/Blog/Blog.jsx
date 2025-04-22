'use client'
import './Blog.scss';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/Blog-new/Articles.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.slice(0, 6));
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <div className="container-blog">
      <div className="blog">
        <h1>Каталог <b>проектов</b></h1>
        <div className="articles-container-home">
          {articles.map(article => (
            <div className="article-card" key={article.id}>
              <img src={`/Blog-new/${article.imgName}.jpg`} alt={article.imgName} />
              <Link style={{ textDecoration: 'none' }} href={`/catalog-proektov/${article.url}`}>
                <h4>{article.imgName}</h4>
              </Link>
              {/* <p className='sell'>{article.sell}</p> */}

              <div className='d-flex flex-row'>
                <div className='d-flex flex-column col'>
                  <div className='d-flex flex-row'>
                    <img src="/Blog-new/square.svg" className='icon' alt="Площадь" />
                    <p className='txt'>{article.text1}</p>
                  </div>
                  <div className='d-flex flex-row'>
                    <img src="/Blog-new/bed.svg" className='icon' alt="Комнаты" />
                    <p className='txt' dangerouslySetInnerHTML={{ __html: article.text2 }} />
                  </div>
                </div>
                <div className='d-flex flex-column col'>
                  <div className='d-flex flex-row'>
                    <img src="/Blog-new/size.svg" className='icon' alt="Размеры" />
                    <p className='txt'>{article.text3}</p>
                  </div>
                  <div className='d-flex flex-row'>
                    <img src="/Blog-new/garage.svg" className='icon' alt="Гараж" />
                    <p className='txt'>{article.text4}</p>
                  </div>
                </div>
              </div>

              <div className="tags">
                {article.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link href='/catalog-proektov' className="back-button">Все проекты</Link>
      </div>
    </div>
  );
}

export default Blog;