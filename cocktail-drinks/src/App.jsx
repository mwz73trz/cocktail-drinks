import "./App.css";
import { useGlobalContext } from "./context";
import Favorites from "./components/Favorites";
import Drinks from "./components/Drinks";
import Modal from "./components/Modal";
import Search from "./components/Search";

const App = () => {
  const { showModal, favorites } = useGlobalContext();

  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Drinks />
      {showModal && <Modal />}
    </main>
  );
};

export default App;
