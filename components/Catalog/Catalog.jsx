"use client";
import "./Catalog.scss";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Catalog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/Catalog/Articles.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.slice(0, 6));
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <div className="container-blog">
      <div className="blog">
        <h1>
          Каталог <b>проектов</b>
        </h1>
        <div className="articles-container-home">
          {articles.map((article) => (
            <Link
              style={{ textDecoration: "none" }}
              href={`/catalog/${article.slug}`}
              key={article.id}
              className="article-card-link"
            >
              <div className="article-card">
                <img
                  src={`/Catalog/${article.imgName}.jpg`}
                  alt={article.imgName}
                />
                <div className="content-overlay">
                  <h4>{article.title}</h4>
                  <div className="tags">
                    {article.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/catalog" className="back-button">
          Все проекты
        </Link>
      </div>
    </div>
  );
}

export default Catalog;
