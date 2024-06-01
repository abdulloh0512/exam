import styled from "styled-components";
import Music from "./Music";
import { useSelector } from "react-redux";
import { ITrack } from "./PAbout";

const Container = styled.div`
  width: 100%;
  display: grid;
  padding-bottom: 100px;
`;

const H1 = styled.h1`
  text-align: center;
  color: white;
  font-size: 4rem;
`;

const Musics = () => {
  const musics = useSelector(
    (state: { token: string; curPlayListMusics: ITrack[] }) =>
      state.curPlayListMusics
  );
  return (
    <Container>
      {musics.length > 0 ? (
        musics.map((e, i) => (
          <Music
            track={{
              album: e.track.album,
              href: e.track.href,
              name: e.track.name,
              preview_url: e.track.preview_url,
            }}
            key={i}
            index={i}
          />
        ))
      ) : (
        <H1>No thing</H1>
      )}
    </Container>
  );
};

export default Musics;
