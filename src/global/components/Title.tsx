import { ReactNode } from "react";
import styled from "styled-components";
const Text = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

const Title = ({ children }: { children: ReactNode }) => {
  return <Text>{children}</Text>;
};

export default Title;
