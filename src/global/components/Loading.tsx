import styled from "styled-components";

const Img = styled.img`
  margin: 0 auto;
  display: block;
`;

const Loading = () => {
  return <Img src="/loading.svg" width={70} height={70} />;
};

export default Loading;
