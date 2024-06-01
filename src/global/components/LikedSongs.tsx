import styled from "styled-components";
import BackHeader from "../../pages/home/components/BackHeader";
import HeaderAbout from "./HAbout";
import Controllers from "../../pages/playlist/components/Controllers";
import Musics from "../../pages/playlist/components/Musics";

const Container = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #3333a3 5.09%, #121212 33.4%)
    rgba(18, 18, 18, 1);
  padding: 0 40px;
  height: 100%;
`;

const LikedSongs = () => {
  return (
    <Container>
      <BackHeader />
      <HeaderAbout />
      <Controllers />
      <Musics />
    </Container>
  );
};

export default LikedSongs;
