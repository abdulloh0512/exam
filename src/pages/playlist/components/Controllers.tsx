import styled from "styled-components";
import LeftCol from "./LeftCol";
import RightCol from "./RightCol";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Controllers = () => {
  return (
    <div>
      <Container>
        <LeftCol />
        <RightCol />
      </Container>
    </div>
  );
};

export default Controllers;
