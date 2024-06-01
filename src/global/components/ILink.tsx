import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IAc } from "../utils/type";

const Icon = styled(NavLink)`
  gap: 20px;
  font-size: 2.3rem;
  display: flex;
  transition: all 500ms;
  width: 100%;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  img {
    color: ${({ theme }) => theme.colors.gray};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  &.active {
    color: ${({ theme }) => theme.colors.white};
    & > img {
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

const IconLink = ({ icon, text, url }: IAc) => {
  return (
    <Icon to={url}>
      {icon}
      {text}
    </Icon>
  );
};

export default IconLink;
