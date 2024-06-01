import styled from "styled-components";
import ILink from "./ILink";
import arr from "../utils/datas";

const List = styled.ul`
  display: grid;
  gap: 20px;
  margin-bottom: 40px;
`;

const NLinks = () => {
  return (
    <List>
      {arr.map((e) => (
        <ILink {...e} key={e.text} />
      ))}
    </List>
  );
};

export default NLinks;
