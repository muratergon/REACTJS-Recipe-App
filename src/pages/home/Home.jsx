import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const APP_ID = "c10b6d21";
  const APP_KEY = "05d33571024533fee9a60b7f1474de84";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    console.log(data);
    setRecipes(data.hits);
  };
  console.log(recipes);

  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
