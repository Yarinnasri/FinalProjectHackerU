import { func, object } from "prop-types";
import ROUTES from "../../routes/routesModel";
import InputComponent from "../../forms/components/InputComponent";
import FormComponent from "../../forms/components/FormComponent";
import { formatDate } from "./CardForm";

const EditCardForm = ({
  onSubmit,
  onReset,
  errors,
  data,
  onFormChange,
  onInputChange,
  title,
}) => {
  const formattedData = {
    ...data,
    dateAdded: data.dateAdded ? formatDate(data.dateAdded) : "",
    instructions: Array.isArray(data.instructions)
      ? data.instructions.join("\n")
      : "",
  };
  const handleInstructionsChange = (event) => {
    const { value } = event.target;
    const instructionsArray = value
      ? value.split("\n").map((line) => line.trim())
      : [];
    onInputChange({
      target: {
        name: "instructions",
        value: instructionsArray,
      },
    });
  };

  return (
    <FormComponent
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onFormChange}
      title={title}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.RECIPE}
    >
      <InputComponent
        name="dishTitle"
        label="Dish Title"
        error={errors.dishTitle}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="author"
        label="Author"
        error={errors.author}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="cuisine"
        label="Cuisine"
        error={errors.cuisine}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="description"
        label="Description"
        error={errors.description}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="webUrl"
        label="Web URL"
        error={errors.webUrl}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="imageUrl"
        label="image Url"
        error={errors.imageUrl}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="imageAlt"
        label="Image Alt"
        error={errors.imageAlt}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />

      <InputComponent
        name="overallTime"
        label="Overall Time (Hours)"
        error={errors.overallTime}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={true}
      />
      <InputComponent
        name="dateAdded"
        label="Date Added"
        error={errors.dateAdded}
        handleChange={onInputChange}
        type="date"
        data={formattedData}
        sm={6}
      />
      <InputComponent
        name="instructions"
        label="Instructions"
        error={errors.instructions}
        handleChange={handleInstructionsChange}
        data={formattedData}
        sm={6}
        required={false}
        multiline={true}
        rows="3"
      />
    </FormComponent>
  );
};

EditCardForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  errors: object.isRequired,
  onFormChange: func.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
};

export default EditCardForm;
