import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { arrayOf, bool, func, string } from "prop-types";
import cardType from "../models/types/cardType";
import { Typography } from "@mui/material";
import Cards from "./Cards";
const CardsFeedback = ({ isPending, error, cards, onDeleteCard, onLike }) => {
  if (isPending) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <Typography color="text.primary">
        Oops... it seems there are no recipe cards to display
      </Typography>
    );
  if (cards && !!cards.length)
    return <Cards cards={cards} onDeleteCard={onDeleteCard} onLike={onLike} />;
};

CardsFeedback.propTypes = {
  isPending: bool.isRequired,
  error: string,
  cards: arrayOf(cardType),
  onLike: func.isRequired,
};

CardsFeedback.defaultProps = {
  onLike: async () => {},
};
export default CardsFeedback;
