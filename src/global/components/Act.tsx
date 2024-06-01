import styled from "styled-components";
import { IAc } from "../utils/type";
import { useNavigate } from "react-router-dom";

const Icon = styled.button`
  font-weight: 700;
  gap: 20px;
  font-size: 2.3rem;
  background-color: transparent;
  border: none;
  display: flex;
  width: 100%;
  cursor: pointer;
  transition: all 500ms;
  color: ${({ theme }) => theme.colors.gray};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  img {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
const Action = ({ icon, text, url }: IAc) => {
  const navigate = useNavigate();
  return (
    <Icon onClick={() => navigate(url)}>
      {icon}
      {text}
    </Icon>
  );
};

export default Action;
