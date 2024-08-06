import { useCallback, useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedBack";
import useRecipe from "../hooks/useRecipe";

const UserFavoriteRecipePage = () => {
  const { value, ...rest } = useRecipe();
  const { cards, isPending, error } = value;
  const { handleDeleteCard, handleGetUserFavCards } = rest;

  useEffect(() => {
    handleGetUserFavCards();
  }, []);

  const onDeleteCard = useCallback(async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetUserFavCards();
  }, []);

  const changeLikeStatus = useCallback(async () => {
    await handleGetUserFavCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all the recipe cards you have liked"
      />
      <CardsFeedback
        isPending={isPending}
        erorr={error}
        cards={cards}
        onDeleteCard={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default UserFavoriteRecipePage;
