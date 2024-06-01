import styled from "styled-components";
import SongItem from "./SongItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../function/getPlayLists";
import { IData, IItems } from "../../pages/home/components/PLists";
import Loading from "./Loading";

const Container = styled.ul`
  padding-top: 22px;
  border-top: 1px #282828 solid;
  margin-top: 20px;
  display: grid;
  gap: 6px;
`;

const SList = () => {
  const [data, setData] = useState<IItems[]>([]);
  const token = useSelector((state: { token: string }) => state.token);
  useEffect(() => {
    getData(
      token,
      "https://api.spotify.com/v1/browse/categories/toplists/playlists"
    ).then((e: IData) => setData(e.playlists.items));
  }, [token]);
  return (
    <Container>
      {data.length ? (
        data.map((e, i) => (
          <SongItem to={"/playlist/" + e.id} key={i} text={e.name} />
        ))
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default SList;
