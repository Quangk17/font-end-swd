import React from "react";
import "./NewsPage.css";
import newsImage1 from "../../assets/images/court1.webp";
import newsImage2 from "../../assets/images/court2.jpg";
import newsImage3 from "../../assets/images/court3.jpg";

const NewsPage = () => {
  const newsArticles = [
    {
      title: "Chia sẻ kinh nghiệm rèn luyện sức mạnh trong cầu lông",
      image: newsImage1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis dui in ligula volutpat, vitae ultrices neque accumsan...",
    },
    {
      title: "Các bài tập nâng cao kỹ thuật đánh cầu lông",
      image: newsImage2,
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
    },
    {
      title: "Tâm lý học và chiến thuật trong trận đấu cầu lông",
      image: newsImage3,
      content:
        "Nullam ac ex in ligula viverra luctus. Nulla facilisi. Curabitur nec tristique nisl, ac tincidunt odio...",
    },
  ];

  return (
    <section id="news">
      <div className="news-container">
        <h2>Tin Tức Cầu Lông</h2>
        {newsArticles.map((article, index) => (
          <div className="news-card" key={index}>
            <img
              src={article.image}
              alt={article.title}
              className="news-image"
            />
            <div className="news-info">
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <p className="read-more">Đọc thêm...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsPage;
