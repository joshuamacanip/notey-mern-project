import GlobalStyle from "./styles/GlobalStyles";
import ReactHead from "./styles/ReactHead";
import Container from "./styles/Container";
import NavBar from "./components/NavBar";
import NotesLists from "./components/NotesLists";
import NoteForm from "./components/NoteForm";
import NoteDetail from "./components/NoteDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  const routes = [
    { id: 1, path: "/", element: <NotesLists /> },
    { id: 2, path: "/create", element: <NoteForm /> },
    { id: 3, path: "/:id", element: <NoteDetail /> },
  ];

  return (
    <>
      <ReactHead />
      <GlobalStyle />
      <NavBar />
      <Container>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))}
        </Routes>
      </Container>
    </>
  );
}

export default App;
