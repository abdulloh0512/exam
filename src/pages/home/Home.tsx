import styled from "styled-components";
import BackHeader from "./components/BackHeader";
import Welcome from "./components/Welcome";
import Playlists from "./components/PLists";
import Section from "./components/Section";

export const Container = styled.div`
  padding: 0 40px;
  background: linear-gradient(180deg, #3333a3 5.09%, #121212 33.4%)
    rgba(18, 18, 18, 1);
  height: 100%;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <BackHeader />
      <Welcome />
      <Playlists />
      <Section
        url="https://api.spotify.com/v1/browse/categories/toplists/playlists"
        title="Your top mixes"
      />
      <Section
        url="https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists"
        title="Made for you"
      />
      <Section
        url="https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists"
        title="Recently played"
      />
      <Section
        url="https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists"
        title="Jump back in"
      />
      <Section
        url="https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists"
        title="Uniquely yours"
      />
    </Container>
  );
};

export default Home;
