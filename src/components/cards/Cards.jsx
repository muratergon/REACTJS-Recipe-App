import React from "react";
import { MainContainer, Card, Header, defaultImage } from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        return (
          <Card key={index}>
            <Header>{recipe.label}</Header>
            <Image src={recipe.image || defaultImage} />
            <Button onClick={() => Navigate()}>Viev More</Button>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Cards;
