import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getData } from "../../../function/getPlayLists";
import { IData, IItems } from "./PLists";
import CardItem from "./CardItem";
import Loading from "../../../global/components/Loading";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: start;
`;

const CardsList = ({ api, all }: { api: string; all: boolean }) => {
  const [data, setData] = useState<IItems[]>([]);
  const token = useSelector((state: { token: string }) => state.token);
  useEffect(() => {
    getData(token, api).then((e: IData) => setData(e.playlists.items));
  }, []);
  return (
    <Container>
      {data.length > 0 ? (
        data
          .slice(0, all ? data.length : 4)
          .map((e) => (
            <CardItem
              id={e.id}
              name={e.name}
              authors={e.owner.display_name}
              url={e.images[0].url}
            />
          ))
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default CardsList;
