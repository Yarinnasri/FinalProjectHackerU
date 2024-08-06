import { useEffect, useState } from "react";
import { initialEditCardForm } from "../helpers/initialForms/initialCardForm";
import { useNavigate, useParams } from "react-router-dom";
import useRecipe from "../hooks/useRecipe";
import { editCardSchema } from "../models/joi-schema/cardSchema";
import { normalizeCard } from "../helpers/normalization/normalizeCard";
import useFormsValidate from "../../forms/hooks/useFormsValidate";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { mapCardToModel } from "../helpers/normalization/mapCardToModel";
import { Container } from "@mui/material";
import EditCardForm from "../components/EditCardForm";

const EditUserRecipePage = () => {
  const [initialForm, setInitForm] = useState(initialEditCardForm);
  const navigate = useNavigate();
  const { id: cardID } = useParams();
  const {
    handleEditCard,
    handleGetCardFromClient,
    value: { card },
  } = useRecipe();

  const { value, ...rest } = useFormsValidate(
    initialEditCardForm,
    editCardSchema,
    () => {
      handleEditCard(cardID, {
        ...normalizeCard(value.formData),
      });
    }
  );
  const { user } = useUser();

  useEffect(() => {
    handleGetCardFromClient(cardID).then((data) => {
      if (user._id !== data.user_id) navigate(ROUTES.CARDS);
      const modeledCard = mapCardToModel(data);
      setInitForm(modeledCard);
      rest.setFormData(modeledCard);
    });
  }, [cardID]);

  return (
    <Container
      sx={{
        pt: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditCardForm
        title="Edit Your Recipe Card"
        data={value.formData}
        onSubmit={rest.onSubmit}
        onReset={() => rest.setFormData(initialForm)}
        errors={value.formErrors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
      ></EditCardForm>
    </Container>
  );
};

export default EditUserRecipePage;
