import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 224px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(250, 250, 250, 0.1);
  img {
    width: 100%;
    height: 182px;
    border-radius: 8px;
    margin-bottom: 25px;
  }
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    background-color: rgba(250, 250, 250, 0.3);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin-bottom: 8px;
`;

const Authors = styled.p`
  text-transform: capitalize;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
`;
const CardItem = ({
  url,
  authors,
  id,
  name,
}: {
  id: string;
  url: string;
  name: string;
  authors: string;
}) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/playlist/" + id)}>
      <img src={url} alt={name} />
      <Title>{name}</Title>
      <Authors>{authors}</Authors>
    </Container>
  );
};

export default CardItem;
