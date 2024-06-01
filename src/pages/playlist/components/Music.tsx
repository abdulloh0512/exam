import styled from "styled-components";
import { IArtist, IImage, ITrack } from "./PAbout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ICurMusic } from "../../../global/utils/type";
import appSlice from "../../../redux/appSlice";
import { useEffect, useRef, useState } from "react";

interface ICurMusicBool {
  curMusic: "true" | "false";
}

const Table = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: 30px 3fr 2fr 2fr 1fr;
  & > * {
    line-height: normal;
  }
  cursor: pointer;
`;

const Col = styled.div`
  width: 100%;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: capitalize;
  button {
    margin-right: 10px;
    display: inline-block;
  }
`;

const MiniContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  img {
    width: 52px;
    height: 52px;
  }
`;

const MusicName = styled.h3<ICurMusicBool>`
  font-size: 2rem;
  color: ${({ curMusic }) => (curMusic === "true" ? "#65D36E" : "white")};
`;

const Author = styled.span`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: capitalize;
`;

interface SingleTrack {
  track: {
    href: string;
    name: string;
    preview_url: string;
    album: {
      images: IImage[];
      artists: IArtist[];
    };
  };
  index: number;
}

const Music = ({ track, index }: SingleTrack) => {
  const timerRef = useRef<number>(9);
  const [like, setLike] = useState(false);
  const musicRef = useRef<null | HTMLAudioElement>(null);
  const { curMusic } = useSelector((state: { curMusic: ICurMusic }) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (index !== curMusic.index) {
      dispatch(
        appSlice.actions.preferMusic({
          id,
          url: track.preview_url,
          index,
          status: "playing",
          image: track.album.images[0].url,
          author: track.album.artists.map((e) => e.name).join(),
          name: track.name,
        })
      );
    }
  };
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      changeLike();
      clearTimeout(timerRef.current);
    }, 3000);
  }, []);
  const changeLike = (a?: string) => {
    const local = localStorage.getItem("likedTracks");
    const list: ITrack[] = local ? JSON.parse(local) : [];
    if (a) {
      const isTrue = list.find(
        (e) => e.track.preview_url === track.preview_url
      );
      const primary = list.length > 0 && isTrue;
      if (like) {
        if (primary) {
          localStorage.setItem(
            "likedTracks",
            JSON.stringify(
              list.filter(
                (e) => e.track.preview_url !== isTrue.track.preview_url
              )
            )
          );
        }
        setLike(false);
      } else {
        setLike(true);
        localStorage.setItem(
          "likedTracks",
          JSON.stringify([
            ...list,
            {
              track,
            },
          ])
        );
      }
    } else {
      if (
        list.length > 0 &&
        list.find((e) => e.track.preview_url === track.preview_url)
      ) {
        setLike(true);
      }
    }
  };
  return (
    <Table onClick={handleClick}>
      <Col>
        {curMusic.index === index && id === curMusic.id ? (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3703_402)">
              <rect x="6" y="5" width="3" height="18" fill="#65D36E" />
              <rect x="10" y="19" width="3" height="4" fill="#65D36E" />
              <rect x="14" y="9" width="3" height="14" fill="#65D36E" />
              <rect x="18" y="19" width="3" height="4" fill="#65D36E" />
            </g>
            <defs>
              <clipPath id="clip0_3703_402">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          index + 1
        )}
      </Col>

      <Col>
        <MiniContainer>
          <img src={track.album.images[0].url} alt="this photo of music" />
          <article>
            <MusicName
              curMusic={
                curMusic.index === index && id === curMusic.id
                  ? "true"
                  : "false"
              }
            >
              {track.name.slice(
                0,
                track.name.split("").findIndex((e, i) => i > 10 && e === " ")
              )}
            </MusicName>
            <Author>{track.album.artists.map((e) => e.name)}</Author>
          </article>
        </MiniContainer>
      </Col>
      <Col>
        <Author>{track.album.artists.map((e) => e.name)}</Author>
      </Col>
      <Col></Col>
      <Col>
        <button
          onClick={(e) => {
            e.stopPropagation();
            changeLike("a");
          }}
          style={{ display: "inline-block", color: "#fff" }}
        >
          {!like ? (
            <svg
              width={"20px"}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: "inline-block" }}
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
            </svg>
          ) : (
            <svg
              width={"20px"}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#65D36E"
              style={{ display: "inline-block" }}
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          )}
        </button>

        {musicRef.current !== null
          ? +musicRef.current.duration.toFixed() > 60
            ? "0" +
              Math.floor(+musicRef.current.duration.toFixed() / 60) +
              ":0" +
              Math.floor(+musicRef.current.duration.toFixed() % 60)
            : musicRef.current
            ? "00:" + +musicRef.current.duration.toFixed()
            : "00:00"
          : "00:00"}
        <audio src={track.preview_url} ref={musicRef} />
      </Col>
    </Table>
  );
};

export default Music;
