import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ICurMusic } from "../utils/type";
import { useEffect, useRef, useState } from "react";
import appSlice from "../../redux/appSlice";
import { ITrack } from "../../pages/playlist/components/PAbout";

const Footer = styled.footer`
  position: fixed;
  background-color: #181818;
  padding: 20px 30px;
  z-index: 50;
  display: flex;
  align-items: center;
  bottom: 0;
  justify-content: space-between;
  width: 100%;
`;

const Rng = styled.input`
  &[type="range"] {
    accent-color: white;
    background: transparent;
  }
  cursor: pointer;
`;
const LeftCol = styled.div`
  display: flex;
  gap: 20px;
`;

const CenterCol = styled.div``;

const RightCol = styled.div`
  display: flex;
  gap: 16px;
`;

const MusicName = styled.h3`
  font-size: 2rem;
  color: white;
`;

const MiniContainer = styled.div`
  display: grid;
  gap: 4px;
`;

const Author = styled.span`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

const Controllors = styled.div`
  display: flex;
  gap: 76px;
  align-items: center;
  max-width: 300px;
  justify-content: space-between;
`;

const BtnPlay = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
const MusicPlayer = () => {
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const playlist = useSelector(
    (state: { curPlayListMusics: ITrack[] }) => state.curPlayListMusics
  );
  const dispatch = useDispatch();
  const { url, status, name, author, image, index, id } = useSelector(
    (state: { curMusic: ICurMusic }) => state.curMusic
  );
  const [infinity, setInfinity] = useState(false);
  useEffect(() => {
    if (status === "pause") {
      musicRef.current?.pause();
    } else {
      musicRef.current?.play();
    }
  }, [status]);
  useEffect(() => {
    if (url.length) {
      musicRef.current?.play();
    }
  }, [url]);
  if (url.length > 0)
    return (
      <Footer>
        <LeftCol>
          <img src={image} alt="this photo of music" width={52} height={52} />
          <MiniContainer>
            <MusicName>
              {name.slice(
                0,
                name
                  .split("")
                  .findIndex((e: string, i: number) => e === " " && i > 16)
              )}
            </MusicName>
            <Author>{author}</Author>
          </MiniContainer>
        </LeftCol>
        <CenterCol>
          <Controllors>
            <button>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.4708 7.31952C21.0448 7.74555 21.0448 8.43627 21.4708 8.8623L22.1566 9.54813H19.8151C18.3733 9.54813 17.0016 10.215 16.0522 11.3776L7.94266 21.3076C7.37299 22.0052 6.55001 22.4053 5.68493 22.4053H5V24.5481H5.68493C7.12674 24.5481 8.49837 23.8813 9.44781 22.7187L17.5573 12.7887C18.127 12.0911 18.95 11.691 19.8151 11.691H22.4991L21.4708 12.7192C21.0448 13.1453 21.0448 13.836 21.4708 14.262C21.8968 14.688 22.5876 14.688 23.0136 14.262L26.1313 11.1443C26.3265 10.9491 26.3265 10.6325 26.1313 10.4372L23.0136 7.31952C22.5876 6.89349 21.8968 6.89349 21.4708 7.31952ZM6.36879 8.54813C7.76049 8.54813 9.08446 9.19407 10.0009 10.3202L12.4531 13.1728L11 14.5481L8.54806 11.687C7.9982 11.0113 7.20381 10.6238 6.36879 10.6238H5.00043V8.54813H6.36879ZM16.3284 20.7761C17.2449 21.9022 18.5688 22.5481 19.9605 22.5481H22.6419L21.4708 23.7192C21.0448 24.1453 21.0448 24.836 21.4708 25.262C21.8968 25.688 22.5876 25.688 23.0136 25.262L26.1313 22.1443C26.3265 21.9491 26.3265 21.6325 26.1313 21.4372L23.0136 18.3195C22.5876 17.8935 21.8968 17.8935 21.4708 18.3195C21.0448 18.7455 21.0448 19.4363 21.4708 19.8623L22.081 20.4725H19.9605C19.1255 20.4725 18.3311 20.0849 17.7813 19.4093L16 17.0481L14.5 18.5481L16.3284 20.7761Z"
                  fill="#BABABA"
                />
              </svg>
            </button>
            <BtnPlay
              onClick={() => {
                if (status === "playing") {
                  musicRef.current?.pause();
                } else {
                  musicRef.current?.play();
                  musicRef.current?.preload;
                }
                dispatch(appSlice.actions.preferStatus());
              }}
            >
              {status === "pause" ? (
                <svg
                  width={29}
                  height={29}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
                </svg>
              ) : (
                <svg
                  width={29}
                  height={29}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path>
                </svg>
              )}
            </BtnPlay>
            <button onClick={() => setInfinity(!infinity)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H12V22H10C7.79086 22 6 20.2091 6 18V10C6 7.79086 7.79086 6 10 6H22C24.2091 6 26 7.79086 26 10V18C26 20.2091 24.2091 22 22 22H18.843L20.0141 23.1711C20.4401 23.5971 20.4401 24.2879 20.0141 24.7139C19.588 25.1399 18.8973 25.1399 18.4713 24.7139L15.3536 21.5962C15.1583 21.4009 15.1583 21.0843 15.3536 20.8891L18.4713 17.7714C18.8973 17.3454 19.588 17.3454 20.0141 17.7714C20.4401 18.1974 20.4401 18.8881 20.0141 19.3142L19.3282 20H22C23.1046 20 24 19.1046 24 18V10C24 8.89543 23.1046 8 22 8Z"
                  fill={infinity ? "#fff" : "#bababa"}
                />
              </svg>
            </button>
          </Controllors>
          <audio
            loop={infinity}
            src={url}
            ref={musicRef}
            onEnded={() => {
              if (musicRef.current) {
                const nextMusic =
                  playlist[index + 1].track.preview_url !== null
                    ? playlist[index + 1]
                    : playlist[index + 2];

                if (playlist[index + 1].track.preview_url !== null) {
                  dispatch(
                    appSlice.actions.preferMusic({
                      id,
                      index: index + 1,
                      url: nextMusic.track.preview_url,
                      status: "playing",
                      image: nextMusic.track.album.images[0].url,
                      author: nextMusic.track.album.artists
                        .map((e) => e.name)
                        .join(),
                      name: nextMusic.track.name,
                    })
                  );
                } else {
                  dispatch(
                    appSlice.actions.preferMusic({
                      id,
                      index: index + 2,
                      url: nextMusic.track.preview_url,
                      status: "playing",
                      image: nextMusic.track.album.images[0].url,
                      author: nextMusic.track.album.artists
                        .map((e) => e.name)
                        .join(),
                      name: nextMusic.track.name,
                    })
                  );
                }
              }
            }}
          />
        </CenterCol>
        <RightCol>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.7"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1385 9.74993L9.47894 13.6673C7.50702 14.8273 7.50702 17.679 9.47894 18.8389L16.1385 22.7563V9.74993ZM8.4649 11.9434C5.17837 13.8767 5.17837 18.6295 8.4649 20.5628L16.6314 25.3666C17.2981 25.7588 18.1385 25.2781 18.1385 24.5047V8.00152C18.1385 7.2281 17.2981 6.74745 16.6314 7.13958L8.4649 11.9434ZM19.1387 9.25317C20.1236 9.25317 21.0989 9.44717 22.0088 9.82408C22.9187 10.201 23.7455 10.7534 24.442 11.4499C25.1384 12.1463 25.6909 12.9731 26.0678 13.883C26.4447 14.793 26.6387 15.7683 26.6387 16.7532C26.6387 17.7381 26.4447 18.7134 26.0678 19.6233C25.6909 20.5332 25.1384 21.36 24.442 22.0565C23.7455 22.7529 22.9187 23.3054 22.0088 23.6823C21.0989 24.0592 20.1236 24.2532 19.1387 24.2532V22.2443C19.8598 22.2443 20.5738 22.1022 21.24 21.8263C21.9062 21.5503 22.5116 21.1459 23.0215 20.636C23.5314 20.1261 23.9358 19.5207 24.2118 18.8545C24.4877 18.1883 24.6298 17.4743 24.6298 16.7532C24.6298 16.0321 24.4877 15.318 24.2118 14.6518C23.9358 13.9856 23.5314 13.3803 23.0215 12.8704C22.5116 12.3605 21.9062 11.956 21.24 11.6801C20.5738 11.4041 19.8598 11.2621 19.1387 11.2621V9.25317ZM21.3311 14.5363C20.7997 13.8955 20.053 13.4431 19.213 13.2532L19.1387 20.2532C19.9826 20.079 20.7387 19.6408 21.2836 19.0101C21.8285 18.3795 22.1299 17.5936 22.1385 16.781C22.1471 15.9684 21.8625 15.177 21.3311 14.5363Z"
              fill="white"
            />
          </svg>
          <Rng
            type="range"
            max={100}
            onChange={(e) => {
              if (musicRef.current)
                musicRef.current.volume = Number(e.target.value) / 100;
            }}
          />
        </RightCol>
      </Footer>
    );
  if (url.length === 0) return <></>;
};

export default MusicPlayer;
