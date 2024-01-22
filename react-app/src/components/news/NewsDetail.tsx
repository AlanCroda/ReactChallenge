import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Alert } from "react-bootstrap";
import { News } from "../../pages/NewsPage";

export interface NewsDetailProps {
  news: News[];
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news }) => {
  const { newsId } = useParams<{ newsId?: string }>();

  // Function to fetch news item by id
  const fetchNewsItemById = (newsId: string): News | undefined => {
    return news.find((item) => item.id === newsId);
  };

  // Fetch the news item based on the id from the URL
  const newsItem = fetchNewsItemById(newsId || "");

  if (!newsItem) {
    return <div>News not found</div>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img
          className="newsDetails-img"
          variant="top"
          src={newsItem.image}
        />
        <Card.Body>
          <Card.Title>{newsItem.title}</Card.Title>
          <Card.Text>{newsItem.summary}</Card.Text>
        </Card.Body>
      </Card>

      <Alert variant="info" className="mt-4 news-text">
        <div
          dangerouslySetInnerHTML={{
            __html: newsItem.text.replace(/\n/g, "<p />"),
          }}
        />
      </Alert>
    </Container>
  );
};

export default NewsDetail;
