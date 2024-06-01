import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const See = styled.span`
  font-size: 1.8rem;
  cursor: pointer;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  transition: all 500ms;
  &:hover {
    color: white;
  }
`;

const BtnSee = ({
  all,
  setAll,
}: {
  all: boolean;
  setAll: Dispatch<SetStateAction<boolean>>;
}) => {
  return <See onClick={() => setAll(!all)}>See all</See>;
};

export default BtnSee;
