import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
  max-width: 479px;
  width: 100%;
  height: 82px;
  display: grid;
  grid-template-columns: 82px 1fr;
  align-items: center;
  gap: 21px;
  background: rgba(250, 250, 250, 0.1);
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    background-color: rgba(250, 250, 250, 0.3);
  }
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 700;
`;
const PlayList = ({
  name,
  id,
  url,
}: {
  name: string;
  id: string;
  url: string;
}) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/playlist/" + id)}>
      <img src={url} alt="avatar" />
      <Name>
        {name.slice(
          0,
          name
            .split("")
            .findIndex((e, i) => (i > 55 && e === " " ? true : false))
        )}
      </Name>
    </Container>
  );
};

export default PlayList;
