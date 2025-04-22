"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [articles, setArticles] = useState([]);
  const [selectedTags, setSelectedTags] = useState(["Все"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [displayedArticlesCount, setDisplayedArticlesCount] = useState(8);
  const articlesPerPage = 8;

  useEffect(() => {
    fetch("/Portfolio/Portfolio.json")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setFilteredArticles(data);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  useEffect(() => {
    filterArticles(selectedTags, searchQuery);
    setDisplayedArticlesCount(articlesPerPage); // Reset displayed articles count on filter change
  }, [selectedTags, searchQuery]);

  const filterArticles = (tags, query) => {
    let filtered = articles;

    if (tags.length > 0 && !tags.includes("Все")) {
      filtered = filtered.filter((article) =>
        tags.every((tag) => article.tags.includes(tag))
      );
    }

    if (query) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  };

  const handleTagClick = (tag) => {
    setSelectedTags(tag === "Все" ? ["Все"] : [tag]);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleLoadMore = () => {
    setDisplayedArticlesCount((prevCount) => prevCount + articlesPerPage);
  };

  return (
    <>
      <div className="search">
      <h1>Проекты</h1>
        <div className="tags-container">
          {["Все", "Частная архитектура", "Дизайн интерьера"].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={selectedTags.includes(tag) ? "active" : ""}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="articles-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.slice(0, displayedArticlesCount).map((article) => (
              <Link className="article-card" key={article.id}
                href={`/portfolio/${article.url}`}
              >
                <Image src={`/Portfolio/${article.url}/1.webp`} alt={`Проект дома ${article.description}"${article.title}"`} width={1000} height={1000}/>
                <h4>{article.title}</h4>
                {article.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </Link>
          ))
        ) : (
          <p className="no-articles">Проекты не найдены</p>
        )}
      </div>
      {filteredArticles.length > displayedArticlesCount && (
        <button className="load-more" onClick={handleLoadMore}>
          Показать еще
        </button>
      )}
    </>
  );
}
