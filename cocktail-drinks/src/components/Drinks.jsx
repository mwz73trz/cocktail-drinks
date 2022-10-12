import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Drinks = () => {
  const { loading, drinks, selectDrink, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (drinks.lenth < 1) {
    return <h4>No drinks matched your search term. Please try again.</h4>;
  }

  return (
    <section className="section-center">
      {drinks.map((singleDrink) => {
        const { idDrink, strDrink: title, strDrinkThumb: image } = singleDrink;

        return (
          <article key={idDrink} className="single-drink">
            <img
              src={image}
              className="img"
              alt="Cocktail Drink"
              onClick={() => selectDrink(idDrink)}
            />
            <footer>
              <h5>{title}</h5>
              <button
                className="like-btn"
                onClick={() => addToFavorites(idDrink)}
              >
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Drinks;
