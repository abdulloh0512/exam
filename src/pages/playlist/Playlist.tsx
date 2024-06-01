import { Container } from "../home/Home";
import BackHeader from "../home/components/BackHeader";
import Controllers from "./components/Controllers";
import Musics from "./components/Musics";
import PlaylistAbout from "./components/PAbout";
import Table from "./components/Table";

const Playlist = () => {
  return (
    <Container>
      <BackHeader />
      <PlaylistAbout />
      <Controllers />
      <Table />
      <Musics />
    </Container>
  );
};

export default Playlist;
