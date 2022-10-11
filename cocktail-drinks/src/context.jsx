import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const allDrinksUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const randomDrinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDrinks = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.drinks) {
        setDrinks(data.drinks);
      } else {
        setDrinks([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  const fetchRandomDrink = () => {
    fetchDrinks(randomDrinkUrl);
  };

  const selectDrink = (idDrink) => {
    let drink;
    drink = drinks.find((drink) => drink.idDrink === idDrink);
    setSelectedDrink(drink);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchDrinks(allDrinksUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchDrinks(`${allDrinksUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        drinks,
        showModal,
        selectedDrink,
        selectDrink,
        closeModal,
        setSearchTerm,
        fetchRandomDrink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
