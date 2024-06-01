import styled from "styled-components";

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.9rem;
  font-weight: 700;
`;

const Welcome = () => {
  const Data = new Date();

  return (
    <H1>
      {Data.getHours() > 18
        ? "Good Evenning"
        : Data.getHours() < 12
        ? "Good Morning"
        : "Good afternoon"}
    </H1>
  );
};

export default Welcome;
