import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import useRecipe from "../hooks/useRecipe";
import CardsFeedback from "../components/CardsFeedBack";

const RecipePage = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const {
    value: { error, isPending, filteredCards },
    handleGetCardsFromApi,
    ...rest
  } = useRecipe();

  useEffect(() => {
    handleGetCardsFromApi();
  }, [handleGetCardsFromApi]);

  const { handleDeleteCard } = rest;

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCardsFromApi();
  };

  return (
    <Container>
      <PageHeader
        title="Recipes Display"
        subtitle="Here you can find all kinds of recipes"
      />
      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={filteredCards || []}
        onDeleteCard={onDeleteCard}
      />
    </Container>
  );
};

export default RecipePage;
