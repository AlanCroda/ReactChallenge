import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserDetailPageProps {
  users: User[];
}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ users }) => {
  const { t } = useTranslation();
  const { userId } = useParams<{ userId?: string }>();
  const [user, setUser] = useState<User | undefined>();

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserById = (userId: string) => {
      return users.find((user) => user.id === userId);
    };

    const fetchedUser = fetchUserById(userId);
    setUser(fetchedUser);
  }, [userId, users]);

  if (!user) {
    return (
      <Container className="mt-4">
        <p>{t("user-not-found")}</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <Card.Title>{t("userDetails-title")}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>ID: {user.id}</p>
            <p>
              {t("name-text")}: {user.name}
            </p>
            <p>
              {t("email-text")}: {user.email}
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/users">
            <Button variant="secondary">{t("backToList-btn")}</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default UserDetailPage;
