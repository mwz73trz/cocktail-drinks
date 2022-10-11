import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedDrink, closeModal } = useGlobalContext();
  const {
    strDrinkThumb: image,
    strDrink: title,
    strInstructions: text,
    strIngredient1: ingrd1,
    strIngredient2: ingrd2,
    strIngredient3: ingrd3,
    strIngredient4: ingrd4,
    strIngredient5: ingrd5,
    strIngredient6: ingrd6,
    strIngredient7: ingrd7,
    strIngredient8: ingrd8,
    strIngredient9: ingrd9,
    strIngredient10: ingrd10,
    strIngredient11: ingrd11,
    strIngredient12: ingrd12,
    strIngredient13: ingrd13,
    strIngredient14: ingrd14,
    strIngredient15: ingrd15,
    strMeasure1: amt1,
    strMeasure2: amt2,
    strMeasure3: amt3,
    strMeasure4: amt4,
    strMeasure5: amt5,
    strMeasure6: amt6,
    strMeasure7: amt7,
    strMeasure8: amt8,
    strMeasure9: amt9,
    strMeasure10: amt10,
    strMeasure11: amt11,
    strMeasure12: amt12,
    strMeasure13: amt13,
    strMeasure14: amt14,
    strMeasure15: amt15,
  } = selectedDrink;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Ingredients</p>
          <p>
            {ingrd1} {amt1}
          </p>
          <p>
            {ingrd2} {amt2}
          </p>
          <p>
            {ingrd3} {amt3}
          </p>
          <p>
            {ingrd4} {amt4}
          </p>
          <p>
            {ingrd5} {amt5}
          </p>
          <p>
            {ingrd6} {amt6}
          </p>
          <p>
            {ingrd7} {amt7}
          </p>
          <p>
            {ingrd8} {amt8}
          </p>
          <p>
            {ingrd9} {amt9}
          </p>
          <p>
            {ingrd10} {amt10}
          </p>
          <p>
            {ingrd11} {amt11}
          </p>
          <p>
            {ingrd12} {amt12}
          </p>
          <p>
            {ingrd13} {amt13}
          </p>
          <p>
            {ingrd14} {amt14}
          </p>
          <p>
            {ingrd15} {amt15}
          </p>
          <p>Mixing Instructions</p>
          <p>{text}</p>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
