import styled from "styled-components";
import { ITrack, P, Title } from "../../pages/playlist/components/PAbout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import appSlice from "../../redux/appSlice";

const Container = styled.div`
  align-items: end;
  display: flex;
  gap: 32px;
  margin-bottom: 40px;
`;

const Col = styled.div``;

const Public = styled.p`
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const HAbout = () => {
  const local = localStorage.getItem("likedTracks");
  const list: ITrack[] = local ? JSON.parse(local) : [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appSlice.actions.givePlayListMusics(list));
  }, []);
  return (
    <Container>
      <img src="/img.png" alt="this is photo of site" />
      <Col>
        <Public>PUBLIC Playlist</Public>
        <Title>Liked Songs</Title>
        <P>
          <span>Made for you</span>
          <svg
            style={{ display: "inline-block" }}
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
          </svg>{" "}
          <span>{list.length} songs</span>
        </P>
      </Col>
    </Container>
  );
};

export default HAbout;
