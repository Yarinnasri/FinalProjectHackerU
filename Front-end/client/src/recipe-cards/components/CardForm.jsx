import { func, object } from "prop-types";
import ROUTES from "../../routes/routesModel";
import InputComponent from "../../forms/components/InputComponent";
import FormComponent from "../../forms/components/FormComponent";
import "./CardForm.css";
import { useTheme } from "../../providers/DarkThemeProvider";
export const formatDate = (date) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const CardForm = ({
  onSubmit,
  onReset,
  errors,
  data,
  onFormChange,
  onInputChange,
  title,
}) => {
  const { isDark } = useTheme();
  const textColor = isDark ? "#e3f2fd" : "#1a0033";

  const formattedData = {
    ...data,
    dateAdded: data.dateAdded ? formatDate(data.dateAdded) : "",
    tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
    instructions: Array.isArray(data.instructions)
      ? data.instructions.join(", ")
      : "\n",
  };

  const handleTagsChange = (event) => {
    const { value } = event.target;
    onInputChange({
      target: {
        name: "tags",
        value: value.split(",").map((tags) => tags.trim()),
      },
    });
  };

  const handleInstructionsChange = (event) => {
    const { value } = event.target;
    onInputChange({
      target: {
        name: "instructions",
        value: value.split(",").map((line) => line.trim()),
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
        name="dateAdded"
        label="Date Added"
        error={errors.dateAdded}
        handleChange={onInputChange}
        type="date"
        data={formattedData}
        sm={6}
        className={isDark ? "dark-theme" : "light-theme"}
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
        name="tags"
        label="Tags"
        error={errors.tags}
        handleChange={handleTagsChange}
        data={formattedData}
        required={true}
        sm={6}
      />
      <InputComponent
        name="overallTime"
        label="Overall Time"
        error={errors.overallTime}
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
        label="Image URL"
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
        name="instructions"
        label="Instructions"
        error={errors.instructions}
        handleChange={handleInstructionsChange}
        data={formattedData}
        required={true}
        sm={6}
        multiline={true}
        rows="3"
      />
    </FormComponent>
  );
};

CardForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  errors: object.isRequired,
  data: object.isRequired,
  onFormChange: func.isRequired,
  onInputChange: func.isRequired,
};

export default CardForm;
