import { useGlobalContext } from "../context";

const Favorites = () => {
  const { favorites, selectDrink, removeFromFavorites } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idDrink, strDrinkThumb: image } = item;

            return (
              <div key={idDrink} className="favorite-item">
                <img
                  src={image}
                  alt="Drink Cocktail"
                  className="favorites-img img"
                  onClick={() => selectDrink(idDrink, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idDrink)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
