import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Item = styled.p`
  font-size: 1.8rem;
  display: block;
  color: ${({ theme }) => theme.colors.gray};
  transition: all 500ms;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SItem = ({ to, text }: { to: string; text: string }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return <Item onClick={handleClick}>{text}</Item>;
};

export default SItem;
