import { Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface NewsItemProps {
  newsItem: {
    id: string;
    title: string;
    image: string;
    summary: string;
    text: string;
  };
}

export const NewsCard: React.FC<NewsItemProps> = ({ newsItem }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleViewNewsItem = () => {
    navigate(`/news/${newsItem.id}`);
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img className="newsCard-img" variant="top" src={newsItem.image} />
      <Card.Body>
        <Card.Title>{newsItem.title}</Card.Title>
        <Card.Text>{newsItem.summary}</Card.Text>
        <Button variant="primary" onClick={handleViewNewsItem}>
          {t("readMore-btn")}
        </Button>
      </Card.Body>
    </Card>
  );
};
