import { ReactNode } from "react";
import styled from "styled-components";

const Btn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: all 500ms;
  &:active {
    transform: scale(80%);
  }
`;

const Back = ({ onClick, svg }: { onClick: () => void; svg: ReactNode }) => {
  return <Btn onClick={onClick}>{svg}</Btn>;
};

export default Back;
