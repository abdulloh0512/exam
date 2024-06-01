import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./global/components/Sidebar";
import GlobalStyles from "./global/utils/GlobalStyles";
import theme from "./global/utils/theme";
import { useDispatch } from "react-redux";
import { examination as exam } from "./function/getToken";
import Playlist from "./pages/playlist/Playlist";
import MusicPlayer from "./global/components/MPlayer";
import LikedSongs from "./global/components/LikedSongs";
import Artists from "./global/components/Artists";

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 310px 1fr 310px;
  width: 100%;
  position: relative;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Sidebar />
        <Home />
        <Artists />
      </>
    ),
  },
  {
    path: "/playlist/:id",
    element: (
      <>
        <Sidebar />
        <Playlist />
        <Artists />
      </>
    ),
  },
  {
    path: "/liked",
    element: (
      <>
        <Sidebar />
        <LikedSongs />
        <Artists />
      </>
    ),
  },
]);
const Layout = () => {
  const dispatch = useDispatch();
  exam(dispatch);
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
        <MusicPlayer />
      </ThemeProvider>
    </Container>
  );
};

export default Layout;
