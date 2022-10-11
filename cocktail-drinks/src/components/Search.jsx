import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomDrink } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomDrink = () => {
    setSearchTerm("");
    setText("");
    fetchRandomDrink();
  };
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type A Drink"
          value={text}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={handleRandomDrink}
        >
          Surprise Me
        </button>
      </form>
    </header>
  );
};

export default Search;
