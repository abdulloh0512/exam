import styled from "styled-components";

import { useEffect, useState } from "react";
import { getPlayLists } from "../../../function/getPlayLists";
import { useSelector } from "react-redux";
import PlayList from "./PlayList";
export interface IItems {
  href: string;
  images: { url: string }[];
  id: string;
  description: string;
  name: string;
  owner: {
    display_name: string;
  };
}
export interface IData {
  message: string;
  playlists: {
    items: IItems[];
  };
}

const PLists = styled.div`
  display: flex;
  gap: 30px;
  justify-content: start;
  flex-wrap: wrap;
  padding-top: 30px;
  margin-bottom: 50px;
`;

const Playlists = () => {
  const [data, setData] = useState<IItems[]>([]);
  const token = useSelector((state: { token: string }) => state.token);

  useEffect(() => {
    getPlayLists(token).then((e: IData) => {
      setData(e.playlists.items);
    });
  }, [token]);

  return (
    <PLists>
      {data.map((e) => (
        <PlayList
          id={e.id}
          name={e.description}
          key={e.id}
          url={e.images[0].url}
        />
      ))}
    </PLists>
  );
};

export default Playlists;
