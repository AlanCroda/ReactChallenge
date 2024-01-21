import { Button, Card } from "react-bootstrap";
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
  const navigate = useNavigate();
  const handleViewNewsItem = () => {
    navigate(`/news/${newsItem.id}`);
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={newsItem.image} />
      <Card.Body>
        <Card.Title>{newsItem.title}</Card.Title>
        <Card.Text>{newsItem.summary}</Card.Text>
        <Button variant="primary" onClick={handleViewNewsItem}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};
