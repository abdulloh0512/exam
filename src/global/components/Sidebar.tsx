import styled from "styled-components";
import NLinks from "./NLinks";
import ActionsList from "./Actions";
import SongsList from "./SList";

const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  height: 100%;
  width: 100%;
  padding: 70px 30px 0;
  position: sticky;
`;
const Sidebar = () => {
  return (
    <Container>
      <NLinks />
      <ActionsList />
      <SongsList />
    </Container>
  );
};

export default Sidebar;
