import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getData } from "../../../function/getPlayLists";
import { useParams } from "react-router-dom";
import appSlice from "../../../redux/appSlice";

interface ITracks {
  items: ITrack[];
}

export interface ITrack {
  track: {
    href: string;
    name: string;
    preview_url: string;
    album: {
      images: IImage[];
      artists: IArtist[];
    };
  };
}
export interface IData {
  name: string;
  description: string;
  images: IImage[];
  href: string;
  tracks: ITracks;
  owner: {
    display_name: string;
  };
}

export interface IImage {
  url: string;
}
export interface IArtist {
  name: string;
}

const Type = styled.h3`
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Title = styled.h1`
  font-size: 8.2rem;
  font-weight: 900;
  line-height: 90px;
  color: white;
`;

const Singers = styled.p`
  font-size: 2rem;
  color: white;
`;

const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: end;
  margin-bottom: 62px;
`;

export const P = styled.p`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  word-spacing: 3px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  gap: 6px;
  span {
    color: white;
  }
`;
const Img = styled.img`
  border-radius: 8px;
`;

const PlaylistAbout = () => {
  const token = useSelector((a: { token: string }) => a.token);
  const [datas, setDatas] = useState<IData>();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getData(token, "https://api.spotify.com/v1/playlists/" + id).then(
      (e: IData) => {
        const {
          tracks: { items },
        } = e;
        dispatch(appSlice.actions.givePlayListMusics(items));
        setDatas(e);
      }
    );
  }, []);
  return (
    <Container>
      <Img src={datas?.images[0].url} alt="" />
      <div>
        <Type>PUBLIC PLAYLIST</Type>
        <Title>{datas?.name.slice(0, 10)}</Title>
        <Singers>{datas?.owner.display_name}</Singers>
        <P>
          Made for<span> you</span>{" "}
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
          {datas?.tracks.items.length} songs
        </P>
      </div>
    </Container>
  );
};

export default PlaylistAbout;
