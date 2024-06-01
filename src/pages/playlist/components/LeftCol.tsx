import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ITrack } from "./PAbout";
import appSlice from "../../../redux/appSlice";
import { useParams } from "react-router-dom";
import { ICurMusic } from "../../../global/utils/type";
import { useEffect, useState } from "react";
const Container = styled.article`
  display: flex;
  align-items: center;
  gap: 35px;
  article {
    display: flex;
    gap: 21px;
  }
`;

const IBtn = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #65d36e;
  border: none;
  transition: all 500ms;
  cursor: pointer;
  &:active {
    transform: scale(95%);
  }
`;

const LeftCol = () => {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const playlist = useSelector(
    (state: { curPlayListMusics: ITrack[] }) => state.curPlayListMusics
  );
  const curMusic = useSelector(
    (state: { curMusic: ICurMusic }) => state.curMusic
  );
  const handleClick = () => {
    if (curMusic.status !== "playing") {
      if (playlist[0].track)
        dispatch(
          appSlice.actions.preferMusic({
            id,
            index: 0,
            url: playlist[0].track.preview_url,
            status: "playing",
            image: playlist[0].track.album.images[0].url,
            author: playlist[0].track.album.artists
              .map((e: { name: string }) => e.name)
              .join(),
            name: playlist[0].track.name,
          })
        );
    } else {
      dispatch(appSlice.actions.preferStatus());
    }
  };
  useEffect(() => {
    likedPlaylist();
  }, [like]);
  const likedPlaylist = (a?: string) => {
    const local = localStorage.getItem("likedPlaylist");
    if (local) {
      const list: string[] = JSON.parse(local);
      if (a) {
        if (like) {
          setLike(false);
          localStorage.setItem(
            "likedPlaylist",
            JSON.stringify(list.filter((e) => e !== id))
          );
        } else {
          setLike(true);
          if (!list.find((e) => e === id)) {
            localStorage.setItem(
              "likedPlaylist",
              JSON.stringify([...list, id])
            );
          } else {
            localStorage.setItem("likedPlaylist", JSON.stringify(list));
          }
        }
      } else {
        setLike(list.find((e) => e === id) ? true : false);
      }
    }
  };
  return (
    <Container>
      <IBtn onClick={handleClick}>
        {curMusic.id === id && curMusic.status === "playing" ? (
          <svg
            width="34"
            height="34"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path>
          </svg>
        ) : (
          <svg
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.2865 13.5123C23.1517 13.0266 23.1517 11.8122 22.2865 11.3264L2.81778 0.396795C1.9525 -0.0889662 0.870909 0.518235 0.870909 1.48976V23.349C0.870909 24.3205 1.9525 24.9277 2.81778 24.442L22.2865 13.5123Z"
              fill="black"
            />
          </svg>
        )}
      </IBtn>
      <article>
        <button onClick={() => likedPlaylist("a")}>
          {like ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={"#65D36E"}
              width="50"
              height="50"
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={50}
              height={50}
              fill="white"
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
            </svg>
          )}
        </button>
        <button>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_131_2995)">
              <circle
                cx="26"
                cy="26"
                r="17.75"
                stroke="white"
                strokeWidth="2.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.8388 28.9289L26.8839 36.8839C26.3957 37.372 25.6043 37.372 25.1161 36.8839L17.1612 28.9289C16.673 28.4408 16.673 27.6493 17.1612 27.1612C17.6493 26.673 18.4408 26.673 18.9289 27.1612L24.75 32.9822L24.75 17C24.75 16.3096 25.3096 15.75 26 15.75C26.6904 15.75 27.25 16.3096 27.25 17L27.25 32.9822L33.0711 27.1612C33.5592 26.673 34.3507 26.673 34.8388 27.1612C35.327 27.6493 35.327 28.4408 34.8388 28.9289Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_131_2995">
                <rect width="52" height="52" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_131_2994)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5715 22C12.5715 23.7358 11.1644 25.1429 9.42862 25.1429C7.69287 25.1429 6.28577 23.7358 6.28577 22C6.28577 20.2643 7.69287 18.8572 9.42862 18.8572C11.1644 18.8572 12.5715 20.2643 12.5715 22ZM25.1429 22C25.1429 23.7358 23.7358 25.1429 22.0001 25.1429C20.2643 25.1429 18.8572 23.7358 18.8572 22C18.8572 20.2643 20.2643 18.8572 22.0001 18.8572C23.7358 18.8572 25.1429 20.2643 25.1429 22ZM34.5715 25.1429C36.3072 25.1429 37.7143 23.7358 37.7143 22C37.7143 20.2643 36.3072 18.8572 34.5715 18.8572C32.8357 18.8572 31.4286 20.2643 31.4286 22C31.4286 23.7358 32.8357 25.1429 34.5715 25.1429Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_131_2994">
                <rect width="44" height="44" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </article>
    </Container>
  );
};

export default LeftCol;
